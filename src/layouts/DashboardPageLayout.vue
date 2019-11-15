<template>
<q-page class="row justify-center q-my-xl">
  <div class="col-12 col-md-9">
    <div
      :class="[
        { 'column reverse': isScreenSm },
        ['row']
      ]"
    >
      <section class="col-12 col-sm-8 q-px-xs-xs q-px-sm-md q-my-md">
        <transition
          name="fade"
          mode="out-in"
        >
          <router-view />
        </transition>
      </section>

      <section class="col-12 col-sm-4 q-px-xs-xs q-px-sm-md q-my-md">

        <user-info class="bg-white border-section" />

        <main-menu class="text-dark bg-white border-section" />

      </section>

    </div>
  </div>
</q-page>
</template>

<script>
export default {
  computed: {
    isScreenSm () {
      return this.$q.screen.lt.sm
    }
  }

}
</script>
