import getRoutes from '../../mixins/getRoutes'
import { URL } from '../app'

export default {
  sitemap: {
    hostname: URL,
    routes() {
      return getRoutes()
    },
  },
}
