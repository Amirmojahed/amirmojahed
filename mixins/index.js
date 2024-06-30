import Vue from 'vue'

import generalMethods from './generalMethods'
import localeConfig from './localeConfig'

Vue.mixin(generalMethods)
Vue.mixin( localeConfig)
