<template>
    <div class="page-title">
        <div class="page-title__subtitle">{{ props.casePageSubtitle }}</div>
        <div class="page-title__title">«{{ props.title }}»</div>
        <span> <svg @click="toggleLike" class="page-title__icon" :class="{ liked: isLiked }"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25" fill="none"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path
                    d="M20.8 4.6c-1.6-1.5-4.1-1.5-5.7 0l-1.1 1.1-1.1-1.1c-1.6-1.5-4.1-1.5-5.7 0s-1.6 4.1 0 5.6l6.8 6.9 6.8-6.9c1.6-1.5 1.6-4.1 0-5.6z" />
            </svg></span>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';
import { getItem, setItem, removeItem } from '../../module/useLocalStorage';

const props = defineProps<{
    casePageSubtitle?: string;
    title?: string;
    slug?: string;
}>();

const getStorageKey = () => `case-page-liked-${props.slug}`;

const isLiked = ref(false);

onMounted(() => {
    isLiked.value = getItem(getStorageKey(), false);
});

watch(isLiked, (newVal) => {
    if (newVal) {
        setItem(getStorageKey(), true);
    } else {
        removeItem(getStorageKey());
    }
});
function toggleLike() {
    isLiked.value = !isLiked.value;
}
</script>

<style lang="scss" scoped>
.page-title {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    text-transform: uppercase;

    &__subtitle {
        font-size: 13px;
        font-weight: bold;
        color: #9c9c9c;
        text-align: center;
        margin: 0;
    }

    &__title {
        color: #fff;
        font-size: 22px;
        font-weight: 600;
        margin-bottom: 0;
    }

    &__icon {
        position: absolute;
        color: #ff4655;
        width: 35px;
        height: 35px;
        top: 0;
        z-index: 2;
        outline: none;
        right: calc(50% - 230px);
        cursor: pointer;
        transition: all .5s ease;

        &:hover {
            transform: translateY(-3px);
        }

        &.liked {
            fill: #ff4655;
        }
    }
}
</style>