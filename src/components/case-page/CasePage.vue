<template>
    <div class="case-page">
        <PageTitle :case-page-subtitle="caseData?.casePageSubtitle" :title="caseData?.title" :slug="caseData?.slug" />
        <CasePreview v-if="!isRolling" :case-preview-box="caseData?.box" :case-preview-logo="caseData?.logo" />
        <CaseRoller v-else :case-data="caseData" :roller-items="rollerItems" :is-rolling="isRolling" :offset="offset" />
        <EnouthCoins v-if="visibleBlock()" :price="caseData?.price" />
        <OpenCounter v-else :price="caseData?.price" :start-roll="startRoll" :instant-roll="instantRoll"
            :is-rolling="isRolling" />
        <CaseContents :case-data="caseData" />
        <CaseList :case-data="caseData?.caseWrapperCollection" />
        <BasicInput />
    </div>
</template>

<script setup lang="ts">
import { computed, nextTick, ref } from "vue";
import { useRoute } from "vue-router";
import operationData from "../operation-rubric/operationData.json";
import PageTitle from "./PageTitle.vue";
import CasePreview from "./CasePreview.vue";
import BasicInput from "./BasicInput.vue";
import EnouthCoins from "../open-counter/EnouthCoins.vue";
import OpenCounter from "../open-counter/OpenCounter.vue";
import CaseRoller from "./CaseRoller.vue";
import CaseContents from "./CaseContents.vue";
import CaseList from "./CaseList.vue";

const route = useRoute();
const slug = route.params.slug as string;

const getCoins = computed(() => {
    return localStorage.getItem('coins');
});

const offset = ref(0);

const result = ref<any>(null);

const isRolling = ref(false);

const caseData = operationData.items.find(item => item.slug === slug);

const visibleBlock = () => {
    const coins = Number(getCoins.value ?? 0);
    const price = caseData?.price ?? 0;
    return coins <= price;
};

const rollerItems = Array(50)
    .fill(null)
    .map(() => caseData);

const startRoll = () => {
    if (isRolling.value) return;

    result.value = null;
    isRolling.value = true;
    offset.value = 0;

    setTimeout(() => {
        nextTick().then(() => {
            const targetOffset = -(2000 + Math.random() * 500);
            offset.value = targetOffset;

            setTimeout(() => {
                result.value = caseData;
                isRolling.value = false;
                offset.value = 0;
            }, 6000);
        });
    }, 1000);
};

const instantRoll = () => {
    result.value = caseData;
};
</script>

<style lang="scss">
:has(.case-page) {
    body {
        background: url('/src/assets/image/bg-case-page/bg_case.webp') no-repeat top center/cover;
    }
}
</style>

<style scoped lang="scss">
:deep() {
    .app-wrapper {
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 15px;
        overflow: hidden;
    }
}
</style>
