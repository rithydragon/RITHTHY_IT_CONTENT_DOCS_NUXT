import _RemarkEmoji from 'remark-emoji'
import _Highlight from 'D:/1_RITHY/1_PROJECT PROGRAMMING/PROJECTS/OFFICIAL PROJECT/NUXT/RITHTHY_IT_CONTENT_DOCS_NUXT/node_modules/@nuxtjs/mdc/dist/runtime/highlighter/rehype-nuxt.js'

export const remarkPlugins = {
  'remark-emoji': { instance: _RemarkEmoji },
}

export const rehypePlugins = {
  'highlight': { instance: _Highlight, options: {} },
}

export const highlight = {"theme":{"light":"material-theme-lighter","default":"material-theme","dark":"material-theme-palenight"}}