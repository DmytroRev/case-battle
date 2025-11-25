<template>
    <div class="case-contents">
        <div class="case-contents__title">Содержимое кейса</div>
        <div class="case-contents__img-wrapper" v-for="(item, id) in caseData?.caseWrapperCollection" :key="id">
            <img :src="item.logo" :alt="item.title" />
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    caseData: {
        type: Object,
        required: true
    }
})
</script>

<style lang="scss" scoped>
.case-contents {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0 30px;

    &__title {
        text-transform: uppercase;
        font-size: 17px;
        color: #fff;
        font-weight: 500;
        margin-right: 10px;
    }
}
</style>