<template>
    <div class="container">
        <div class="container__top">
            <Navigation></Navigation>
            <div class="container__top__search">
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
                <div class="container__top__category__center">
                    
                </div>
                <div class="container__top__category__right">
                    
                </div>
            </div>
        </div>
        <div class="container__content">

        </div>
    </div>
</template>
<script setup>
import Navigation from '@/components/tabar/navigation.vue'
import Search from '@/components/input/search.vue'
import Category from '@/components/select/category.vue'
</script>
<style scoped lang="scss">
.container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    white-space: nowrap;

    &__top {
        flex: 3;
        width: 87%;
       // background-color: red;

        &__search {
            height: 150px;
            background-color: white;
            display: flex;
            white-space: nowrap;

            &__left {
                flex: 1;
                background-color: blue;
                background: url('https://img.alicdn.com/imgextra/i3/O1CN01LvV0d41fjkGWg6iN6_!!6000000004043-2-tps-480-144.png') center center no-repeat;
                background-size: auto 70px;
            }

            &__center {
                flex: 2;
                display: flex;

                &__search {}
            }

            &__right {
                flex: 1;
                background: url('https://img.alicdn.com/imgextra/i1/O1CN01w6giKe20jqLqWhZDE_!!6000000006886-1-tps-480-144.gif') center center no-repeat;
                background-size: auto 70px;
            }
        }
        &__category{
            height: 400px;
            display: flex;
            gap: 15px;
            
            &__left{
                flex: 1.3;
                background-color: aquamarine;
                border-radius: 10px;
            }
            &__center{
                flex: 2;
                background-color: aqua;
                border-radius: 10px;
            }
            &__right{
                flex: 1.3;
                background-color: blue;
                border-radius: 10px;
            }
        }
    }

    &__content {
        flex: 1;
        width: 87%;
        background-color: green;
    }
}
</style>