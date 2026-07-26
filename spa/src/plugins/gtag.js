/*
 * Google Analytics 4 (gtag.js) 로더 — @nuxtjs/google-analytics 대체.
 *
 * 주의: 구 Universal Analytics(UA-...) 속성은 2023-07 종료되어 수집되지 않는다.
 * app.env의 googleAnalytics.id가 GA4 측정 ID(G-...)일 때만 주입하고,
 * UA ID·플레이스홀더면 건너뛴다 (GA4 전환 전까지 의도된 동작).
 */
import { env } from '../env.js'

export const installGtag = (router) => {
  const id = env.GOOGLE_ANALYTICS_ID

  if (!id || !id.startsWith('G-')) {
    if (id && id.startsWith('UA-')) {
      console.warn(
        '[gtag] Universal Analytics ID는 지원 종료 — GA4 측정 ID(G-...)로 교체 필요'
      )
    }
    return
  }

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag = gtag

  gtag('js', new Date())
  // SPA 라우팅과 중복 집계를 피하기 위해 초기 page_view는 끄고 라우터에서 발송
  gtag('config', id, { send_page_view: false })

  router.afterEach((to) => {
    gtag('event', 'page_view', {
      page_title: document.title,
      page_path: to.fullPath,
      page_location: window.location.href
    })
  })
}
