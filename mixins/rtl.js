export default {
  computed: {
    $dir() {
      return this.$i18n.locales.find((i) => i.code === this.$i18n.locale).dir
    },
    $locale() {
      return this.$i18n.locale
    },
  },
  watch: {
    '$i18n.locale': {
      handler(value) {
        this.$vuetify.rtl = value === 'fa' || value === 'ar'
      },
      immediate: true,
    },
  },
}
