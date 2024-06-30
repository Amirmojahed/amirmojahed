<template>
  <div class="t-w-full t-flex t-justify-center">
    <div class="loading-circle">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.loading-circle {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}

.loading-circle div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    $color-light-primary 0%,
    rgba(255, 255, 255, 1) 84%,
    $color-light-primary 100%
  );
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}

.loading-circle div:nth-child(1) {
  left: 8px;
  animation: loading-circle1 0.6s infinite;
}

.loading-circle div:nth-child(2) {
  left: 8px;
  animation: loading-circle2 0.6s infinite;
}

.loading-circle div:nth-child(3) {
  left: 32px;
  animation: loading-circle2 0.6s infinite;
}

.loading-circle div:nth-child(4) {
  left: 56px;
  animation: loading-circle3 0.6s infinite;
}

@keyframes loading-circle1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes loading-circle3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}

@keyframes loading-circle2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}

.t-dark {
  .loading-circle div {
    background: radial-gradient(
      circle,
      $color-dark-primary 0%,
      rgba(255, 255, 255, 1) 84%,
      $color-dark-primary 100%
    );
  }
}
</style>
