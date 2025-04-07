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
                <span><span style="color: #FF5000;font-size: 14px;font-family:PingFang SC;font-weight: bold;">券后¥<span
                            style="font-size: 25px;">108</span></span><span
                        style="color: rgb(122, 122, 122);font-size: 14px;">&nbsp;&nbsp;&nbsp;&nbsp;优惠前¥{{
                            productInfo.price }}
                        · 已售 {{ productInfo.saleNum }}+</span></span>
                <div class="product-detail__container__detail__right__yhtag">
                    <el-tag v-for="item in productInfo.coupon" size="large" :key="item" type="warning">{{ item
                    }}</el-tag>
                </div>
                <span style="font-weight: bold;"><span
                        style="width: 56;height: 22px;text-align: justify;color: #959595;display: inline-block;font-size: 14px;margin-right: 20px;">配&nbsp;&nbsp;&nbsp;&nbsp;送</span>{{
                            productInfo.delivery }}</span>
                <span style="font-weight: bold;"><span
                        style="width: 56;height: 22px;text-align: justify;color: #959595;display: inline-block;font-size: 14px;margin-right: 20px;">保&nbsp;&nbsp;&nbsp;&nbsp;障</span>{{
                            productInfo.guarantee }}</span>
                <span style="font-weight: bold;"><span
                        style="width: 56;height: 22px;text-align: justify;color: #959595;display: inline-block;font-size: 14px;margin-right: 20px;">可选支付</span>{{
                            productInfo.selectPay }}</span>
                <div class="product-detail__container__detail__right__colorCate">
                    <span
                        style="width: 56;height: 22px;text-align: justify;color: #959595;display: inline-block;font-size: 14px;margin-right: 20px;font-weight: bold;">颜色分类</span>
                    <div>
                    </div>
                    <div class="product-detail__container__detail__right__colorCate__area">
                        <div v-for="item in productInfo.version[0].colorCategory" :key="item.id"
                            class="product-detail__container__detail__right__colorCate__area__item">
                            <img :src="item.img" alt="">
                            <span>{{ item.name }}</span>
                        </div>
                    </div>
                </div>
                <div class="product-detail__container__detail__right__nums">
                    <span
                        style="width: 56;height: 22px;text-align: justify;color: #959595;display: inline-block;font-size: 14px;margin-right: 20px;font-weight: bold;">数&nbsp;&nbsp;&nbsp;&nbsp;量</span>
                    <el-input-number v-model="productNum" :min="1" :max="1000" @change="handleChange" />
                </div>
                <div class="product-detail__container__detail__right__add">
                    <div class="product-detail__container__detail__right__add__tt1">
                        <div class="product-detail__container__detail__right__add__tt1__t1"><span>立即购买</span></div>
                        <div class="product-detail__container__detail__right__add__tt1__t2"><span>加入购物车</span></div>
                    </div>
                    <div class="product-detail__container__detail__right__add__sc">
                        <el-icon size="20">
                            <Star />
                        </el-icon>
                        <span>收藏</span>
                    </div>
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
                {
                    id: 1,
                    name: '苹果绿【共4枚原装软毛刷头+趣味贴纸】',
                    img: "https://gw.alicdn.com/bao/uploaded/i2/2218107642994/O1CN01lvDidv1XzIpY6zgFl_!!2218107642994.jpg_q30.jpg_.webp",
                },
                {
                    id: 2,
                    name: '苹果绿【共4枚原装软毛刷头+趣味贴纸】',
                    img: "https://gw.alicdn.com/bao/uploaded/i2/2218107642994/O1CN01lvDidv1XzIpY6zgFl_!!2218107642994.jpg_q30.jpg_.webp",
                },
                {
                    id: 3,
                    name: '苹果绿【共4枚原装软毛刷头+趣味贴纸】',
                    img: "https://gw.alicdn.com/bao/uploaded/i2/2218107642994/O1CN01lvDidv1XzIpY6zgFl_!!2218107642994.jpg_q30.jpg_.webp",
                },
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
const productNum = ref(10)
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
            gap: 8px;

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

            &__yhtag {
                display: flex;
                gap: 10px;
            }

            &__colorCate {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;

                &__area {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;

                    &__item {
                        padding: 5px;
                        border: #DADDE0 solid 1px;
                        border-radius: 10px;
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        font-size: 14px;
                        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

                        & img {
                            width: 28px;
                            height: 28px;
                            border-radius: 5px;
                        }

                        &:hover {
                            transition: all 0.3s;
                            border: #FF5000 solid 1px;
                            color: #FF5000;
                        }
                    }
                }

            }

            &__nums {
                .el-input-number {
                    width: 110px;
                }
            }

            &__add {
                display: flex;
                height: 40px;
                margin-top: 20px;

                &__tt1 {
                    display: flex;
                    width: 80%;
                    margin-right: 20px;
                    font-size: 15px;
                    color: white;
                    font-weight: bold;

                    &__t1 {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 10px 0 0 10px;
                        background-color: #FF6D00;
                        width: 100%;
                    }

                    &__t2 {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 0 10px 10px 0;
                        background-color: #FFA302;
                        width: 100%;
                    }
                }

                &__sc {
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                    font-weight: bold;
                    align-items: center;
                    justify-content: center;
                    margin-left: 10px;
                    &:hover {
                        transition: all 0.3s;
                        color: #FFA302;
                    }
                }

            }
        }

    }
}
</style>