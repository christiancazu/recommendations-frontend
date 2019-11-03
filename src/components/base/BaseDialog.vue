<template>
<q-dialog
  v-model="$store.state.dialogsVisibilities[dialogStateName]"
>
  <q-card class="full-width">
    <q-card-section>
      <div class="text-h6 text-center">
        submit title
      </div>
    </q-card-section>

    <q-separator inset />

    <q-card-section>
      <q-form
        class="q-gutter-xs"
        @submit="onSubmit"
      >

        <slot />

      </q-form>
    </q-card-section>
  </q-card>
</q-dialog>
</template>

<script>
export default {
  props: {
    dialogStateName: { type: String, required: true },
  },

  methods: {
    onSubmit () {

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