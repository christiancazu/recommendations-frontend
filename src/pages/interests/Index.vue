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
      <div class="text-h6 text-primary">Establezca sus interéses</div>
    </q-card-section>

    <q-separator inset />

    <!-- areas -->
    <q-card-section>
      <div class="text-subtitle2 text-secondary">Áreas</div>
    </q-card-section>

    <q-card-section>
      <interests
        v-for="(area, index) in areas" :key="index"
        :interest="area"
        @selected="selectItem(area)"
      />
    </q-card-section>

    <q-separator inset />

    <!-- hobbies -->
    <q-card-section>
      <div class="text-subtitle2 text-secondary">Hobbies</div>
    </q-card-section>

    <q-card-section>
      <interests
        v-for="(hobby, index) in hobbies" :key="index"
        :interest="hobby"
        @selected="selectItem(hobby)"
      />
    </q-card-section>

    <q-separator inset />

    <!-- sports -->
    <q-card-section>
      <div class="text-subtitle2 text-secondary">Deportes</div>
    </q-card-section>

    <q-card-section>
      <interests
        v-for="(sport, index) in sports" :key="index"
        :interest="sport"
        @selected="selectItem(sport)"
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
      <base-btn-submit
        :btn-submit-label="'Guardar'"
      />
    </q-card-section>
  </q-form>
</q-card>
</template>

<script>
import validateFormMixin from 'src/mixins/validateFormMixin'

import { Notify } from 'quasar'

export default {
  name: 'InterestsPage',

  mixins: [validateFormMixin],

  data () {
    return {
      areas: [
        { name: 'database', label: 'Base de datos', value: false },
        { name: 'ti', label: 'Tecnologías de información', value: false },
        { name: 'development', label: 'Desarrollo de software', value: false },
        { name: 'securityInformatic', label: 'Seguridad informática', value: false },
        { name: 'softwareEngineering', label: 'Ingenéria de software', value: false }
      ],
      sports: [
        { name: 'football' ,label: 'Fútbol', value: false },
        { name: 'basket' ,label: 'Basket', value: false },
        { name: 'swimming' ,label: 'Natación', value: false },
        { name: 'gymnastics' ,label: 'Gimnasia', value: false },
        { name: 'surfing' ,label: 'Surf', value: false }
      ],
      hobbies: [
        { name: 'films', label: 'Películas', value: false },
        { name: 'music', label: 'Música', value: false },
        { name: 'dance', label: 'Baile', value: false },
        { name: 'sports', label: 'Deportes', value: false }
      ],
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
      form: {}
    }
  },

  async created () {
    await this.$store.dispatch('interests/getMyInterests')
    this.updateCurrentInterests()
  },

  methods: {
    async onSubmit () {
      this.$store.commit('spinners/ENABLE_PROCESSING_FORM')

      try {
        this.mergeInterestsToForm()
        await this.$store.dispatch('interests/update', this.form)

        this.successNotify()
      }
      catch (error) {
        Notify.create({
          message: 'no se pudieron guardar los cambios',
          color: 'negative',
          icon: 'error'
        })
      }
      this.$store.commit('spinners/DISABLE_PROCESSING_FORM')
    },

    updateCurrentInterests () {
      Object.keys(this.$store.state.interests.interests).forEach(key => {
        this[key] = this.$store.state.interests.interests[key]
      })
    },

    mergeInterestsToForm () {
      this.form = {
        areas: this.areas,
        sports: this.sports,
        hobbies: this.hobbies,
        languages: this.languages
      }
    },

    successNotify () {
      this.$_validateFormMixin_notifyResponseSuccess(
        this.$t('update.successful')
      )
    },

    selectItem (item) {
      item.value = !item.value
    }
  },
}
</script>
