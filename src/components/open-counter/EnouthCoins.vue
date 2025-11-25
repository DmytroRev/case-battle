<template>
    <div class="enouth-coins">
        <img class="enouth-coins__img" src="/src/assets/image/coins.svg" alt="coins">

        <div class="enouth-coins__wrapper-info">
            <h2 class="enouth-coins__text">Чтобы открыть этот кейс, на балансе должно быть не менее <span
                    class="enouth-coins__text--value">{{ props.price }} $</span>
            </h2>
            <button class="enouth-coins__btn">Пополнить</button>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    price: number | undefined;
}>();
</script>

<style lang="scss" scoped>
.enouth-coins {
    display: flex;
    background-color: rgba(9, 8, 13, .55);
    margin: 0 auto;
    max-width: fit-content;
    padding: 15px;

    &__img {
        object-fit: contain;
        width: 40px;
    }

    &__wrapper-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    &__text {
        line-height: 18px;
        font-size: 13px;
        text-align: center;
        max-width: 250px;
        font-weight: 500;
        color: #ffffff;
        margin-bottom: 10px;

        &--value {
            color: #ea9a50;
        }
    }

    &__btn {
        display: inline-flex;
        justify-content: flex-start;
        align-items: center;
        background: -webkit-linear-gradient(90deg, #261214, #181412);
        background: linear-gradient(90deg, #261214, #181412);
        border: 2px solid;
        border-image-source: linear-gradient(90deg, #e6964c 0%, #bb281e 100%);
        border-image-slice: 1;
        color: #fff;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 13px;
        font-weight: 400;
        text-transform: uppercase;
        padding: 5px 14px;
        cursor: pointer;
        margin: 0 auto;
        transition: all .3s ease;

        &:hover {
                background: linear-gradient(90deg, #e6964c, #bb281e);
        }
    }
}
</style>