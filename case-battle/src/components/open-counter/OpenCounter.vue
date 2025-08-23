<template>
    <div class="open-counter">
        <div class="open-counter__header">
            <div class="open-counter__title">Открыть</div>
            <!-- <ul v-for="value in source">
                <li></li>
            </ul> -->
            <div class="open-counter__list">
                <div class="open-counter__value">1</div>
                <div class="open-counter__value active">2</div>

            </div>
            <div>раз</div>
        </div>
        <div class="open-counter__footer">
            <button class="open-counter__btn"><img class="open-counter__icon" src="../../assets/image/box.png"
                    alt="box">Открыть за {{32 }} $</button>
            <button class="open-counter__btn"><img class="open-counter__icon" src="../../assets/image/lightning.png"
                    alt="lightning">Быстро за {{ 21}} $</button>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.open-counter {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 60px;
    flex-direction: column;

    &__header {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 15px;
        color: #9c9c9c;
    }

    &__list {
        display: inline-block;
        margin: 3px 10px;
        padding: 0;
        vertical-align: middle;
    }

    &__value {
        list-style: none;
        display: inline-block;
        vertical-align: middle;
        width: 30px;
        height: 30px;
        color: #fff;
        cursor: pointer;
        line-height: 29px;
        border: rgba(0, 0, 0, 0) 1px solid;
        transition: all ease-in .2s;
        text-align: center;

        &:hover {
            font-weight: 700;
            background-color: #201112;
        }

    }

    .active {
        background-color: rgba(32, 17, 18, .91);
        border: 2px solid;
        border-image-source: linear-gradient(44deg, #f6a158 0%, #d92b1e 100%);
        border-image-slice: 1;
    }

    &__footer {
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-self: center;
        gap: 5px;
    }

    &__btn {
        height: 45px;
        display: inline-flex;
        justify-content: flex-start;
        align-items: center;
        background: -webkit-linear-gradient(90deg, #261214, #181412);
        background: linear-gradient(90deg, #261214, #181412);
        border: 2px solid;
        border-image-source: linear-gradient(90deg, #e6964c 0%, #e6964c 100%);
        border-image-slice: 1;
        color: #fff;
        text-decoration: none;
        text-transform: uppercase;
        font-size: .9em;
        padding: 0 14px;
        cursor: pointer;

        transition: all .3s ease;

        &:hover {
            background: linear-gradient(90deg, #571318, #143919);
        }
    }

    &__icon {
        width: 21px;
        height: 21px;
        object-fit: contain;
        margin-right: 10px;
    }

}
</style>