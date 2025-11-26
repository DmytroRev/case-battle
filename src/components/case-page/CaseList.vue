<template>
  <div class="case-list">
    <div
      class="case-list__item"
      v-for="(item, index) in allWeapons"
      :key="index"
      :class="{
        'case-list__item--blue': item.rarity === 'blue',
        'case-list__item--purple': item.rarity === 'purple',
        'case-list__item--pink': item.rarity === 'pink',
        'case-list__item--red': item.rarity === 'red',
      }"
    >
      <img class="case-list__bg-item" src="../../../public/bg-item.jpg" alt="bg-item" />
      <img class="case-list__img" :src="item.img" :alt="item.title" />
      <img class="case-list__collection" :src="logo" :alt="item.collection" />
      <div class="case-list__price">{{ item.price }} $</div>
      <div class="case-list__text-wrapper">
        <div>{{ item.title }}</div>
        <div>{{ item.skin }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  caseData:
    | Array<{
        logo: string;
        collection?: string;
        weapons?: Array<{
          title: string;
          skin: string;
          collection: string;
          img: string;
          rarity: string;
          price: number;
        }>;
        [key: string]: any;
      }>
    | undefined;
}>();

const allWeapons = computed(() => {
  return props.caseData?.flatMap((c) => c.weapons ?? []);
});

const logo = computed(() => {
  return props.caseData?.[0]?.logo ?? '';
});
</script>

<style scoped lang="scss">
.case-list {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  row-gap: 15px;

  &__item {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    max-width: 175px;
    width: 100%;
    height: 170px;
    border: 1px solid #29313f;
    border-bottom: 3px solid #ddd;
    text-align: left;
    color: #fff;
    box-shadow: 0 4px 12px rgba(26, 31, 58, 0.8);

    &--blue {
      border-bottom: 3px solid #279bf0;
      background: linear-gradient(0deg, rgba(39, 155, 240, 0.15) 1%, rgba(39, 155, 240, 0.05) 100%);
    }

    &--purple {
      border-bottom: 3px solid #8a2be2;
      background: linear-gradient(2deg, rgba(138, 43, 226, 0.15) 1%, rgba(138, 43, 226, 0.05) 100%);
    }

    &--pink {
      border-bottom: 3px solid #e334c8;
      background: linear-gradient(2deg, rgba(227, 52, 200, 0.15) 1%, rgba(227, 52, 200, 0.05) 100%);
    }

    &--red {
      border-bottom: 3px solid #ea2f2f;
      background: linear-gradient(2deg, rgba(234, 47, 47, 0.15) 1%, rgba(234, 47, 47, 0.05) 100%);
    }
  }

  &__bg-item {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    position: absolute;
    inset: 0;
    pointer-events: none;
    object-position: top;
  }

  &__collection {
    position: absolute;
    top: 0;
    right: 0;
    width: 45px;
    height: 45px;
    object-fit: contain;
  }

  &__price {
    background-color: rgba(43, 51, 66, 0.831372549);
    text-align: center;
    font-weight: 600;
    max-width: 72px;
    font-size: 16px;
    color: #ee6f3c;
    padding: 3px 6px;
    z-index: 10;
    position: relative;
  }

  &__text-wrapper {
    overflow: hidden;
    width: calc(100% - 20px);
    padding: 5px 10px 7px;
    white-space: nowrap;
    font-size: 14px;
    position: relative;
    font-weight: 600;
    color: #ddd;
  }
}
</style>
