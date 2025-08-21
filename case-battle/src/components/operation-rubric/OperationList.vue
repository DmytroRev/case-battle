<template>
    <div class="operation-list">
        <h2 class="operation-list__title" :style="{ backgroundImage: `url(${data.titleBg})` }">{{ data.title }}</h2>
        <div class="operation-list__item-wrapper">
            <OperationItem v-for="(operation, index) in data.items" :key="index" :operation="operation" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import operationData from './operationData.json';
import OperationItem from './OperationItem.vue';

interface OperationItem {
    title: string;
    subtitle: string;
    price: string;
    box: string;
    logo: string;
}

interface OperationData {
    title: string;
    titleBg: string;
    items: OperationItem[];
}

const data: OperationData = operationData;
</script>

<style scoped lang="scss">
.operation-list {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    &__title {
        position: relative;
        color: #bcb9cd;
        text-align: center;
        font-size: 15px;
        width: 100%;
        font-weight: bold;
        padding: 35px;
        text-transform: uppercase;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
    }

    &__item-wrapper {
        display: flex;
    }
}
</style>