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
  name: 'DialogSignUp',

  data () {
    return {
      dialogStateName: 'dialogSignUp',
      btnSubmitLabel: 'Registrar',
      dialogFormTitle: 'Crear una cuenta',
      form: {
        email: '',
        password: '',
        passwordConfirm: '',
        names: '',
        surnames: '',
      },
      formRules: {
        email: 'required|email',
        password: 'required',
        passwordConfirm: 'required|confirmed:password',
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
