/*
 * 라우터 — Nuxt 파일 기반 라우팅 + nuxt-i18n(prefix_except_default) 등가.
 * URL 구조 보존: / · /portfolio (기본 로케일 kr, 프리픽스 없음)
 *               /en · /en/portfolio (영어)
 * 라우트 가드가 :locale 파라미터를 vue-i18n 로케일에 동기화한다.
 */
import { createRouter, createWebHistory } from 'vue-router'
import i18n, { DEFAULT_LOCALE } from '../i18n/index.js'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import Home from '../pages/Home.vue'

const Portfolio = () => import('../pages/Portfolio.vue')
const NotFound = () => import('../pages/NotFound.vue')

const routes = [
  {
    path: '/:locale(en)?',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'index',
        component: Home,
        meta: {
          title: 'Home',
          description: 'Home page of web developer Joonsang Park.'
        }
      },
      {
        path: 'portfolio',
        name: 'portfolio',
        component: Portfolio,
        meta: {
          title: 'Portfolio',
          description: 'Portfolio page of web developer Joonsang Park.'
        }
      }
    ]
  },
  // Nuxt layouts/error.vue(404) 등가 — 레이아웃 없이 직결 (구 empty 레이아웃)
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFound,
    meta: { title: 'Not Found' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

// URL 로케일 프리픽스 → vue-i18n 로케일 동기화 (nuxt-i18n 등가)
router.beforeEach((to) => {
  const locale = to.params.locale || DEFAULT_LOCALE
  i18n.global.locale.value = locale
  document.documentElement.lang = locale === 'kr' ? 'ko' : 'en'
  return true
})

// index.html 기본 meta description — 라우트에 description이 없으면 이 값으로
// 복원한다 (이전 페이지 값 잔존 방지, Nuxt 전역 기본값 등가)
const DEFAULT_DESCRIPTION = "Web developer Joonsang Park's website."

// Nuxt head() titleTemplate('%s - Joonsang.com') 등가 — 라우트 meta 기반
router.afterEach((to) => {
  document.title = to.meta.title
    ? `${to.meta.title} - Joonsang.com`
    : 'Joonsang.com'

  const description = document.querySelector('meta[name="description"]')
  if (description) {
    description.setAttribute(
      'content',
      to.meta.description || DEFAULT_DESCRIPTION
    )
  }
})

export default router
