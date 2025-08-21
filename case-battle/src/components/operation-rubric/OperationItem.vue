<template>
    <div class="operation-item">
        <div class="operation-item__title-block">
            <h3>{{ props.operation.title }}</h3>
            <h4>{{ props.operation.subtitle }}</h4>
        </div>
        <div class="operation-item__case-block">
            <img class="operation-item__box" :src="props.operation.box" alt="box">
            <img class="operation-item__logo" :src="props.operation.logo" alt="logo">
        </div>
        <div class="operation-item__price-wrapper">
            <div class="operation-item__price">
                <span>{{ props.operation.price }}</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
interface OperationItem {
    title: string;
    subtitle: string;
    price: string;
    box: string;
    logo: string;
}

const props = defineProps<{
    operation: OperationItem;
}>();
</script>

<style scoped lang="scss">
.operation-item {
    cursor: pointer;
    padding: 10px 15px;
    transition: all 0.3s ease;

    &__title-block {
        &>h3 {
            font-size: 15px;
            margin-bottom: 5px;
            color: #d2d2d2;
            text-transform: uppercase;
        }

        &>h4 {
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

    &:hover {
        background-color: rgba(0, 0, 0, .62);

        .operation-item__logo {
            transform: translateY(-10px);
        }
    }
}
</style>