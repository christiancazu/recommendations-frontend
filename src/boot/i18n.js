import VueI18n from 'vue-i18n'
import messages from 'src/i18n'

/**
 * lang international plugin
 * [vue-i18n] plugin to translate text
 * [messages] content package texts translations
 */
export default async ({ app, Vue, store }) => {
  Vue.use(VueI18n)

  // Set i18n instance on app
  app.i18n = new VueI18n({
    locale: store.state.i18n.locale,
    fallbackLocale: process.env.FALLBACK_LOCALE,
    messages
  })

  // allowing locale prototype for i18n
  Vue.prototype.$locale = {
    /**
     * change current locale
     * @param {String} language
     */
    change: language => (app.i18n.locale = language),

    /**
     * get current locale
     * @returns {String} locale
     */
    getLocale: () => app.i18n.locale
  }
}
