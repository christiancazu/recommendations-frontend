<template>
<div>

  <q-input
    v-model="text"
    bg-color="white"
    label="Filtrar tutores"
    outlined bottom-slots
    @input="onInput($event)"
  >
    <template v-slot:append>
      <q-icon
        v-if="text !== ''"
        name="close" class="cursor-pointer" @click="text = ''"
      />
      <q-icon name="search" />
    </template>
  </q-input>

  <posts />
</div>
</template>

<script>
export default {
  name: 'DashboardPage',

  data () {
    return {
      text: ''
    }
  },

  methods: {
    onInput (text) {
      this.$store.commit('posts/FILTER_DATA', text)
    }
  }
}
</script>
