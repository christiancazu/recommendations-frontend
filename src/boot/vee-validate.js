import VeeValidate, { Validator } from 'vee-validate'

import validationMessages from 'vee-validate/dist/locale/es'

/**
 * [vee-validate] plugin to validate forms
 * [validationMessages] content his own translate package
 */
export default async ({ Vue, store }) => {
  Vue.use(VeeValidate, {
    dictionary: {
      es: validationMessages
    },
    events: ''
  })

  // initialize language vee-validate from store
  Validator.localize(store.state.i18n.locale)
}
