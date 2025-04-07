<template>
    <div class="product-detail__container">
        <div class="product-detail__container__front">
            <div class="product-detail__container__front__left">
                <img :src="dp.img" alt="">
                <div class="product-detail__container__front__left__t2">
                    <span class="product-detail__container__front__left__t2__name">{{ dp.name }}</span>
                    <el-rate v-model="dp.ratePoint" disabled show-score text-color="#ff9900"
                        score-template="{value} points" />
                </div>
            </div>
            <div class="product-detail__container__front__right">
                <el-button style="font-size: 16px;" :icon="ChatLineRound">联系客服</el-button>
                <el-button style="font-size: 16px;" :icon="Shop">进入店铺</el-button>
            </div>
        </div>
        <div class="product-detail__container__detail">
            <div class="product-detail__container__detail__left">
                <VerticalCarousel></VerticalCarousel>
            </div>
            <div class="product-detail__container__detail__right">
                
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { ChatLineRound,Shop } from '@element-plus/icons-vue'
import VerticalCarousel from '@/components/carousel/verticalCarousel.vue'
const dp = {
    img: "https://img.alicdn.com/imgextra/i1/O1CN01pz5irY1bhDKceJor2_!!6000000003496-2-tps-144-144.png_110x110q30.jpg_.webp",
    name: '春秋大地中叶',
    ratePoint: 3.7
}
const ratePoint = ref(3.7)
</script>
<style lang="scss">
.product-detail__container {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    &__front {
        display: flex;
        align-items: center;
        justify-content: space-between;
        align-items: center;
        margin-top: 15px;
        &__left {
            display: flex;
            align-items: center;
            gap: 10px;

            & img {
                width: 48px;
                height: 48px;
                border-radius: 10px;
            }

            &__t2 {
                display: flex;
                flex-direction: column;
                justify-content: center;
                &__name {
                    font-size: 18px;
                    font-weight: bold;
                }

                .el-rate {
                    height: 20px;
                    white-space: nowrap;
                }
            }
        }

        &__right {
            white-space: nowrap;
            display: flex;
            justify-content: center;
            margin-top: 10px;
        }
    }
    &__detail{
        height: 100%;
        flex: 1;
        display: flex;
        gap: 20px;
        margin-top: 15px;
        overflow: auto;
        &__left{
            flex: 1;
        }
        &__right{
            flex: 1;
            background-color: blue;
        }

    }
}
</style>