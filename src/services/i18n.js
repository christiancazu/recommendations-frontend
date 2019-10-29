import { Cookies } from 'quasar'

import { Validator } from 'vee-validate'

import Vue from 'vue'

export default {
  /**
   * return locale if are cached in cookies
   * or by default in window.config.locale(script)
   *
   * @returns {String} locale:'es-es'
   */
  getCurrentLocale: () => Cookies.get('locale') || process.env.FALLBACK_LOCALE,

  /**
   * return array locales in window.config.locale(script)
   *
   * @returns {String} locales:{en:'en-us',es:'es-es'}
   */
  getLocales: () => [...process.env.LOCALES.split(',')],

  /**
   * set locale lang in : Cookies | i18n(in prototype $locale) | vee-validate
   *
   * @param {String} locale
   */
  setLocale: locale => {
    Cookies.set('locale', locale)
    Vue.prototype.$locale.change(locale)
    Validator.localize(locale)
  }
}
