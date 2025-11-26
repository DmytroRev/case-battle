<template>
  <div class="case-preview">
    <div class="case-preview__wrapper">
      <div class="case-preview__img-wrapper">
        <img
          class="case-preview__circle"
          src="/public/bg-case-page/case-circle.png"
          alt="case-circle"
        />
      </div>
      <img :src="props.casePreviewBox" alt="case-box" class="case-preview__img--box" />
      <img :src="props.casePreviewLogo" alt="case-logo" class="case-preview__img--logo" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  casePreviewBox?: string;
  casePreviewLogo?: string;
}>();
</script>

<style lang="scss" scoped>
.case-preview {
  position: relative;
  margin: 0 auto 0;
  min-height: 290px;
  grid-auto-rows: 1fr;
  display: grid;

  &__wrapper {
    position: relative;
    margin: 38px auto 0;
    height: 232px;
    width: 220px;
  }

  &__img-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(calc(-50% - 5px), calc(-50% - 10px));
    z-index: 0;
    outline: none;
    width: 350px;
    height: 350px;
    pointer-events: none;
  }

  &__circle {
    outline: none;
    animation: rotation 40000ms infinite linear;
    width: 100%;
  }

  &__img {
    &--box,
    &--logo {
      position: absolute;
      z-index: 5;
    }

    &--logo {
      animation-name: slowmotion;
      animation-timing-function: ease;
      animation-duration: 10s;
      animation-iteration-count: infinite;
    }
  }
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes slowmotion {
  0% {
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
  }

  50% {
    -webkit-transform: translateY(-7px);
    transform: translateY(-9px);
  }

  100% {
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
  }
}
</style>
