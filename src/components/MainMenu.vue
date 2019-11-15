<template>
<q-list padding>
  <q-item
    v-for="(option, index) in options" :key="index"
    v-ripple clickable exact
    active-class="menu-active-link"
    :to="{ name: option.link }"
  >
    <q-item-section avatar>
      <q-icon :name="option.icon" />
    </q-item-section>

    <q-item-section>{{ option.label }}</q-item-section>
  </q-item>

  <q-separator spaced />

  <q-item
    v-ripple clickable
  >
    <q-item-section avatar>
      <q-icon name="settings" />
    </q-item-section>

    <q-item-section>Configuraciones</q-item-section>
  </q-item>

  <q-item
    v-ripple clickable
  >
    <q-item-section avatar>
      <q-icon name="help" />
    </q-item-section>

    <q-item-section>Ayuda</q-item-section>
  </q-item>
</q-list>
</template>

<script>
export default {
  data () {
    return {
      options: [
        { link: 'dashboard', label: "Panel de control", icon: 'dashboard' },
        { link: 'tutorship', label: "Tutoría", icon: 'supervisor_account' },
        { link: 'interests', label: "Interéses", icon: 'person' }
      ]
    }
  }
}
</script>
