export default {
  // Color mode Configuration: https://color-mode.nuxtjs.org/
  colorMode: {
    preference: 'dark', // default value of $colorMode.preference
    fallback: 'dark', // fallback value if not system preference found
    hid: 'color-mode-script',
    globalName: '__COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: 't-',
    classSuffix: '',
    storageKey: 'color-mode',
  },
}
