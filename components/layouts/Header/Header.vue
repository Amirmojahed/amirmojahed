<template>
  <div class="header t-w-full">
    <div
      class="header-desktop layout-max-width t-flex t-w-full t-gap-3 t-z-10 t-sticky t-top-8"
    >
      <div class="header-desktop__right t-p-8 t-w-full" />
      <Logo class="header-desktop__logo t-absolute t-z-10" hasBorder />
      <div class="header-desktop__left t-p-8 t-w-full" />
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
.header-desktop {
  margin: 30px;

  &__logo {
    top: 4.5px;
    right: calc(50% - 35px);
  }

  &__right,
  &__left {
    min-height: 80px;
    border-radius: 2px;
    border: 0;
    border-top: 2px;
    border-bottom: 2px;
    border-color: rgba($color-light-secondary, 0.5);
    border-style: solid;
    overflow: hidden;
    position: relative;
    backdrop-filter: blur(9.4px);
    -webkit-backdrop-filter: blur(9.4px);
  }

  &__right {
    border-bottom-right-radius: 24px;
    border-top-right-radius: 24px;
    border-right: 2px;
    box-shadow: 8px 0 9px rgba($color-light-secondary, 0.5);

    &::after {
      content: '';
      z-index: 1;
      position: absolute;
    }

    &::after {
      border-radius: 100%;
      left: -40px;
      width: 75px;
      height: 80px;
      box-shadow: 0 0 10px rgba($color-light-secondary, 0.5);
      border: 2px solid rgba($color-light-secondary, 0.5);
      top: -1px;
      bottom: 0;
    }
  }

  &__left {
    box-shadow: -8px 0 9px rgba($color-light-secondary, 0.5);

    border-left: 2px;
    border-bottom-left-radius: 24px;
    border-top-left-radius: 24px;

    &::before {
      content: '';
      z-index: 1;
      position: absolute;
    }

    &::before {
      border-radius: 100%;
      right: -40px;
      width: 75px;
      height: 80px;
      box-shadow: 0 0 10px rgba($color-light-secondary, 0.5);
      border: 2px solid rgba($color-light-secondary, 0.5);
      top: -1px;
      bottom: 0;
    }
  }
}

.header--blur {
  backdrop-filter: blur(16px);
  //background-color: rgba($color-light-secondary, 0.2);
  @supports (not (backdrop-filter: blur(16px))) {
  }
}
</style>
