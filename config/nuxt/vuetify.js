import colors from '../colors'

export default {
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/scss/vuetify-variables/vuetify-variables.scss'],
    treeShake: true,
    options: {
      customProperties: true,
    },
    theme: {
      dark: false,
      themes: {
        themeCache: {
          get: (key) => localStorage.getItem(key),
          set: (key, value) => localStorage.setItem(key, value),
        },
        light: {
          ...colors.light,
        },
        dark: {
          ...colors.dark,
        },
      },
      lang: {
        //         locales: { en },
        //         current: 'en',
      },
    },
  },
  breakpoint: {
    scrollBarWidth: 6,
  },
}
