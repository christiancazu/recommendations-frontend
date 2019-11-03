<template>
<q-carousel
  v-model="slide"
  animated swipeable infinite autoplay
  height="100vh"
>
  <q-carousel-slide
    v-for="(bannerImg, index) in bannerImgs" :key="index"
    :img-src="bannerImg.src"
    :name="bannerImg.name"
    class="column no-wrap flex-center"
  />
  <template v-slot:control>
    <div class="text-center absolute-center text-shadow text-white">
      <transition name="fade-one">
        <div
          v-show="bannerTextCenter"
          class="container-home-text-center"
        >
          <h3 class="text-uppercase">
            {{ $t('tutorship') }}
          </h3>
        </div>
      </transition>
      <transition name="fade-two">
        <div
          v-show="bannerTextCenter"
          class="container-home-text-center"
        >
          <h4>
            {{ $t('mentoring_system') }}
          </h4>
        </div>
      </transition>
    </div>
  </template>
</q-carousel>
</template>
<script>
export default {
  name: 'BannerHome',

  data () {
    return {
      slide: 1,
      bannerTextCenter: false,
      bannerImgs: [
        { name: 1, src: 'statics/utp/utp-2.jpg' },
        { name: 2, src: 'statics/utp/utp-1.jpg' },
        { name: 3, src: 'statics/utp/utp-3.jpg' }
      ]
    }
  },

  mounted () {
    this.loadTextBanner()
  },

  methods: {
    loadTextBanner () {
      setTimeout(() => {
        this.bannerTextCenter = true
      }, 1500)
    }
  }
}
</script>

<style lang="scss" scoped>
.container-home-text-center {
  width: 100vw;
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
}
.fade-one-enter-active,
.fade-one-leave-active,
.fade-two-enter-active,
.fade-two-leave-active {
  transition: all 1s ease-out;
}
.fade-one-enter,
.fade-one-leave-to {
  clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);
  transform: translate(0%, 100%);
}
.fade-two-enter,
.fade-two-leave-to {
  clip-path: polygon(0% 100%, 100% 100%, 0% 100%, 0% 100%);
  transform: translate(0%, -100%);
}
</style>
