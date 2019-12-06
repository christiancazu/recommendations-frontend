<template>
<div>
  <transition-group
    name="list"
    tag="q-card-section"
    class="q-pa-none"
  >
    <q-card
      v-for="(user, index) in users" :key="index"
      class="my-card q-my-lg"
    >
      <q-card-section class="row">
        <q-avatar
          class="col"
          style="max-width: 48px"
        >
          <img src="https://cdn.quasar.dev/img/boy-avatar.png">
        </q-avatar>
        <div class="col-8 q-px-sm">
          <div class="text-subtitle2 text-primary line-height-3">
            {{ user.names }} {{ user.surnames }}
          </div>
          <span class="text-grey-8">ciclo: </span>
          <q-badge
            color="primary"
            text-color="white" :label="user.cycle"
          />

        </div>
        <div class="col q-mx-xs absolute-right q-mx-md q-my-lg">
          <q-rating
            v-model="user.rating"
            size=".8rem"
            color="yellow"
            icon="star_border"
            icon-selected="star"
          />
          <q-btn
            color="primary q-ml-md"
            push
            label="Contactar"
            @click="sendContact"
          />
        </div>
      </q-card-section>

      <!-- <div class="row">

      <q-rating
        v-model="user.rating"
        size="1rem"
        color="yellow"
        icon="star_border"
        icon-selected="star"
        class="col-10 q-px-md"
      />
    </div> -->
      <div class="row">
        <q-separator
          inset
          :color="user.roles[0] === 'tutor' ? 'info': 'warning'"
          style="height: 2px"
          class="col-8 q-mt-md"
        />
        <q-chip
          :icon="user.roles[0] === 'tutor' ? 'face' : 'search'"
          :color="user.roles[0] === 'tutor' ? 'info': 'warning'"
          text-color="white"
          class="col justify-center q-mr-md"
        >
          <div
            class="q-ml-none"
          >
            {{ user.roles[0] }}
          </div>
        </q-chip>
      </div>
      <q-card-section>
        <div class="text-body1 text-accent col-5 text-dark">tutor en</div>
        <div>
          <q-chip
            v-for="(skill, i) in user.skills" :key="i"
            color="accent"
            text-color="white"
          >
            {{ skill.label }}
          </q-chip>
        </div>
        <div class="q-my-md">{{ user.description }}</div>
      </q-card-section>
      <q-card-section>
        <q-btn-group
          spread
        >
          <q-btn
            outline
            :color="user.hasView ? 'secondary' : 'grey-5'"
            :label="user.views"
            icon-right="thumb_up_alt"
            @click="setViewsAmount(user)"
          />
          <q-btn
            outline
            color="grey-5" icon-right="comment" :label="user.comments"
          />
          <q-btn
            outline
            color="grey-5" icon-right="share"
          >
            <q-menu
              class="q-mt-lg"
              transition-show="rotate"
              transition-hide="rotate"
            >
              <q-list>
                <q-item
                  clickable
                  @click="share('facebook')"
                >
                  <q-item-section>
                    <q-avatar>
                      <img src="statics/social/fb.jpg">
                    </q-avatar>
                  </q-item-section>
                </q-item>
                <q-item
                  clickable
                  @click="share('twitter')"
                >
                  <q-item-section>
                    <q-avatar>
                      <img src="statics/social/twitter.png">
                    </q-avatar>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </q-btn-group>
      </q-card-section>
    </q-card>
  </transition-group>
</div>
</template>

<script>
import { Notify } from 'quasar'

import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('users', ['users']),
  },

  methods: {
    setViewsAmount (user) {
      if (!user.hasView) {
        this.$store.commit('users/INCREMENT_VIEW', user.id)

        Notify.create({
          message: this.$t(`Haz recomendado a este tutor`),
          color: 'positive',
          icon: 'check_circle'
        })
      } else {
        this.$store.commit('users/DECREMENT_VIEW', user.id)

        Notify.create({
          message: this.$t(`Dejaste de recomendar a este tutor`),
          color: 'warning',
          icon: 'info'
        })
      }
    },

    sendContact () {
      Notify.create({
        message: this.$t(`Se ha enviado una solicitud de contacto`),
        color: 'positive',
        icon: 'check_circle'
      })
    },

    share (social) {
      Notify.create({
        message: this.$t(`Se ha compartido esta publicación en ${social}`),
        color: 'positive',
        icon: 'check_circle'
      })
    }
  }
}
</script>

<style lang="scss" scope>
.q-carousel.q-carousel--arrows .q-carousel__slide {
  padding: 0;
}
.q-btn-group {
  box-shadow: none
}
.img-res {
  max-width: 50%;
    height: 5%;
    object-fit: contain
}
.q-btn--outline .q-btn__wrapper:before {
  border: none;
}
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>