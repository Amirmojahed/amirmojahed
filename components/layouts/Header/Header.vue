<template>
  <div
    :class="{ 'header--blur': scrollPosition > 50 }"
    class="header-desktop t-z-10 t-sticky t-top-0"
  >
    <div
      class="header-desktop__wrapper layout-max-width t-flex t-justify-between t-items-center t-p-4"
    >
      <Logo
        :class="{ 't-opacity-0': scrollPosition < 150 }"
        class="header-desktop__wrapper--logo"
        hasBorder
      />
      <nav
        class="header-desktop__wrapper--nav t-h-full t-flex t-items-center t-gap-16 t-text-light-white-700 t-font-light"
      >
        <NuxtLink
          v-for="nav in navItems.filter((item) => item.enable)"
          :key="nav"
          :to="nav.link"
          class="t-font-bold t-text-lg lg:t-text-xl xxl:t-text-2xl"
        >
          {{ nav.title }}
        </NuxtLink>
      </nav>
      <div class="header-desktop__wrapper--info" />
    </div>
  </div>
</template>

<script>
import Logo from '~/components/global/Logo/Logo'

export default {
  components: { Logo },
  data() {
    return {
      scrollPosition: null,
    }
  },

  computed: {
    navItems() {
      return [
        {
          title: this.$i18n.t('header.home'),
          link: this.localePath('/'),
          enable: true,
        },
        {
          title: this.$i18n.t('header.projects'),
          link: this.localePath('/projects'),
          enable: true,
        },
        {
          title: this.$i18n.t('header.contact'),
          link: this.localePath('/contact'),
          enable: true,
        },
      ]
    },
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.updateScroll)
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    },
  },
}
</script>

<style lang="scss" scoped>
.header--blur {
  backdrop-filter: blur(16px);
  //background-color: rgba($color-light-secondary, 0.2);
  @supports (not (backdrop-filter: blur(16px))) {
  }
}
</style>
