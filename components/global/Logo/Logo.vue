<template>
  <div
    :class="{
      't-flex t-items-center t-justify-center before:t-block before:t-h-[72px] before:t-w-[72px] before:t-absolute before:t-z-0':
        hasBorder,
    }"
    class="logo"
  >
    <img
      :alt="$t('logo.alt')"
      :class="{
        't-relative t-rounded-full t-z-10': hasBorder,
      }"
      :src="$t('logo.url')"
      class="t-h-[70px] t-w-fit"
    />
  </div>
</template>

<script>
export default {
  props: {
    hasBorder: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      logo: this.$t('logo'),
    }
  },
}
</script>
<style lang="scss" scoped>
.logo::before {
  content: '';
  border-radius: 100%;
  background: linear-gradient(
    90deg,
    hsla(773, 100%, 50%, 1) 10%,
    hsla(000, 100%, 1%, 1) 60%
  );
  animation: rotate 8s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
