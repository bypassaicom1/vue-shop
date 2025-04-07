<template>
    <div class="verticalCarousel__container">
        <div class="verticalCarousel__container__top">
            <div class="verticalCarousel__container__top__verticalBox">
                <div class="verticalCarousel__container__top__verticalBox__pic" v-for="item in obj.imgs" :key="item">
                    <img @mouseover="intoPic(item, $event)" :src="item" alt="">
                </div>
                <div class="verticalCarousel__container__top__verticalBox__pic">
                </div>
            </div>
            <div class="verticalCarousel__container__top__showImg">
                <img :src="showImg" alt="">
            </div>

        </div>
        <div class="verticalCarousel__container__bottom">
            <div class="verticalCarousel__container__bottom__but">视频</div>
            <div class="verticalCarousel__container__bottom__but">图集</div>
            <div class="verticalCarousel__container__bottom__but">参数</div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
const obj = {
    id: 1,
    name: '牙刷',
    imgs: [
        "https://img.alicdn.com/imgextra/i4/2398662401/O1CN01Ap0XSA1TbhobqhS4d_!!2398662401.jpg_.webp",
        "https://picasso.alicdn.com/imgextra/O1CNA1woSOAh1Tbi00rXtRt_!!2398662401-0-psf.jpg_q50.jpg_.webp",
        "https://img.alicdn.com/imgextra/i4/2398662401/O1CN01nMBFz11TbhxjiZSD9_!!2398662401.jpg_q50.jpg_.webp",
        "https://img.alicdn.com/imgextra/i2/2398662401/O1CN01b8g7qZ1TbhsuYYray_!!2398662401.jpg_q50.jpg_.webp",
        "https://img.alicdn.com/imgextra/i4/2398662401/O1CN01Gikd451TbhltmbMzw_!!2398662401.jpg_q50.jpg_.webp",
        "https://img.alicdn.com/imgextra/i4/2398662401/O1CN01Ap0XSA1TbhobqhS4d_!!2398662401.jpg_.webp",
        "https://picasso.alicdn.com/imgextra/O1CNA1woSOAh1Tbi00rXtRt_!!2398662401-0-psf.jpg_q50.jpg_.webp",
        "https://img.alicdn.com/imgextra/i4/2398662401/O1CN01nMBFz11TbhxjiZSD9_!!2398662401.jpg_q50.jpg_.webp",
        "https://img.alicdn.com/imgextra/i2/2398662401/O1CN01b8g7qZ1TbhsuYYray_!!2398662401.jpg_q50.jpg_.webp",
        "https://img.alicdn.com/imgextra/i4/2398662401/O1CN01Gikd451TbhltmbMzw_!!2398662401.jpg_q50.jpg_.webp"
    ]
}
const showImg = ref(obj.imgs[0])
function intoPic(imgPath, dom) {
    //进来之前先把之前的所有样式清除
    let els = document.getElementsByClassName('verticalCarousel__container__top__verticalBox__pic')
    for (const item of els) {
        console.log(item);
        item.style.border = 'transparent solid 1px'
    }
    //再给目标元素加边框
    const el = dom.target
    el.parentNode.style.border = '#FF6B00 solid 1px'
    showImg.value = imgPath
}
</script>
<style scoped lang="scss">
.verticalCarousel__container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    &__top {
        display: flex;
        gap: 20px;
        height: 80%;

        &__verticalBox {
            flex: 0.5;
            display: flex;
            flex-direction: column;
            gap: 20px;
            max-height: 500px;
            overflow: auto;

            &::-webkit-scrollbar {
                width: 0;
            }

            &__pic {
                border-radius: 10px;
                height: 76px;
                background-color: #FAFAFA;
                display: flex;
                justify-content: center;
                align-items: center;
                border: transparent solid 1px;

                &:hover {
                    transition: all 0.5s;
                }

                & img {
                    width: 80%;
                    height: 90%;
                    border-radius: 5px;
                }
            }
        }

        &__showImg {
            flex: 3.5;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #FAFAFA;
            border-radius: 10px;
            max-height: 500px;

            & img {
                width: 75%;
                height: 100%;
                border-radius: 10px;
            }
        }
    }

    &__bottom {
        background-color: #F5F5F5;
        height: 8%;
        width: 40%;
        margin-left: 30%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-radius: 10px;
        padding: 0 10px 0 10px;
        &__but {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 80%;
            width: 80%;
            border-radius: 10px;
            &:hover {

                background-color: #FFFFFF;
            }
        }
    }

}
</style>