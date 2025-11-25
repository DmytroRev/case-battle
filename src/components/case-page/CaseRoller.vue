<template>
    <div>
        <h1>{{ caseData?.title }}</h1>
        <div class="case-roller">
            <div class="items" :class="{ animate: isRolling }" :style="{ transform: `translateX(${offset}px)` }">
                <div v-for="(item, index) in rollerItems" :key="index" class="item">
                    <img :src="item?.box" :alt="item?.title" />
                </div>
            </div>
        </div>

        <!-- <div class="buttons">
            <button @click="startRoll">Открыть кейс (анимация)</button>
            <button @click="instantRoll">Моментальное открытие</button>
        </div> -->
<!--         
        <div v-if="result" class="result">
            <h2>Выпал предмет:</h2>
            <p>{{ result.title }} — {{ result.price }}</p>
            <img :src="result.box" :alt="result.title" />
        </div> -->
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    caseData: {
        title: string;
        box: string;
        price: number;
    } | undefined;
    rollerItems: Array<{
        title: string;
        box: string;
        price: number;
    } | undefined>;
    isRolling: boolean;
    offset: number;
}>();

</script>

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
    position: relative;
    min-width: 150px;
    text-align: center;
    padding: 0 10px;

    &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 1px;
        height: 100px;
        background: rgba(173, 148, 148, 0.5);
    }

    img {
        width: 100px;
        height: auto;
    }
}
</style>