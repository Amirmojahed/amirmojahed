<template>
  <v-app>
    <div class="layout t-h-full t-flex t-flex-col t-relative t-justify-between">
      <Header class="t-hidden sm:t-block" />
      <HeaderMobile class="sm:t-hidden" />
      <nuxt class="layout-content layout-max-width t-mx-auto t-p-4 md:t-p-10" />
    </div>
  </v-app>
</template>

<script>
import dark from '~/mixins/dark'
import rtl from '~/mixins/rtl'
import Header from '~/components/layouts/Header/Header.vue'
import HeaderMobile from '~/components/layouts/Header/HeaderMobile.vue'

export default {
  components: {
    HeaderMobile,
    Header,
    // Footer
  },
  mixins: [dark, rtl],
}
</script>
