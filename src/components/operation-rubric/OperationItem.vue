<template>
  <div class="operation-item" @click="goToCase">
    <div class="operation-item__hover">
      <div class="operation-item__title-block">
        <h3>{{ props.operation.title }}</h3>
        <h4>{{ props.operation.subtitle }}</h4>
      </div>
      <div class="operation-item__case-block">
        <img class="operation-item__box" :src="props.operation.box" alt="box" />
        <img class="operation-item__logo" :src="props.operation.logo" alt="logo" />
      </div>
      <div class="operation-item__price-wrapper">
        <div class="operation-item__price">
          <span>{{ props.operation.price }} $</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import type { OperationItem } from '../../types/types';

const props = defineProps<{
  operation: OperationItem;
}>();

const router = useRouter();

const goToCase = () => {
  router.push({ name: 'CasePage', params: { slug: props.operation.slug } });
};
</script>

<style scoped lang="scss">
@keyframes border-angle-rotate {
  from {
    --border-angle: 0deg;
  }

  to {
    --border-angle: 360deg;
  }
}

@property --border-angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

.operation-item {
  cursor: pointer;
  padding: 2px;
  transition: all 0.3s ease;
  width: 100%;
  max-width: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid transparent;
  border-image-slice: 1;
  border-image-source: none;
  transition: all 0.4s ease;

  @include media(md, '>') {
    max-width: 225px;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.62);
    animation: border-angle-rotate 2s linear infinite;
    border-image-source: linear-gradient(var(--border-angle), transparent, transparent, #ff6a00);
    border-width: 2px;

    .operation-item__logo {
      transform: translateY(-10px);
    }
  }

  &__hover {
    padding: 10px 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  &__title-block {
    & > h3 {
      font-size: 15px;
      margin-bottom: 5px;
      color: #d2d2d2;
      text-transform: uppercase;
    }

    & > h4 {
      font-size: 14px;
      color: #707070;
    }
  }

  &__case-block {
    position: relative;
  }

  &__logo {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    transition: all 0.3s ease;
  }

  &__price-wrapper {
    font-size: 16px;
    color: #ee6f3c;
    margin: -15px 20px 0 auto;
    width: 88px;
    background-image: -webkit-linear-gradient(left, #ee9f58, #d12a1e);
    background-image: linear-gradient(to right, #ee9f58, #d12a1e);
    padding: 1px;
  }

  .operation-item__price {
    background: #1a1e23;
    display: block;
    padding: 2px 7px;
    text-align: center;
  }
}
</style>
