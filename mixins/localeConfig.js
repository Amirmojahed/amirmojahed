export default {
  computed: {
    $currentLocale() {
      const locale = this.$i18n.locales.find(
        (item) => item.code === this.$i18n.locale
      )
      return locale
    },

    $dir() {
      return this.$i18n.locales.find((i) => i.code === this.$i18n.locale).dir
    },
  },
  watch: {
    '$i18n.locale': {
      handler(value) {
        this.$vuetify.rtl = value === 'ar' || value === 'fa'
      },
      immediate: true,
    },
  },
}
