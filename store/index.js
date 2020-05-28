export const state = () => ({
  locales: ['kr', 'en'],
  locale: 'kr'
})

export const mutations = {
  setLang(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}
