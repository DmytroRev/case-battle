<template>
    <div class="case-page">
        <PageTitle :case-page-subtitle="caseData?.casePageSubtitle" :title="caseData?.title" :slug="caseData?.slug" />
        <CasePreview :case-preview-box="caseData?.box" :case-preview-logo="caseData?.logo" />
        <div v-if="false">
            <h1>{{ caseData?.title }}</h1>
            <div class="case-roller">
                <div class="items" :class="{ animate: isRolling }" :style="{ transform: `translateX(${offset}px)` }">
                    <div v-for="(item, index) in rollerItems" :key="index" class="item">
                        <img :src="item?.box" :alt="item?.title" />
                    </div>
                </div>
            </div>

            <div class="buttons">
                <button @click="startRoll">Открыть кейс (анимация)</button>
                <button @click="instantRoll">Моментальное открытие</button>
            </div>

            <div v-if="result" class="result">
                <h2>Выпал предмет:</h2>
                <p>{{ result.title }} — {{ result.price }}</p>
                <img :src="result.box" :alt="result.title" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import operationData from "../operation-rubric/operationData.json";
import PageTitle from "./PageTitle.vue";
import CasePreview from "./CasePreview.vue";

const route = useRoute();
const slug = route.params.slug as string;

// Найти кейс по slug
const caseData = operationData.items.find(item => item.slug === slug);


// Лента с предметами (повторяем, чтобы "длинная")
const rollerItems = Array(50)
    .fill(null)
    .map(() => caseData);

// смещение ленты
const offset = ref(0);

// результат
const result = ref<any>(null);

// флаг анимации
const isRolling = ref(false);

const startRoll = () => {
    result.value = null;

    isRolling.value = false;
    offset.value = 0;

    requestAnimationFrame(() => {
        isRolling.value = true;

        const targetOffset = -(2000 + Math.random() * 500);
        offset.value = targetOffset;

        setTimeout(() => {
            result.value = caseData;
            isRolling.value = false;
        }, 6000);
    });
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
.case-roller {
    width: 100%;
    overflow: hidden;
    border: 2px solid #444;
    margin: 20px auto;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        top: -10px;
        left: 50%;
        transform: translateX(-50%);
        background: red;
        border-radius: 50%;
    }
}

.items {
    display: flex;
    transform: translateX(0);
}

.items.animate {
    transition: transform 6s cubic-bezier(0.25, 1, 0.5, 1);
}

.item {
    min-width: 150px;
    margin: 0 10px;
    text-align: center;

    img {
        width: 100px;
        height: auto;
    }
}

:deep() {
    .app-wrapper {
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 15px;
        overflow: hidden;
    }
}
</style>
