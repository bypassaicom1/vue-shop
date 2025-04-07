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
                <h1 style="font-size: 20px;">{{ productInfo.title }}</h1>
                <div class="product-detail__container__detail__right__tags">
                    <el-tag v-for="tag in productInfo.tag" type="info" :key="tag" size="large">{{ tag }}</el-tag>
                </div>
                <div class="product-detail__container__detail__right__logo">
                    <span class="product-detail__container__detail__right__logo__text">券后¥<span
                            style="font-size: 20px;">{{ productInfo.zk_price }}</span>今日 20点开卖</span>
                    <span>美丽月</span>
                </div>
                <span><span style="color: #FF5000;font-size: 14px;font-family:PingFang SC;font-weight: bold;">券后¥<span style="font-size: 25px;">108</span></span><span style="color: rgb(122, 122, 122);font-size: 14px;">&nbsp;&nbsp;&nbsp;&nbsp;优惠前¥{{productInfo.price}} · 已售 {{productInfo.saleNum}}+</span></span>
                <div class="product-detail__container__detail__right__yhtag">
                    <el-tag v-for="item in productInfo.coupon" size="large" :key="item" type="warning">{{item}}</el-tag>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { ChatLineRound, Shop } from '@element-plus/icons-vue'
import VerticalCarousel from '@/components/carousel/verticalCarousel.vue'
const dp = {
    img: "https://img.alicdn.com/imgextra/i1/O1CN01pz5irY1bhDKceJor2_!!6000000003496-2-tps-144-144.png_110x110q30.jpg_.webp",
    name: '春秋大地中叶',
    ratePoint: 3.7,
}
const productInfo = {
    title: '拜尔儿童电动牙刷充电式男女孩3-6-10-12岁以上宝宝自动声波软毛',
    tag: [
        "可开发票",
        "超1千回头客",
        "超5千人加购",
        "多人评价\"质量很好\""
    ],
    price: 127,
    zk_price: 108,
    saleNum: 1000,
    //优惠券
    coupon: [
        "每200减20",
        "店铺券满179减40",
        "商品券满118减10",
    ],
    activity: "最多送50元，全店通用更划算",
    //配送
    delivery: "承诺今天发货，预计后天送达快递: 免运费浙江宁波至太原市 杏花岭区",
    //保障
    guarantee: "假一赔十 退货宝 只换不修",
    selectPay: "信用卡支付",
    version: [
        {
            id: 1,
            product: "入门款K3(3-5岁使用)",
            colorCategory: [
                "苹果绿【共4枚原装软毛刷头+趣味贴纸】",
                "柠檬黄【共4枚原装软毛刷头+趣味贴纸】",
                "樱桃红【共4枚原装软毛刷头+趣味贴纸】"
            ]
        },
        {
            id: 2,
            product: "高端款K7(3-12岁使用)",
            colorCategory: [
                "苹果绿【共4枚原装软毛刷头+趣味贴纸】",
                "柠檬黄【共4枚原装软毛刷头+趣味贴纸】",
                "樱桃红【共4枚原装软毛刷头+趣味贴纸】"
            ]
        },
        {
            id: 3,
            product: "旗舰款K9(3-15岁使用)",
            colorCategory: [
                "苹果绿【共4枚原装软毛刷头+趣味贴纸】",
                "柠檬黄【共4枚原装软毛刷头+趣味贴纸】",
                "樱桃红【共4枚原装软毛刷头+趣味贴纸】"
            ]
        },
        {
            id: 4,
            product: "专业款K11(2-12岁使用)",
            colorCategory: [
                "苹果绿【共4枚原装软毛刷头+趣味贴纸】",
                "柠檬黄【共4枚原装软毛刷头+趣味贴纸】",
                "樱桃红【共4枚原装软毛刷头+趣味贴纸】"
            ]
        }
    ],
    //保障服务
    guaranteeService: [

    ]
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

    &__detail {
        height: 100%;
        flex: 1;
        display: flex;
        gap: 20px;
        margin-top: 15px;
        overflow: auto;

        &__left {
            flex: 1;
        }

        &__right {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 15px;

            &__tags {
                display: flex;
                gap: 15px;
            }

            &__logo {
                background: url('https://img.alicdn.com/i3/O1CN01qevlYS1NfvxPa0RPX_!!4611686018427384654-2-atmosphere_center_image_storag-merlin-426-36.png')no-repeat;
                background-size: 100% 100%;
                width: 75%;
                height: 6%;
                border-radius: 10px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0 20px 0 20px;
                font-size: 14px;
                font-weight: bold;
                color: white;
            }
            &__yhtag{
                display: flex;
                gap: 10px;
            }
        }

    }
}
</style>