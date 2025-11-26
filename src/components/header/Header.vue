<template>
  <div class="header">
    <div class="header__title" @click="redirectUrl">
      <div>
        Case
        <span><img src="../../../public/grenade.png" alt="grenade" /></span>
        Battle
      </div>
      <div class="header__subtitle">У нас выигрывают</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const redirectUrl = () => {
  window.location.href = '/';
};
</script>

<style scoped lang="scss">
.header {
  padding: 0 15px;
  margin: 15px auto;

  &__title {
    text-transform: uppercase;
    font-size: 34px;
    font-weight: 500;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    font-family: 'Roboto Condensed', sans-serif;
    max-width: 215px;
    cursor: pointer;
    line-height: 25px;

    // @include media('xs') {
    //     font-size: 111px;
    //     max-width: 180px;
    // }

    img {
      width: 30px;
      height: 30px;
      object-fit: contain;
    }
  }

  &__subtitle {
    font-size: 12px;
    text-align: center;
    font-weight: 300;
  }
}
</style>
