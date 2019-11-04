<template>
<q-input
  v-model="model"
  v-validate="rules"
  bottom-slots
  color="secondary"
  :name="prop"
  :type="type"
  :data-vv-as="$t(prop)"
  :label="$t(prop)"
  :error-message="error"
  :error="!!error"
  autocomplete="off"
  @input="$emit('input-value', model)"
>
  <template v-slot:prepend>
    <q-icon
      :name="icon"
      color="secondary"
    />
  </template>
</q-input>
</template>

<script>
export default {
  name: 'BaseInputText',

  props: {
    value: { type: String, required: true },

    rules: { type: String, required: true },

    prop: { type: String, required: true },

    type: { type: String, default: 'text' },

    error: { type: String, default: '' },

    icon: { type: String, default: '' }
  },

  data () {
    return {
      model: this.value,
      errorx: this.error
    }
  },

  watch: {
    error (val, www) {
      console.warn(val, www)
    }
  }
}
</script>
