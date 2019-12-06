<template>
<q-card
  flat bordered
  class="card-interests"
>
  <q-form
    class="q-pa-sm-none q-pa-md-md"
    @submit="onSubmit"
  >
    <q-card-section class="flex justify-between">
      <div class="text-h6 text-primary">Establezca su tutoría</div>
      <q-toggle
        v-model="isTutor"
        color="secondary"
        label="Tutor"
      />

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
      <q-input
        v-model="description"
        autogrow
        label="Descripción"
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
        { name: 'javascript', label: 'JavaScript', value: false },
        { name: 'mysql', label: 'DB MySQL', value: false },
        { name: 'sqlserver', label: 'DB SQL Server', value: false },
        { name: 'mongo', label: 'DB Mongo', value: false }
      ],
      isTutor: false,
      description: ''
    }
  },

  mounted () {
    if (this.$store.state.auth.user.skills.length)
      this.languages = this.$store.state.auth.user.skills

    if (this.$store.state.auth.user.description)
      this.description = this.$store.state.auth.user.description

    this.isTutor = !!this.$store.getters['auth/isTutor']
  },

  methods: {
    selectItem (item) {
      item.value = !item.value
    },

    async onSubmit () {
      this.$store.commit('spinners/ENABLE_PROCESSING_FORM')

      try {
        let form = { skills: this.languages, description: this.description }

        if (this.isTutor) {
          form['roles'] = ['tutor']
        } else {
          form['roles'] = ['user']
        }

        await this.$store.dispatch('users/updateSkills', form)

        Notify.create({
          message: 'Su perfil de tutor se ha guardado',
          color: 'positive',
          icon: 'check_circle'
        })
      }
      catch (error) {
        Notify.create({
          message: 'no se pudieron guardar los cambios',
          color: 'negative',
          icon: 'error'
        })
      }
      this.$store.commit('spinners/DISABLE_PROCESSING_FORM')
    }
  },
}
</script>
