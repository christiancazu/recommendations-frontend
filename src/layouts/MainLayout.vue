<template>
<q-layout view="hHh lpr fFf">

  <the-toolbar />

  <q-page-container>
    <router-view />
  </q-page-container>

</q-layout>
</template>

<script>
export default {
  name: 'MainLayout'
}
</script>
