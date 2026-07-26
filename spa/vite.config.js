import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

// 프로파일 규칙: development(로컬 실행) / production(배포).
// 프로파일은 APP_PROFILE로 전달한다 — NODE_ENV를 쓰면 vite의 production 판정
// (import.meta.env.PROD·최적화)과 충돌하므로 분리한다.
// app.env.{profile}.json에서 클라이언트 노출 값만 골라 __APP_ENV__로 인라인한다.
const PROFILES = ['development', 'production']

const loadClientEnv = (profile) => {
  const file = fileURLToPath(
    new URL(`../app.env.${profile}.json`, import.meta.url)
  )
  const appEnv = JSON.parse(readFileSync(file, 'utf8'))
  const spaPackage = JSON.parse(
    readFileSync(fileURLToPath(new URL('package.json', import.meta.url)), 'utf8')
  )

  return {
    GOOGLE_ANALYTICS_ID: appEnv.googleAnalytics.id,
    PROFILE: profile,
    BUILD_VERSION: spaPackage.version || 'unknown'
  }
}

export default defineConfig(() => {
  const profile = PROFILES.includes(process.env.APP_PROFILE)
    ? process.env.APP_PROFILE
    : 'development'
  const clientEnv = loadClientEnv(profile)

  return {
    plugins: [
      // whitespace preserve — Vue 2(Nuxt 2, vue-template-compiler 기본)는 요소 사이
      // 개행 공백을 텍스트 노드(" ")로 보존하는데 Vue 3 기본(condense)은 제거한다.
      // 원본이 이 공백에 기대던 인라인 간격(칩 나열 등) 보존
      vue({ template: { compilerOptions: { whitespace: 'preserve' } } }),
      vuetify({ autoImport: true })
    ],
    define: {
      __APP_ENV__: JSON.stringify(clientEnv)
    },
    build: {
      outDir: 'dist',
      rollupOptions: {
        output: {
          // 페이지 전용 대형 라이브러리(chart.js)를 초기 로드에서 분리한다.
          // 나머지 node_modules는 공통 vendor 청크로 유지한다.
          manualChunks(id) {
            if (!id.includes('node_modules')) {
              return undefined
            }
            if (id.includes('chart.js') || id.includes('vue-chartjs')) {
              return 'vendor-chart'
            }
            return 'vendor'
          }
        }
      }
    }
  }
})
