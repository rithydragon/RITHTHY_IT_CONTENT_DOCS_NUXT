FROM node:22-alpine AS builder
WORKDIR /wedding

# Build tools for native addons
RUN apk add --no-cache python3 make g++

# Copy shared module first (CEREMONY_WEBAPP_NUXT imports it via relative path)
COPY WEBAPP_NUXT_MODULE ./WEBAPP_NUXT_MODULE

WORKDIR /wedding/CEREMONY_WEBAPP_NUXT
COPY CEREMONY_WEBAPP_NUXT/package*.json ./
RUN npm ci

COPY CEREMONY_WEBAPP_NUXT .
RUN npm run build

# Production stage — serve the generated SPA with a lightweight static server
FROM node:22-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /wedding/CEREMONY_WEBAPP_NUXT/.output/public ./public
EXPOSE 3000
# CMD ["serve", "-s", "public", "-l", "3000"]
CMD ["node", ".output/server/index.mjs"]
