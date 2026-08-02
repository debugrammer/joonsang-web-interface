/*
 * 서버 엔트리 — SPA 빌드 산출물(spa/dist) 정적 서빙.
 * 구 Nuxt SSR 엔트리(server/index.js)를 대체하는 유일한 서버 경로다.
 *
 * 실행: cross-env NODE_ENV=development node server/standalone.js
 * 포트는 STANDALONE_PORT로 재정의할 수 있다 (기본: app.env의 server.port).
 */
const fs = require('fs')
const path = require('path')
const express = require('express')
const consola = require('consola')
const { appEnv, env } = require('./config.js')

const spaDist = path.join(__dirname, '..', 'spa', 'dist')

function start() {
  if (!fs.existsSync(path.join(spaDist, 'index.html'))) {
    consola.error(
      `spa/dist 빌드 산출물이 없습니다 — 먼저 "npm run spa-build-${
        env.PROFILE === 'production' ? 'prod' : 'dev'
      }"를 실행하세요.`
    )
    process.exit(1)
  }

  const app = express()

  // Health check
  app.get('/status', (req, res) => res.send('ALIVE'))

  // 캐시 규칙: 해시 파일명 자산(/assets)은 불변 캐시, index.html은 매번 재검증 —
  // 재배포 후 stale index.html이 이전 해시 청크를 가리키며 404가 나는 것을 막는다
  app.use(
    express.static(spaDist, {
      // 디렉토리 리다이렉트 비활성 — dist의 /portfolio(이미지 폴더)와 SPA 라우트
      // /portfolio가 겹쳐 301 → /portfolio/ 로 URL이 바뀌는 것을 막는다
      redirect: false,
      setHeaders: (res, filePath) => {
        if (filePath.endsWith('.html')) {
          res.setHeader('Cache-Control', 'no-cache')
        } else if (filePath.includes(`${path.sep}assets${path.sep}`)) {
          res.setHeader('Cache-Control', 'public, max-age=31536000, immutable')
        }
      }
    })
  )

  // dist 최상위 디렉토리 = 정적 자산 네임스페이스 (부팅 시 실측 — spa/public에
  // 폴더가 추가돼도 목록 하드코딩 없이 자동 반영)
  const assetDirs = fs
    .readdirSync(spaDist, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => `/${entry.name}/`)

  // SPA 폴백 — 비-API GET은 index.html (vue-router history 모드).
  // 누락 정적 자산이 index.html 200으로 은폐되지 않도록 (a) 자산 네임스페이스
  // 안의 확장자 있는 경로 (b) HTML을 받지 않는 서브리소스 요청(img·script 등)만
  // 404 처리한다. 그 밖의 내비게이션은 경로의 점(.) 포함 여부와 무관하게 SPA로
  // 폴백해 브랜드 404 화면(NotFound 라우트)을 유지한다.
  app.get(/^\/(?!status).*/, (req, res) => {
    const isAssetPath = assetDirs.some((dir) => req.path.startsWith(dir))

    if ((isAssetPath && path.extname(req.path)) || !req.accepts('html')) {
      return res.status(404).type('text').send('Not Found')
    }

    res.set('Cache-Control', 'no-cache')
    res.sendFile(path.join(spaDist, 'index.html'))
  })

  const port = process.env.STANDALONE_PORT || appEnv.server.port
  const host = appEnv.server.host

  app.listen(port, host)

  consola.ready({
    message: `Standalone server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
