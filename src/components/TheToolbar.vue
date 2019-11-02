<template>
<div>
  <q-header
    elevated
    class="row justify-center"
  >
    <q-toolbar class="col-md-10">

      <!-- left items -->
      <q-btn
        flat outline dense round
        aria-label="Menu"
        class="lt-sm text-white"
        @click="leftDrawerOpen = !leftDrawerOpen"
      >
        <q-icon name="menu" />
      </q-btn>

      <q-btn
        :to="{ name: '' }"
        flat stretch
        :class="{ 'absolute-center': isScreenSm }"
      >
        <q-avatar color="white">
          <img
            src="statics/logo.png"
            class="img-logo"
          >
        </q-avatar>
        <span class="q-mx-sm">tutoría</span>
      </q-btn>

      <q-space />

      <!-- right items -->
      <q-btn
        v-for="nav in navs" :key="nav"
        :label="$t(nav)"
        :to="{ name: nav }"
        stretch flat
        class="gt-xs"
      />

      <locale-dropdown gt-xs />

    </q-toolbar>
  </q-header>

  <q-drawer
    v-model="leftDrawerOpen"
    :width="160"
    behavior="mobile"
  >
    <q-list>

      <q-item
        v-for="nav in navs" :key="nav"
        :to="{ name: nav }"
        clickable
        class="text-center text-uppercase text-black"
      >
        <q-item-section>
          <q-item-label>{{ $t(nav) }}</q-item-label>
        </q-item-section>
      </q-item>

      <locale-dropdown arrow-right />

    </q-list>
  </q-drawer>
</div>
</template>

<script>
export default {
  name: 'TheToolbar',

  props: {
    gtSm: { type: Boolean, default: false }, // gt-sm class mode
    arrowRight: { type: Boolean, default: false }, // custom arrow direction
  },

  data () {
    return {
      navs: [
        'home',
        'about'
      ],
      leftDrawerOpen: false,
    }
  },

  computed: {
    isScreenSm () {
      return this.$q.screen.lt.sm
    }
  },

  methods: {
  }
}
</script>

<style lang="scss">
.img-logo {
  transform: scale(.9)
}
</style>