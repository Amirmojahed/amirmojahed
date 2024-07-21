<template>
  <v-app>
    <div class="layout t-h-full t-flex t-flex-col t-items-center">
      <img
        class="layout__bg t-absolute t-h-full t-w-full t-opacity-10"
        src="assets/background/bg.jpg"
      />
      <Header class="t-flex t-justify-center" />
      <nuxt class="layout-content t-h-full t-w-full t-px-6 layout-max-width" />
    </div>
  </v-app>
</template>

<script>
import dark from '~/mixins/dark'
import rtl from '~/mixins/rtl'
import Header from '~/components/layouts/Header/Header.vue'

export default {
  components: {
    Header,
  },
  mixins: [dark, rtl],
}
</script>
