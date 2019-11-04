<template>
<q-dialog
  v-model="$store.state.dialogsVisibilities[dialogStateName]"
>
  <q-card class="full-width">
    <q-card-section>
      <div class="text-h6 text-center text-secondary">
        {{ dialogFormTitle }}
      </div>
    </q-card-section>

    <q-separator inset />

    <q-card-section>
      <q-form
        class="q-gutter-xs"
        @submit="onSubmit"
      >

        <q-input
          v-for="(v, field, index) in form" :key="index"
          v-model="form[field]"
          v-validate="formRules[field]"
          :data-vv-as="$t(field)"
          :label="$t(field)"
          :error-message="formErrors[field]"
          :error="!!formErrors[field]"
          color="secondary"
          :name="field"
          :type="formSettings[field].type"
          bottom-slots
          autocomplete="off"
        >
          <template v-slot:prepend>
            <q-icon
              :name="formSettings[field].icon"
              color="secondary"
            />
          </template>
        </q-input>

        <base-btn-submit :btn-submit-label="btnSubmitLabel" />

      </q-form>
    </q-card-section>
  </q-card>
</q-dialog>
</template>

<script>
import validateFormMixin from 'src/mixins/validateFormMixin'

import { mapState, mapMutations } from 'vuex'

export default {
  mixins: [validateFormMixin],

  props: {
    dialogStateName: { type: String, required: true },
    form: { type: Object, required: true },
    formRules: { type: Object, required: true },
    formSettings: { type: Object, required: true },
    dialogFormTitle: { type: String, default: 'submit' },
    btnSubmitLabel: { type: String, required: true }
  },

  computed: {
    ...mapState('errors', ['formErrors'])
  },

  methods: {
    ...mapMutations('errors', ['CLEAN_ERRORS']),

    async onSubmit () {
      if (await this.$_validateFormMixin_isValid()) {
        this.$store.commit('spinners/ENABLE_PROCESSING_FORM')
        try {
          console.warn('gaaaaaa')
          // await this.$store.dispatch('auth/signIn', this.form)
          // this.successNotify()
          // this.redirectedUser()
        }
        catch (error) {
          console.warn('error')
          // Notify.create({
          //   message: this.$t('error.data'),
          //   color: 'negative',
          //   icon: 'error'
          // })
        }
        this.$store.commit('spinners/DISABLE_PROCESSING_FORM')
      }
    },
  }
}
</script>

<style>
/** reduce padding on dialog */
.q-dialog__inner--minimized {
  padding: .5rem;
}
</style>