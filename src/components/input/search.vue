<template>
    <div class="search-container">
        <input class="search-container__input" placeholder="羽绒服"/>
        <button class="search-container__btn">搜索</button>
        <div class="search-container__btn1">
            <span class="search-container__btn1__text">搜同款</span>
        </div>
    </div>
</template>
<script setup>
</script>
<style scoped lang="scss">
.search-container{
    display: flex;
    justify-content: center;
    align-items: center;
    &__input{
        border-radius: 10px;
        border: 2px solid #ff5000 ;
        height: 40px;
        width: 400px;
        outline: none;
    }
    &__btn{
        width: 66px;
        height: 38px;
        color: white;
        background-color: #ff5000;
        border: none;
        border-radius: 5px;
        position: relative;
        left: -71px;
    }
    &__btn1{
        
        margin-left: -60px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 15px;
        font-weight: bolder;
        width: 90px;
        height: 38px;
        color: #ff5000;
        background-color: #fff1eb;
        border-radius: 5px;
        &__text{
        }
    }
}
</style>