import i18nService from 'src/services/i18n'

export const state = {
  locale: i18nService.getCurrentLocale(),
  locales: i18nService.getLocales()
}

export const mutations = {
  SET_LOCALE: (state, locale) => {
    state.locale = locale
    i18nService.setLocale(locale)
  }
}
