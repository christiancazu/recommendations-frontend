<template>
<q-layout view="hHh lpr fFf">

  <the-toolbar />

  <q-page-container :class="{ 'q-pt-nothing': $route.name === 'home' }">
    <transition
      name="fade"
      mode="out-in"
    >
      <router-view />
    </transition>
  </q-page-container>

  <component :is="currentDialog" />

</q-layout>
</template>

<script>
export default {
  name: 'MainLayout',

  computed: {
    currentDialog () {
      const dialogNameCapitalize = this.capitalize(this.$store.state.dialogsVisibilities.mainDialog)
      return () => import(`src/components/dialogs/${dialogNameCapitalize}`)
    }
  },

  methods: {
    capitalize (text) {
      return text.charAt(0).toUpperCase() + text.slice(1)
    }
  },
}
</script>
