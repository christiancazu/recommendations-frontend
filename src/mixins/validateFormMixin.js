import store from 'src/store'

export default {
  methods: {
    /**
     * using validateAll() from vee-validate to check fields validation
     *
     * @return {Boolean} promise
     */
    async $_validateFormMixin_isValid () {
      let checker = await this.$validator.validateAll()
      let objErrors = {}

      // setting errors for every field has props in objErrors
      this.errors.items.forEach(element => {
        objErrors[element.field] = element.msg
      })

      // commiting to errors module store
      store.commit('errors/SET_ERRORS', objErrors)
      if (!checker) {
        this.$q.notify({
          message: this.$i18n.t('error.invalidData'),
          color: 'negative',
          icon: 'error'
        })
      }

      return checker
    },

    $_validateFormMixin_notifyResponseSuccess (msg) {
      this.$q.notify({
        message: msg,
        color: 'positive',
        icon: 'check_circle'
      })
    }
    // $_validateFormMixin_notifyResponseFailed () {
    //   this.$q.notify({
    //     // message: this.$t(msg),
    //     color: 'positive',
    //     icon: 'check_circle'
    //   })
    // }
  }
}
