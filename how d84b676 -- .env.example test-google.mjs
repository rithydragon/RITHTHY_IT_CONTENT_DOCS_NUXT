[33mcommit d84b6760bfe52456cd8492f1f3be2705a9fbf02d[m
Author: rithydragon <riththy.learn@gmail.com>
Date:   Sun Sep 27 13:41:39 2026 +0700

    New

[1mdiff --git a/.env.example b/.env.example[m
[1mnew file mode 100644[m
[1mindex 0000000..ad10914[m
[1m--- /dev/null[m
[1m+++ b/.env.example[m
[36m@@ -0,0 +1,9 @@[m
[32m+[m[32mNODE_ENV=development[m
[32m+[m[32mENCRYPTION_KEY=Gk3Fz0k2Vx1k9d8Qm7n6Pp4Rz2y1Wv8Lk3Jm9Qx0AbCdEfGhIjKlMnOpQrStUv[m
[32m+[m[32mNUXT_PUBLIC_API_BASE=http://localhost:45687/[m
[32m+[m[32mDEV_WEB_URL=http://localhost:45687/[m
[32m+[m[32mWEB_URL=https://techapi.angkordragon.space/[m
[32m+[m
[32m+[m[32mAI_GATEWAY_API_KEY=vck_6cukmzvSFLlVcAqQlUvFs7BntA4jzjJmhnGge2IYmjjAJS2qn33W43FG[m
[32m+[m[32mANTHROPIC_API_KEY=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[m
[32m+[m[32m# ANTHROPIC_API_KEY=apikey_01Rj2N8SVvo6BePZj99NhmiT[m
\ No newline at end of file[m
[1mdiff --git a/test-google.mjs b/test-google.mjs[m
[1mnew file mode 100644[m
[1mindex 0000000..e6bde17[m
[1m--- /dev/null[m
[1m+++ b/test-google.mjs[m
[36m@@ -0,0 +1,22 @@[m
[32m+[m[32mconst response = await fetch([m
[32m+[m[32m  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AQ.Ab8RN6LUuBIL6qg8-w4Jkg67aaLM7A7x_zmGhnno12cl-XnD6g",[m
[32m+[m[32m  {[m
[32m+[m[32m    method:"POST",[m
[32m+[m[32m    headers:{[m
[32m+[m[32m      "Content-Type":"application/json"[m
[32m+[m[32m    },[m
[32m+[m[32m    body:JSON.stringify({[m
[32m+[m[32m      contents:[[m
[32m+[m[32m        {[m
[32m+[m[32m          parts:[[m
[32m+[m[32m            {[m
[32m+[m[32m              text:"Hello"[m
[32m+[m[32m            }[m
[32m+[m[32m          ][m
[32m+[m[32m        }[m
[32m+[m[32m      ][m
[32m+[m[32m    })[m
[32m+[m[32m  }[m
[32m+[m[32m)[m
[32m+[m
[32m+[m[32mconsole.log(await response.json())[m
\ No newline at end of file[m
