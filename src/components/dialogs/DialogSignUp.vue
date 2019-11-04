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
/>
</template>

<script>
export default {
  name: 'DialogSignUp',

  data () {
    return {
      dialogStateName: 'dialogSignUp',
      btnSubmitLabel: 'Registrar',
      dialogFormTitle: 'Crear una cuenta',
      messageToastBaseName: 'register',
      messageToastAction: 'successful',
      storeBase: 'auth',
      storeAction: 'signUp',
      form: {
        email: '',
        password: '',
        passwordConfirm: '',
        names: '',
        surnames: '',
      },
      formRules: {
        email: 'required|email',
        password: 'required|min:8',
        passwordConfirm: 'required|min:8|confirmed:password',
        names: 'required',
        surnames: 'required',
      },
      formSettings: {
        email: { type: 'text', icon: 'person' },
        password: { type: 'password', icon: 'lock', ref: 'password' }, // use ref for password confirm rule
        passwordConfirm: { type: 'password', icon: 'lock' },
        names: { type: 'text', icon: 'person' },
        surnames: { type: 'text', icon: 'person' },
      }
    }
  },
}
</script>
