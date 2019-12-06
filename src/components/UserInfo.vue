<template>
<q-item
  v-ripple clickable
>
  <q-item-section side>
    <q-avatar
      size="48px"
    >
      <img src="statics/current-user.png">
      <!-- <q-badge
        floating
        color="teal"
      >
        new
      </q-badge> -->
    </q-avatar>
  </q-item-section>
  <q-item-section>
    <q-item-label>{{ user.names }}</q-item-label>
    <!-- <q-item-label caption>2 new messages</q-item-label> -->
  </q-item-section>
  <q-item-section
    side
    class="text-primary"
  >
    <q-badge

      align="middle" color="primary"
    >
      {{ user.roles[0] }}
    </q-badge>
  </q-item-section>
</q-item>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('auth', ['user'])
  }
}
</script>

<style>

</style>