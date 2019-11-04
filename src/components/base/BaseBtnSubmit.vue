<template>
<q-btn
  :loading="$store.state.spinners.processingForm"
  :label="btnSubmitLabel"
  type="submit"
  color="secondary"
  class="full-width q-mt-md"
  push
/>
</template>

<script>
export default {
  name: 'BaseBtnSubmit',

  props: {
    btnSubmitLabel: { type: String, default: 'submit' }
  }
}
</script>
