<template>
  <nav class="t-flex t-flex-col t-justify-center t-items-center">
    <div
      :class="{
        'header--mobile__blur': scrollPosition > 50,
        'header--mobile__wrapper  t-border-0 t-border-b t-border-solid t-border-light-white-400':
          drawer,
      }"
      class="nav-bar t-px-4 t-py-2 t-w-full t-flex t-justify-between t-items-center"
    >
      <NuxtLink :to="localePath('/')" @click.native="close">
        <Logo size="35" />
      </NuxtLink>

      <div class="auth t-flex t-items-center">
        <button @click="drawNavContent">
          <i
            class="icons-navigation-menu t-text-2xl ps-xs-4 t-text-dark-white-800"
          />
        </button>
      </div>
    </div>
    <transition name="slide-fade">
      <div
        v-if="drawer"
        :class="{ 'nav-content-drawn': drawer }"
        class="nav-content custom-scroll t-p-6 t-bg-light-white-800 t-flex t-flex-col t-justify-between t-items-center t-w-full t-h-screen animeExpand"
      >
        <div
          class="nav-links t-w-full t-flex t-flex-col t-text-3xl t-text-light-white-100 t-capitalize"
        >
          <NuxtLink
            :to="localePath('/')"
            class="t-py-2 t-border-0 t-border-b t-border-solid t-border-light-white-400"
            @click.native="close"
          >
            {{ $t('header.home') }}
          </NuxtLink>
          <NuxtLink
            :to="localePath('/event')"
            class="t-py-2 t-border-0 t-border-b t-border-solid t-border-light-white-400"
            @click.native="close"
          >
            {{ $t('header.event') }}
          </NuxtLink>
          <NuxtLink
            :to="localePath('/about')"
            class="t-py-2 t-border-0 t-border-b t-border-solid t-border-light-white-400"
            @click.native="close"
          >
            {{ $t('header.about') }}
          </NuxtLink>

          <NuxtLink
            :to="localePath('/contact')"
            class="t-py-2 t-border-0 t-border-b t-border-solid t-border-light-white-400"
            @click.native="close"
          >
            {{ $t('header.contact') }}
          </NuxtLink>
        </div>

        <v-btn
          class="t-w-full t-mt-auto"
          color="primary"
          height="32"
          solo
          @click="goToAuth()"
        >
          {{ $user ? setUserName : $t('header.login') }}
        </v-btn>
      </div>
    </transition>
  </nav>
</template>

<script>
import Logo from '~/components/global/Logo/Logo'

export default {
  components: { Logo },
  data() {
    return {
      drawer: false,
      scrollPosition: null,
      oldActive: 0,
    }
  },
  computed: {
    setUserName() {
      return this.$user.name + ' ' + this.$user.lastname
    },
  },
  mounted() {
    if (
      this.$route.path !== '/auth' &&
      this.$route.path !== '/terms/' &&
      this.$user &&
      (!this.$user.name || !this.$user.lastname)
    ) {
      this.$router.push('/auth')
    }
    window.addEventListener('scroll', this.updateScroll)
  },
  methods: {
    goToAuth() {
      if (this.$user) {
        this.$router.push(this.localePath('/user-area'))
      } else {
        this.$router.push(this.localePath('/auth'))
      }
      this.close()
    },

    drawNavContent() {
      this.drawer = !this.drawer
      if (this.drawer) document.querySelector('html').style.overflowY = 'hidden'
      else document.querySelector('html').style.overflowY = 'auto'
    },
    close() {
      this.drawer = false
      document.querySelector('html').style.overflowY = 'auto'
    },
    updateScroll() {
      this.scrollPosition = window.scrollY
    },
    activeSidebar(index) {
      this.oldActive = index
      this.$router.replace({
        path: this.localePath('/user-area'),
        query: { active: index },
      })
      this.close()
    },
  },
}
</script>

<style lang="scss" scoped>
nav {
  z-index: 11;
  transition: background 0.36s cubic-bezier(0.32, 0.08, 0.24, 1),
    height 0.56s cubic-bezier(0.52, 0.16, 0.24, 1);

  .nav-content {
    z-index: 11;
    top: 70px;
    height: calc(var(--app-height) - 52px);

    .nav-links {
      animation: showBlock 3s 0.3s forwards, fadeInAnimation ease 1.5s;
      visibility: hidden;
    }

    a.nuxt-link-exact-active {
      color: $color-light-primary;
      border-bottom: 1px solid $color-light-black-600;
    }
  }
}

.header--mobile {
  &__blur {
    z-index: 4;
    background-color: rgba(#0f4c67, 0.8);
    backdrop-filter: blur(16px);
    @supports (not (backdrop-filter: blur(16px))) {
      //background-color: rgba(25, 25, 25, 0.9);
    }
  }
}

a {
  display: inherit;
}

.slide-fade-enter-active {
  transition: all 0.8s ease;
}

.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(-90%);
  opacity: 1;
}

@keyframes showBlock {
  to {
    visibility: visible;
  }
}
</style>
