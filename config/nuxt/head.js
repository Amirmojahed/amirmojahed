import {
  DOMAIN_TITLE,
  META_DESCRIPTION,
  TWITTER_SITE,
  URL,
  META_IMAGE,
} from '../app'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: `%s - ${DOMAIN_TITLE}`,
    title: DOMAIN_TITLE,
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1.0, viewport-fit=cover, maximum-scale=1.0, user-scalable=no',
      },
      { hid: 'description', name: 'description', content: META_DESCRIPTION },
      // todo : set primary color here
      {
        hid: 'msapplication-TileColor',
        name: 'msapplication-TileColor',
        content: '',
      },
      { property: 'og:site_name', content: DOMAIN_TITLE },
      // todo : set primary color here
      { name: 'theme-color', content: '' },
      { property: 'og:type', content: 'website' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: DOMAIN_TITLE,
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: META_DESCRIPTION,
      },
      { name: 'twitter:site', content: TWITTER_SITE },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: META_IMAGE,
      },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: URL,
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: DOMAIN_TITLE,
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: META_DESCRIPTION,
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: META_IMAGE,
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        hid: 'canonical',
        rel: 'canonical',
        href: URL,
      },
    ],
  },
}
