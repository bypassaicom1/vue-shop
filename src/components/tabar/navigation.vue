<template>
    <div class="navigation-container">
        <div class="navigation-container__left">
            <span class="navigation-container__left__text">中国大陆</span>
            <span @click="router.push('/login')" class="navigation-container__left__text">亲，请登录</span>
            <span class="navigation-container__left__text">免费注册</span>
            <span class="navigation-container__left__text">网页无障碍</span>
            <span class="navigation-container__left__text">切换企业版</span>
            <span class="navigation-container__left__text">选则主题</span>
        </div>
        <div class="navigation-container__right">
            <span class="navigation-container__right__text">已买到的宝贝</span>
            <span class="navigation-container__right__text">我的淘宝</span>
            <span class="navigation-container__right__text">购物车</span>
            <span class="navigation-container__right__text">收藏夹</span>
            <span class="navigation-container__right__text">免费开店</span>
            <span class="navigation-container__right__text">卖家中心</span>
            <span class="navigation-container__right__text">帮助中心</span>
        </div>

    </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()

</script>
<style scoped lang="scss">
.navigation-container {
    width: 100%;
    height: 30px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: lighter;
    font-size: 12px;
    &__left {
        display: flex;
        gap: 10px;
        justify-content: space-between;

        &__text {
            &:hover {
                color: red;
                transition: all 0.5s;
            }
        }
    }

    &__right {
        display: flex;
        gap: 10px;
        justify-content: space-between;

        &__text {
            &:hover {
                color: red;
                transition: all 0.5s;
            }
        }
    }
}
</style>