<template>
<q-dialog
  v-model="$store.state.dialogsVisibilities[dialogStateName]"
  @hide="$store.commit('errors/CLEAN_ERRORS')"
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
        class="q-pa-sm-none q-pa-md-md"
        @submit="onSubmit"
      >
        <q-input
          v-for="(item, key, index) in form" :key="index"
          :ref="formSettings[key].ref"
          v-model="form[key]"
          v-validate="formRules[key]"
          :data-vv-as="$t(key)"
          :label="$t(key)"
          :error-message="formErrors[key]"
          :error="!!formErrors[key]"
          color="secondary"
          :name="key"
          :type="formSettings[key].type"
          bottom-slots
          autocomplete="off"
        >
          <template v-slot:prepend>
            <q-icon
              :name="formSettings[key].icon"
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

import { Notify } from 'quasar'

export default {
  mixins: [validateFormMixin],

  props: {
    dialogStateName: { type: String, required: true },
    form: { type: Object, required: true },
    formRules: { type: Object, required: true },
    formSettings: { type: Object, required: true },
    dialogFormTitle: { type: String, default: 'submit' },
    btnSubmitLabel: { type: String, required: true },
    messageToastBaseName: { type: String, required: true },
    messageToastAction: { type: String, required: true },
    storeBase:{ type: String, required: true },
    storeAction: { type: String, required: true }

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
          await this.$store.dispatch(`${this.storeBase}/${this.storeAction}`, this.form)
          Notify.create({
            message: this.$t(`${this.messageToastBaseName}.${this.messageToastAction}`),
            color: 'positive',
            icon: 'check_circle'
          })
          this.$emit('response-success')
        }
        catch (error) {}
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