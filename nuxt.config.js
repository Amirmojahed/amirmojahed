import modules from './config/nuxt/modules'
import head from './config/nuxt/head'
import css from './config/nuxt/css'
import plugins from './config/nuxt/plugins'
import components from './config/nuxt/components'
import buildModules from './config/nuxt/buildModules'
import axios from './config/nuxt/axios'
import build from './config/nuxt/build'
import target from './config/nuxt/target'
import colorMode from './config/nuxt/colorMode'
import gtm from './config/nuxt/gtm'
import robots from './config/nuxt/robots'
import sitemap from './config/nuxt/sitemap'
import i18n from './config/nuxt/i18n'
import ssr from './config/nuxt/ssr'
import tailwind from './config/nuxt/tailwind'
import toast from './config/nuxt/toast'
import vuetify from './config/nuxt/vuetify'

export default {
  ...head,
  ...css,
  ...plugins,
  ...components,
  ...buildModules,
  ...modules,
  ...axios,
  ...build,
  ...target,
  ...colorMode,
  ...gtm,
  ...robots,
  ...sitemap,
  ...i18n,
  ...ssr,
  ...tailwind,
  ...toast,
  ...vuetify,
}
