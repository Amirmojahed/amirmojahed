<template>
  <v-app class="t-flex-col">
    <div
      v-if="error.statusCode !== 404"
      class="t-flex t-flex-col t-text-4xl t-font-old"
    >
      <div>
        {{ otherError }}
      </div>
      <NuxtLink :to="localePath('/')" class="t-mt-6"
        >{{ $t('error.errorLinkText') }}
      </NuxtLink>
    </div>
  </v-app>
</template>

<script>
import dark from '../mixins/dark.js'

export default {
  mixins: [dark],

  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      otherError: this.$t('error.otherErrorText'),
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      titleTemplate: `%s - ${this.$t('appName')}`,
      title,
      htmlAttrs: {
        // set lang and direction on locale change
        lang: this.$i18n.locale,
        dir: this.$i18n.locales.find((i) => i.code === this.$i18n.locale).dir,
      },
    }
  },
  mounted() {
    if (this.error.statusCode === 404) {
      this.$router.push(this.localePath('/404'))
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
