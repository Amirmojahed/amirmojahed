export default {
  watch: {
    '$colorMode.value': {
      handler(colorMode) {
        this.$vuetify.theme.dark = colorMode === 'dark'
      },
      immediate: true,
    },
  },
}
