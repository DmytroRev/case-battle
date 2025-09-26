<template>
    <div class="header">
        <div class="header__title" @click="redirectUrl">
            <div>Case<span><img src="../../assets/image/grenade.png" alt="grenade"></span>Battle</div>
            <div class="header__subtitle">У нас выигрывают</div>
        </div>
    </div>
</template>

<script setup lang="ts">
const redirectUrl = () => {
    window.location.href = '/';
}
</script>

<style scoped lang="scss">
.header {
    &__title {
        text-transform: uppercase;
        font-size: 34px;
        font-weight: 500;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        font-family: "Roboto Condensed", sans-serif;
        max-width: 215px;
        cursor: pointer;
        line-height: 25px;

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