<template>
<div>
  <div class="row">
    <q-input
      v-model="text"
      class="col-8"
      bg-color="white"
      label="Lenguaje de programación"
      outlined bottom-slots
    >
      <template v-slot:append>
        <q-icon
          v-if="text !== ''"
          name="close" class="cursor-pointer" @click="text = ''"
        />
      </template>
    </q-input>

    <div class="col-4">
      <q-btn
        class="full-width q-pa-sm"
        color="secondary"
        icon="search"
        push
        label="Buscar tutor"
        @click="getRecommended"
      />
    </div>

  </div>

  <h6 class="text-secondary q-ma-none text-center">TUTORES</h6>

  <posts />

</div>
</template>

<script>
export default {
  name: 'DashboardPage',

  data () {
    return {
      text: '',
      labels: [
        'PHP',
        'Java',
        'Go',
        'C#',
        'C++',
        'Ruby',
        'Ruby',
        'Python',
        'JavaScript',
        'DB MySQL',
        'DB SQL Server',
        'DB Mongo'
      ]
    }
  },

  async created () {
    this.$store.commit('users/SET_CRITERIA_SKILLS', this.text)
    await this.$store.dispatch('users/getRecommendations')
    await this.$store.dispatch('users/getUsers')

  },

  methods: {
    getRecommended () {
      this.$store.commit('users/SET_CRITERIA_SKILLS', this.text)
    }
  }
}
</script>
