<template>
<div>
  <q-scroll-observer @scroll="onScrollObserver" />

  <q-header
    :elevated="elevatedOnScrollDown"
    :class="[
      { 'elevated-on-scroll-up': elevatedOnScrollUp, 'bg-transparent': !elevatedOnScrollDown },
      [`row justify-center`, 'text-shadow']
    ]"
  >
    <q-toolbar class="col-md-10">
      <!-- left items -->
      <q-btn
        flat
        outline
        dense
        round
        aria-label="Menu"
        class="lt-sm text-white"
        @click="leftDrawerOpen = !leftDrawerOpen"
      >
        <q-icon name="menu" />
      </q-btn>

      <q-btn
        :to="{ name: 'home' }"
        flat stretch :class="{ 'absolute-center': isScreenSm }"
      >
        <q-avatar color="white">
          <img
            src="statics/logo.png"
            class="img-logo"
          >
        </q-avatar>
        <span class="q-mx-sm">{{ $t('tutorship') }}</span>
      </q-btn>

      <q-space />

      <!-- right items -->
      <q-btn
        v-for="nav in navs"
        :key="nav"
        :label="$t(nav)"
        :to="{ name: nav }"
        stretch
        flat
        class="gt-xs"
      />

      <template v-if="!user">
        <q-btn
          v-for="dialog in dialogs"
          :key="dialog.name"
          :label="$t(dialog.name)"
          stretch
          flat
          class="gt-xs text-shadow"
          @click="openDialog(dialog.stateName)"
        />
      </template>
      <template v-else>
        <q-btn
          :label="$t('logout.default')"
          stretch
          flat
          class="gt-xs text-shadow"
          @click="logout()"
        />
      </template>

      <locale-dropdown gt-xs />
    </q-toolbar>
  </q-header>

  <q-drawer
    v-model="leftDrawerOpen"
    :width="160" behavior="mobile"
  >
    <q-list>
      <q-item
        :to="{ name: 'home' }"
        clickable class="text-center text-uppercase text-black"
      >
        <q-item-section>
          <q-item-label>{{ $t('home') }}</q-item-label>
        </q-item-section>
      </q-item>

      <q-item
        v-for="nav in navs"
        :key="nav"
        :to="{ name: nav }"
        clickable
        class="text-center text-uppercase text-black"
      >
        <q-item-section>
          <q-item-label>{{ $t(nav) }}</q-item-label>
        </q-item-section>
      </q-item>

      <template v-if="!user">
        <q-item
          v-for="dialog in dialogs"
          :key="dialog.name"
          clickable
          class="text-center text-uppercase text-black"
          @click="openDialog(dialog.stateName)"
        >
          <q-item-section>
            <q-item-label>{{ $t(dialog.name) }}</q-item-label>
          </q-item-section>
        </q-item>
      </template>
      <template v-else>
        <q-item
          clickable
          class="text-center text-uppercase text-black" @click="logout()"
        >
          <q-item-section>
            <q-item-label>{{ $t('logout.default') }}</q-item-label>
          </q-item-section>
        </q-item>
      </template>

      <locale-dropdown arrow-right />
    </q-list>
  </q-drawer>
</div>
</template>

<script>
import { mapState } from 'vuex'

import { Notify } from 'quasar'

export default {
  name: 'TheToolbar',

  data () {
    return {
      navs: ['dashboard'],
      dialogs: [
        { name: 'signIn', stateName: 'dialogSignIn' },
        { name: 'signUp', stateName: 'dialogSignUp' }
      ],
      leftDrawerOpen: false,
      elevatedOnPosition: 240,
      scroll: {
        position: 0,
        direction: ''
      },
      assignedBgColor: ''
    }
  },

  computed: {
    ...mapState('auth', ['user']),

    isScreenSm () {
      return this.$q.screen.lt.sm
    },

    /**
     * to apply elevated-on-scroll-up css clss
     */
    elevatedOnScrollUp () {
      return (
        this.scroll.position < this.elevatedOnPosition &&
        this.scroll.direction === 'up' &&
        this.$route.name === 'home'
      )
    },

    /**
     * apply elevated directive on header if not in home route
     * or scroll.position > this.elevatedOnPosition
     */
    elevatedOnScrollDown () {
      return this.$route.name !== 'home' ? true : this.scroll.position > this.elevatedOnPosition
    }
  },

  watch: {
    $route () {
      this.verifyCurrentRouteToAssignBgColor()
    }
  },

  mounted () {
    this.verifyCurrentRouteToAssignBgColor()
  },

  methods: {
    /**
     * set dynamic dialog & stateName
     */
    openDialog (dialogStateName) {
      this.$store.commit('dialogsVisibilities/SET_DYNAMIC_MAIN_DIALOG', dialogStateName)
      this.$store.commit('dialogsVisibilities/OPEN_DIALOG', dialogStateName)
    },
    /**
     * handler of q-scroll-observer component
     */
    onScrollObserver (info) {
      this.scroll.position = info.position
      this.scroll.direction = info.direction
    },

    logout () {
      this.$store.commit('auth/PURGE_AUTH')
      this.$router.push({ name: 'home' })
      Notify.create({
        message: this.$t('logout.successful'),
        color: 'positive',
        icon: 'check_circle'
      })
    },

    verifyCurrentRouteToAssignBgColor (name = this.$route.name) {
      this.assignedBgColor = name === 'home' ? 'transparent' : 'primary'
    }
  }
}
</script>

<style lang="scss" scoped>
.img-logo {
  transform: scale(0.9);
}
.q-header {
  transition: background-color 1s;
}
.q-layout__shadow {
  animation: 1s forwards fadeInElevated;
}
.elevated-on-scroll-up {
  animation: 1s forwards fadeOutElevated;
}
@keyframes fadeInElevated {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadeOutElevated {
  0% {
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2), 0 0px 10px rgba(0, 0, 0, 0.24);
  }
  100% {
    box-shadow: 0;
  }
}
</style>
