// stores/userStore.ts
import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

export const useUserStore = defineStore('user', () => {
  const coins = ref<number>(Number(localStorage.getItem('coins') || 0));

  const addCoins = (amount: number) => {
    coins.value += amount;
  };

  const removeCoins = (amount: number) => {
    if (coins.value >= amount) {
      coins.value -= amount;
    }
  };

  const resetCoins = () => {
    coins.value = 0;
  };

  watch(coins, (newVal) => {
    localStorage.setItem('coins', newVal.toString());
  });

  return {
    coins,
    addCoins,
    removeCoins,
    resetCoins,
  };
});
