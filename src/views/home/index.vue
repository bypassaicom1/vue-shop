<template>
    <div ref="index_container" class="container">
        <div class="container__top">
            <div ref="search" class="container__top__search">
                <div class="container__top__search__left">

                </div>
                <div class="container__top__search__center">
                    <Search class="container__top__search__center__search"></Search>
                </div>
                <div class="container__top__search__right">

                </div>
            </div>
            <div class="container__top__category">
                <div class="container__top__category__left">
                    <Category></Category>
                </div>
                <el-carousel class="container__top__category__center" :interval="5000" arrow="always">
                    <el-carousel-item v-for="item in images" :key="item">
                        <el-image style="width: 100%; height: 100%" :src="item" :zoom-rate="1.2" :max-scale="7"
                            :min-scale="0.2" fit="cover" />
                    </el-carousel-item>
                </el-carousel>
                <div class="container__top__category__right">
                    <el-image v-for="item in cates" class="container__top__category__right__item"
                        style="width: 100%; height: 100%" :src="item" :zoom-rate="1.2" :max-scale="7" :min-scale="0.3"
                        fit="cover" />
                </div>
            </div>
        </div>
        <div class="container__logo">
            <div class="container__logo-like"></div>
            <div class="container__logo__text">
                <span style="font-size:15px ;">猜你喜欢</span>
                <span>精选好物推荐</span>
            </div>
        </div>
        <div class="container__content">
            <userLike></userLike>
        </div>
    </div>
</template>
<script setup>
import Search from '@/components/input/search.vue'
import Category from '@/components/select/category.vue'
import userLike from '@/views/shop/userlike.vue'
import { onMounted, reactive, ref, watch } from 'vue'
const images = [
    "https://gw.alicdn.com/imgextra/i1/O1CN01NJPKCI1oN9KE4ry7R_!!6000000005212-1-tps-2112-800.gif",
    "https://gw.alicdn.com/imgextra/i1/O1CN01CZVirQ29K2ZhxkHc4_!!6000000008048-1-tps-2112-800.gif",
    "https://gw.alicdn.com/imgextra/i1/O1CN01q2nVLm1JqENxGdAV3_!!6000000001079-1-tps-2112-800.gif",
    "https://gw.alicdn.com/imgextra/i2/O1CN01XNqbkw1syU4dGHy1b_!!6000000005835-1-tps-2112-800.gif"
]
const cates = [
    "https://img.alicdn.com/imgextra/i2/O1CN01qceCje1JrbZc8E0Qi_!!6000000001082-2-tps-512-176.png",
    "https://img.alicdn.com/imgextra/i3/O1CN016YKcXX28kJftC6PXB_!!6000000007970-2-tps-512-176.png",
    "https://img.alicdn.com/imgextra/i1/O1CN01UoFupT1WnZ5J5rKta_!!6000000002833-2-tps-512-176.png",
    "https://img.alicdn.com/imgextra/i1/O1CN01bWoqwD1nFzWEe55WO_!!6000000005061-2-tps-512-176.png"
]
const search = ref()
const index_container = ref()
onMounted(() => {
    insetObs()
})
const insetObs = () => {
    index_container.value.addEventListener('scroll', function () {
        let scrollY = index_container.value.scrollTop - search.value.scrollHeight + 35
        let searchY = search.value.offsetTop
        if (scrollY > searchY) {
            console.log("超过了");
            search.value.style.position = 'fixed'
            search.value.style.height = '80px'
        } else {
            console.log("没超过");
            search.value.style.position = ''
            search.value.style.height = '90px'
        }
    });
}
</script>
<style scoped lang="scss">
.container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    white-space: nowrap;
    min-width: 1000px;
    overflow: auto;

    &__top {
        flex: 3;
        width: 87%;
        position: relative;

        &__search {
            background-color: #FF5000;
            height: 90px;
            background-color: white;
            display: flex;
            white-space: nowrap;
            justify-content: center;
            transition:all 0.5s;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 999;
            gap: 20px;
            &__left {
                flex: 1;
                background-color: blue;
                background: url('	https://img.alicdn.com/imgextra/i2/O1CN01ExcKl21ogqN64gt1U_!!6000000005255-1-tps-960-288.gif') center center no-repeat;
                background-size: auto 70px;
                margin-top: 10px;
                border-radius: 30%;
            }

            &__center {
                flex: 3;
                display: flex;
                width: 752px;
                &__search {}
            }

            &__right {
                flex: 1;
                background: url('https://img.alicdn.com/imgextra/i1/O1CN01w6giKe20jqLqWhZDE_!!6000000006886-1-tps-480-144.gif') center center no-repeat;
                background-size: auto 70px;
            }
        }

        &__category {
            height: 400px;
            display: flex;
            gap: 15px;
            flex-shrink: 0;

            &__left {
                flex: 0.9;
                background-color: #F7F7F7;
                border-radius: 10px;
                padding: 0 0 0 10px;
            }

            &__center {
                :deep(.el-carousel__container) {
                    height: 100%;
                }

                height: 100%;
                flex: 2.5;
                background-color: aqua;
                border-radius: 10px;
            }

            &__right {
                min-width: 250px;
                flex: 0.8;
                border-radius: 10px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                gap: 15px;

                &__item {
                    flex: 1;
                    background-color: red;
                    border-radius: 7px;
                }
            }
        }
    }

    &__logo {
        width: 87%;
        display: flex;
        align-items: center;
        gap: 10px;

        &-like {
            height: 48px;
            width: 48px;
            background: url('https://gw.alicdn.com/imgextra/i2/O1CN011E0R1J23w9lJDeJXk_!!6000000007319-2-tps-192-192.png')center center no-repeat;
            background-size: 48px;
            align-self: self-start;
            background-color: #FFF1EB;
            border-radius: 100px;
            margin-top: 15px;
            margin-bottom: 15px;
        }

        &__text {
            display: flex;
            flex-direction: column;
            gap: 3px;
            color: #FF5000;
        }

    }

    &__content {
        flex: 1;
        width: 87%;
    }
}
</style>