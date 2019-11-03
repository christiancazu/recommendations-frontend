<template>
<q-btn-dropdown
  :label="locale"
  :menu-anchor="menuAnchor"
  icon="language"
  stretch flat
  :class="{
    'gt-xs': gtXs,
    'text-shadow' : gtXs,
    'arrow-right full-width': arrowRight,
    'sidebar-locale': arrowRight
  }"
>
  <q-list separator>
    <q-item
      v-for="(locale, index) in locales" :key="index"
      v-close-popup clickable
      tabindex="0"
      @click="setLocale(locale)"
    >
      <q-item-section>
        <q-item-label>{{ locale | languageName }}</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</q-btn-dropdown>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'LocaleDropdown',
  
  filters: {
    languageName (val) {
      return val === 'en' ? 'English' : 'Español'
    }
  },

  props: {
    gtXs: { type: Boolean }, // gt-sm class mode
    arrowRight: { type: Boolean }, // custom arrow direction
  },

  computed: {
    ...mapState('i18n', [
      'locale',
      'locales'
    ]),

    // bottom right is for default from quasar
    menuAnchor () {
      return this.arrowRight ? 'top left' : 'bottom right'
    }
  },

  methods: {
    // change locale language
    setLocale (locale) {
      this.$store.commit('i18n/SET_LOCALE', locale)
    }
  }  
}
</script>

<style lang="scss">
// fix styles on btn dropdown sidebar
.sidebar-locale {
  .q-btn__content {
    font-weight: 400;
    padding: .4rem;
  }
  /* custom: arrow direction to right in dropdown and rotation animation */
  &.arrow-right {
    & .q-btn-dropdown__arrow {
      transform: rotate(-90deg)
    }
    /* arror rotation animation*/
    & .rotate-180 {
      transform: rotate3d(0, 0, 1, 90deg)
    }
  }
}
</style>
