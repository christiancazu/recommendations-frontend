<template>
<base-dialog-form
  :dialog-state-name="dialogStateName"
  :form="form"
  :form-rules="formRules"
  :form-settings="formSettings"
  :btn-submit-label="btnSubmitLabel"
  :dialog-form-title="dialogFormTitle"
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
}
</script>
