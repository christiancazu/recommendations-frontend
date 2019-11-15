<template>
<q-card
  flat bordered
  class="card-interests"
>
  <q-form
    class="q-pa-sm-none q-pa-md-md"
    @submit="onSubmit"
  >
    <q-card-section>
      <div class="text-h6 text-primary">Establezca su tutoría</div>
    </q-card-section>

    <q-separator inset />

    <!-- languages -->
    <q-card-section>
      <div class="text-subtitle2 text-secondary">Lenguajes de programación</div>
    </q-card-section>

    <q-card-section>
      <interests
        v-for="(language, index) in languages" :key="index"
        :interest="language"
        @selected="selectItem(language)"
      />
    </q-card-section>

    <q-card-section>
      <base-btn-submit
        :btn-submit-label="'Guardar'"
      />
    </q-card-section>
  </q-form>
</q-card>
</template>

<script>
import { Notify } from 'quasar'

export default {
  name: 'InterestsPage',

  data () {
    return {
      languages: [
        { name: 'php', label: 'PHP', value: false },
        { name: 'java', label: 'Java', value: false },
        { name: 'go', label: 'Go', value: false },
        { name: 'csharp', label: 'C#', value: false },
        { name: 'cplusplus', label: 'C++', value: false },
        { name: 'ruby', label: 'Ruby', value: false },
        { name: 'python', label: 'Python', value: false },
        { name: 'javascript', label: 'JavaScript', value: false }
      ],
      form: {}
    }
  },

  methods: {
    selectItem (item) {
      item.value = !item.value
    },

    onSubmit () {
      Notify.create({
        message: 'Su perfil de tutor se ha guardado',
        color: 'positive',
        icon: 'check_circle'
      })
    }
  },
}
</script>

<style lang="scss">
.card-profile {
  // background-color: $white;
}
</style>