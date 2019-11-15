<template>
<base-dialog-form
  :dialog-state-name="dialogStateName"
  :form="form"
  :form-rules="formRules"
  :form-settings="formSettings"
  :btn-submit-label="btnSubmitLabel"
  :dialog-form-title="dialogFormTitle"
  :message-toast-base-name="messageToastBaseName"
  :message-toast-action="messageToastAction"
  :store-base="storeBase"
  :store-action="storeAction"
  @response-success="responseSuccess"
/>
</template>

<script>
export default {
  name: 'DialogSignIn',

  data () {
    return {
      dialogStateName: 'dialogSignIn',
      btnSubmitLabel: 'Ingresar',
      dialogFormTitle: 'Iniciar Sesión',
      messageToastBaseName: 'login',
      messageToastAction: 'successful',
      storeBase: 'auth',
      storeAction: 'signIn',
      form: {
        email: '',
        password: ''
      },
      formRules: {
        email: 'required|email',
        password: 'required'
      },
      formSettings: {
        email: { type: 'text', icon: 'person' },
        password: { type: 'password', icon: 'lock' },
      }
    }
  },

  methods: {
    responseSuccess () {
      this.$router.push({ name: 'dashboard' })
    }
  },
}
</script>
