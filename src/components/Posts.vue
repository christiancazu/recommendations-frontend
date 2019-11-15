<template>
<div>
  <q-card
    v-for="(post, index) in postsFilters" :key="index"
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
        <div class="text-subtitle2 text-primary line-height-3">{{ post.title }}</div>
        <span class="text-grey-8">ciclo: </span>
        <q-badge
          color="primary"
          text-color="white" :label="post.cycle"
        />

      </div>
      <div class="col absolute-right q-pa-md q-mx-lg">
        <div class="text-body2 text-warning">reputación</div>
        <q-rating
          v-model="post.rating"
          size=".8rem"
          color="yellow"
          icon="star_border"
          icon-selected="star"
        />
      </div>
    </q-card-section>

    <!-- <div class="row">

      <q-rating
        v-model="post.rating"
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
        :color="post.type === 'tutor' ? 'info': 'warning'"
        style="height: 2px"
        class="col-8 q-mt-md"
      />
      <q-chip
        :icon="post.type === 'tutor' ? 'face' : 'search'"
        :color="post.type === 'tutor' ? 'info': 'warning'"
        text-color="white"
        class="col justify-center q-mr-md"
      >
        <div
          class="q-ml-none"
        >
          {{ post.type }}
        </div>
      </q-chip>
    </div>
    <q-card-section>
      <div class="text-body1 text-accent col-5 text-dark">tutor en</div>
      <div>
        <q-chip
          v-for="(skill, i) in post.skills" :key="i"
          color="accent"
          text-color="white"
        >
          {{ skill }}
        </q-chip>
      </div>
      <div class="q-my-sm">{{ post.description }}</div>
    </q-card-section>
    <q-card-section>
      <q-btn-group
        spread
      >
        <q-btn
          outline
          :color="post.hasView ? 'secondary' : 'grey-5'"
          :label="post.views"
          icon-right="thumb_up_alt"
          @click="setViewsAmount(post)"
        />
        <q-btn
          outline
          color="grey-5" icon-right="comment" :label="post.comments"
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
              <q-item clickable>
                <q-item-section>
                  <q-avatar>
                    <img src="statics/social/fb.jpg">
                  </q-avatar>
                </q-item-section>
              </q-item>
              <q-item clickable>
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
</div>
</template>

<script>
import { Notify } from 'quasar'

import { mapState } from 'vuex'

export default {
  // data () {
  //   return {
  //   }
  // },
  computed: {
    ...mapState('posts',['postsFilters'])
  },

  methods: {
    setViewsAmount (post) {
      if (!post.hasView) {
        post.views++
        post.hasView = true,
        Notify.create({
          message: this.$t(`Haz recomendado a este tutor`),
          color: 'positive',
          icon: 'check_circle'
        })
      } else {
        post.views--
        post.hasView = false
        Notify.create({
          message: this.$t(`Dejaste de recomendar a este tutor`),
          color: 'warning',
          icon: 'info'
        })
      }
    }
  }
}
</script>

<style lang="scss" scope>
.q-carousel.q-carousel--arrows .q-carousel__slide {
  padding: 0;
}
.q-btn--outline {
  border: none;
}
.q-btn-group {
  box-shadow: none
}
.img-res {
  max-width: 50%;
    height: 5%;
    object-fit: contain
}
</style>