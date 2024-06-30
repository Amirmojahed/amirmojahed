const colors = require('./config/colors')
import breakPoints from './config/breakPoints'

module.exports = {
  prefix: 't-',
  corePlugins: {
    preflight: false,
  },
  darkMode: 'class',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./pages/**/*.vue', './layouts/**/*.vue', './components/**/*.vue'],
  theme: {
    fontFamily: {
      inter: ['Inter'],
      yekanBakh: ['Yekan-Bakh'],
    },
    extend: {
      colors: {
        light: {
          ...colors.light,
        },
        dark: {
          ...colors.dark,
        },
      },
    },
    // default value is between < ... >
    screens: {
      ...breakPoints,
    },
  },
  variants: {},
  plugins: [],
}
