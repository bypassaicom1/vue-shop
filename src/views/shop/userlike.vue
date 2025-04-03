<template>
    <div class="shops-container">
        <div v-for="item in datas" :key="item.id" class="shops-container__item">
            <img class="shops-container__item__img" :src="item.img" alt="">
            <span class="shops-container__item__title">{{ item.title }}</span>
            <div class="shops-container__item__pri">
                <span class="shops-container__item__pri__logo">￥</span>
                <span class="shops-container__item__pri__int">{{ item.price }}</span>
            </div>

        </div>
    </div>
</template>
<script setup>
const datas = [
    {
        id: 1,
        img: "	https://img.alicdn.com/bao/uploaded/i1/2216455906211/O1CN01YnsvmM1vkh0UtQCxP_!!2216455906211.png",
        title: "真维斯黑色短袖T恤女春夏季2025新款初中生纯棉半袖显瘦宽松上衣X",
        price: 107
    },
    {
        id: 2,
        img: "https://asearch.alicdn.com/bao/uploaded/O1CN01Ktnf7X1cG1mi9bVIv_!!2984273572.jpg",
        title: "美式户外机能工装裤男夏季潮牌宽松弯刀裤时尚帅气直筒阔腿休闲裤",
        price: 107
    },
    {
        id: 3,
        img: "https://asearch.alicdn.com/bao/uploaded/O1CN01iQ0wvu2LfonrUaI85_!!2219392399720.jpg",
        title: "韩国首尔口气多肽片清新薄荷糖调儿童成人口气积食脾胃内火益生元",
        price: 107
    },
    {
        id: 4,
        img: "https://asearch.alicdn.com/bao/uploaded/O1CN01Ktnf7X1cG1mi9bVIv_!!2984273572.jpg",
        title: "棒球帽男女2025新款帽子宽帽檐大头围鸭舌帽显脸小防晒帽遮阳速干",
        price: 107
    },
    {
        id: 5,
        img: "	https://img.alicdn.com/bao/uploaded/i1/675246913/O1CN016axYsJ20wCx9w8c5U_!!675246913.jpg",
        title: "夏季女童凉拖鞋韩版灰姑娘水晶鞋高跟小女孩居家儿童爱莎拖鞋银色",
        price: 107
    },
    {
        id: 6,
        img: "	https://asearch.alicdn.com/bao/uploaded/O1CN01BNL16N2L7T0Ov0t49_!!2212488699645.png",
        title: "厨房餐边柜置物架小户型贴墙置物架小家电茶水收纳客厅简约收纳柜",
        price: 107
    },
    {
        id: 7,
        img: "https://asearch.alicdn.com/bao/uploaded/O1CN01Ktnf7X1cG1mi9bVIv_!!2984273572.jpg",
        title: "正版泠月棉花娃娃20cm公仔毛绒玩具换装玩偶有骨裸娃生日礼物女孩",
        price: 107
    },
    {
        id: 8,
        img: "	https://asearch.alicdn.com/bao/uploaded/O1CN01BNL16N2L7T0Ov0t49_!!2212488699645.png",
        title: "厨房餐边柜置物架小户型贴墙置物架小家电茶水收纳客厅简约收纳柜",
        price: 107
    },
    {
        id: 9,
        img: "https://asearch.alicdn.com/bao/uploaded/O1CN01Ktnf7X1cG1mi9bVIv_!!2984273572.jpg",
        title: "正版泠月棉花娃娃20cm公仔毛绒玩具换装玩偶有骨裸娃生日礼物女孩",
        price: 107
    },
    {
        id: 10,
        img: "https://asearch.alicdn.com/bao/uploaded/O1CN01iQ0wvu2LfonrUaI85_!!2219392399720.jpg",
        title: "韩国首尔口气多肽片清新薄荷糖调儿童成人口气积食脾胃内火益生元",
        price: 107
    },
    {
        id: 11,
        img: "https://asearch.alicdn.com/bao/uploaded/O1CN01Ktnf7X1cG1mi9bVIv_!!2984273572.jpg",
        title: "棒球帽男女2025新款帽子宽帽檐大头围鸭舌帽显脸小防晒帽遮阳速干",
        price: 107
    },
    {
        id: 12,
        img: "	https://img.alicdn.com/bao/uploaded/i1/675246913/O1CN016axYsJ20wCx9w8c5U_!!675246913.jpg",
        title: "夏季女童凉拖鞋韩版灰姑娘水晶鞋高跟小女孩居家儿童爱莎拖鞋银色",
        price: 107
    },
    {
        id: 13,
        img: "	https://asearch.alicdn.com/bao/uploaded/O1CN01BNL16N2L7T0Ov0t49_!!2212488699645.png",
        title: "厨房餐边柜置物架小户型贴墙置物架小家电茶水收纳客厅简约收纳柜",
        price: 107
    },
    {
        id: 14,
        img: "https://asearch.alicdn.com/bao/uploaded/O1CN01Ktnf7X1cG1mi9bVIv_!!2984273572.jpg",
        title: "正版泠月棉花娃娃20cm公仔毛绒玩具换装玩偶有骨裸娃生日礼物女孩",
        price: 107
    },
    {
        id: 15,
        img: "	https://asearch.alicdn.com/bao/uploaded/O1CN01BNL16N2L7T0Ov0t49_!!2212488699645.png",
        title: "厨房餐边柜置物架小户型贴墙置物架小家电茶水收纳客厅简约收纳柜",
        price: 107
    },
    {
        id: 16,
        img: "https://asearch.alicdn.com/bao/uploaded/O1CN01Ktnf7X1cG1mi9bVIv_!!2984273572.jpg",
        title: "正版泠月棉花娃娃20cm公仔毛绒玩具换装玩偶有骨裸娃生日礼物女孩",
        price: 107
    },
]
</script>
<style scoped lang="scss">
.shops-container {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-auto-columns: 1fr;
    grid-auto-flow: dense;

    gap: 10px;

    &__item {
        border: transparent solid 2px;

        &:hover {
            transition: all 0.5s;
            border: #FF5000 solid 2px;
        }

        border-radius: 10px;
        padding-bottom: 2px;
        display: flex;
        flex-direction: column;
        white-space: normal;
        gap: 10px;
        align-items: center;

        &__img {
            width: 100%;
            height: 265px;
            border-radius: 10px;
        }

        &__title {

            font-size: 16px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;

        }

        &__pri {
            width: 100%;
            margin-top: 15px;
            color: #FF5000;

            &__logo {
                font-size: 15px;
            }

            &__int {
                font-size: 16px;
                font-weight: bold;
            }
        }
    }
}
</style>