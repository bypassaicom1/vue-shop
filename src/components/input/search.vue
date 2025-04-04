<template>
    <div class="search-container">
        <input class="search-container__input" placeholder="羽绒服" />
        <button class="search-container__btn" @click="toSearch()">搜索</button>
        <div class="search-container__btn1">
            <el-icon><CameraFilled /></el-icon>
            <span class="search-container__btn1__text">搜同款</span>
        </div>
    </div>
</template>
<script setup>
const toSearch = ()=>{
    alert()
}
</script>
<style scoped lang="scss">
.search-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &__input {
        border-radius: 10px;
        border: 2px solid #ff5000;
        height: 50px;
        width: 100%;
        outline: none;
    }

    &__btn {
        width: 76px;
        height: 48px;
        color: white;
        background-color: #ff5000;
        border: none;
        border-radius: 5px;
        position: relative;
        left: -70px;
        transition: all 0.5s;
        &:hover {
            transition: all 0.5s;
            width: 66px;
            height: 38px;
        }
    }

    &__btn1 {
        margin-left: -5%;
        display: flex;
        gap: 5px;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        font-weight: bolder;
        width: 120px;
        height: 48px;
        color: #ff5000;
        background-color: #fff1eb;
        border-radius: 15px;
        padding: 3px;
        &__text {}
    }
}
</style>