/*
 * vue-i18n 구성 — nuxt-i18n 등가.
 * 로케일 코드는 원본(nuxt.config.js)의 'kr'/'en'을 그대로 보존한다
 * (URL 프리픽스·로케일 파일 키와 1:1 — BCP 47 'ko'로 바꾸지 말 것).
 */
import { createI18n } from 'vue-i18n'
import kr from '../locales/kr.json'
import en from '../locales/en.json'

export const DEFAULT_LOCALE = 'kr'
export const SUPPORTED_LOCALES = ['kr', 'en']

export default createI18n({
  legacy: false,
  globalInjection: true,
  locale: DEFAULT_LOCALE,
  fallbackLocale: DEFAULT_LOCALE,
  messages: { kr, en }
})
