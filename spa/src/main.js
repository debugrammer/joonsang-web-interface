import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'
// 컴포넌트·디렉티브 전역 등록 없음 — vite-plugin-vuetify autoImport가
// 템플릿 사용분만 청크별로 임포트한다(트리셰이킹 전제).
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
// Vuetify 2 외형 호환 — v2 카드/툴바/컨테이너 패딩·다크 표면 색 복원
import './styles/vuetify2-compat.css'
import App from './App.vue'
import router from './router/index.js'
import i18n from './i18n/index.js'
import { installGtag } from './plugins/gtag.js'

const vuetify = createVuetify({
  theme: {
    // Nuxt 원본(nuxt.config.js vuetify.theme)의 다크 테마 색상 1:1 보존
    defaultTheme: 'dark',
    themes: {
      dark: {
        dark: true,
        colors: {
          // v2 다크 표면 색 복원 — v3 기본 surface(#212121)는 v2(#1E1E1E)보다 밝다
          background: '#121212',
          surface: '#1e1e1e',
          primary: '#ff7597',
          accent: '#ff0266',
          secondary: '#2a2a2a',
          info: '#26a69a',
          warning: '#ffc107',
          error: '#dd2c00',
          success: '#00e676'
        }
      }
    }
  }
})

// 지연 라우트 방어 — 재배포로 이전 해시 청크가 404가 되면 전체 새로고침으로
// 새 매니페스트를 받는다. 10초 안 재발이면(서버 자체 결함) 복구 시도 없이
// 에러로 전파해 무한 리로드를 막는다.
window.addEventListener('vite:preloadError', (event) => {
  const reloadedAt = Number(
    sessionStorage.getItem('vitePreloadErrorReloadedAt') || 0
  )
  if (Date.now() - reloadedAt < 10000) {
    return
  }
  sessionStorage.setItem('vitePreloadErrorReloadedAt', String(Date.now()))
  event.preventDefault()
  window.location.reload()
})

installGtag(router)

createApp(App)
  .use(createPinia())
  .use(router)
  .use(i18n)
  .use(vuetify)
  .mount('#app')
