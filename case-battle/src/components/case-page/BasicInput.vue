<script setup lang="ts">
import { useUserStore } from '../../module/useUserStore';

const userStore = useUserStore();

const onWin = () => {
  userStore.addCoins(100);
};
</script>

<template>
  <div>
    <p>Ваш баланс: {{ userStore.coins }}</p>
    <button @click="onWin">+100 монет</button>
    <button @click="userStore.resetCoins">Сбросить</button>
  </div>
</template>
