<template>
<q-layout view="hHh lpr fFf">

  <the-toolbar />

  <q-page-container>
    <transition name="fade">
      <router-view />
    </transition>
  </q-page-container>

</q-layout>
</template>

<script>
export default {
  name: 'MainLayout'
}
</script>
