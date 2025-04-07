<template>
    <div class="preview__container">
        <div class="preview__container__search">
            <img :src="logoImg" alt="">
            <SearchIcon class="preview__container__search__inpu"></SearchIcon>
        </div>
        <ProductDetail class="preview__container__detail"></ProductDetail>
    </div>


</template>
<script setup>
import ProductDetail from '@/components/product/productDetail.vue'
import SearchIcon from '@/components/input/searchIcon.vue'
const logoImg = "https://gw.alicdn.com/imgextra/i1/O1CN01z163bz1lHF5yQ50CC_!!6000000004793-2-tps-172-108.png"
</script>

<style scope lang="scss">
.preview__container {
    width:87%;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    height: 100%;
    &__search {
        display: flex;
        align-items: center;
        justify-content: space-between;
        & img {
            width: 64px;
            height: 40px;
        }
        &__inpu{
            width: 30% !important;
            min-width: 400px;
        }

    }
    &__detail{


    }
}
</style>