<template>
    <div class="operation-list">
        <h2 class="operation-list__title" :style="{ backgroundImage: `url(${data.titleBg})` }">{{ data.title }}</h2>
        <div class="operation-list__item-wrapper">
            <OperationItem class="operation-list__item" v-for="(operation, index) in data.items" :key="index" :operation="operation" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import operationData from './operationData.json';
import OperationItem from './OperationItem.vue';
import type { OperationDataList } from "../../types/types";



const data: OperationDataList = operationData;
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
        margin: 0 auto;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        gap: 10px;
        row-gap: 15px;

        @include media(md, '>') {
            justify-content: center;
        }
    }
}
</style>