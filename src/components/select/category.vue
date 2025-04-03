<template>
    <div class="category-container">
        <div class="category-container__title"> 
            <h2>分类</h2>
            <img src="https://gw.alicdn.com/imgextra/i3/O1CN01OPMo5d1SnKKX8RfYM_!!6000000002291-1-tps-72-40.gif" alt="">
        </div>
        <div @mouseover="toOver()" @mouseout="toOut()" class="category-container__raw" v-for="item in data"
            :key="item.id">
            <div class="category-container__raw__item" v-for="name in item.title" :key="name">
                <span class="category-container__raw__item__text">{{ name }}</span>
                <span class="category-container__raw__item__f">/</span>
            </div>
        </div>
        <div @mouseover="toOver()" @mouseout="toOut()" v-show="catePanel" class="category-container__show">

        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const catePanel = ref(false)
/**
 * 首先定义数据
 */
const data = [
    {
        id: 1,
        title: [
            "电脑", "配件", "办公", "文具"
        ],
        children: [
            {
                id: 1,
                title: '电脑整机',
                desc: [
                    "THISi ssdas111 ",
                    "this isdsal; 222",
                    "非常好324",
                    "家具用哦噗3233WW"
                ]
            },
            {
                id: 2,
                title: '电脑配件',
                desc: [
                    "THISi ssdas ",
                    "this isdsal; ",
                    "非常好",
                    "家具用哦噗"
                ]
            }
        ]
    },
    {
        id: 1,
        title: [
            "电脑", "配件", "办公", "文具"
        ],
        children: [
            {
                id: 1,
                title: '电脑整机',
                desc: [
                    "THISi ssdas111 ",
                    "this isdsal; 222",
                    "非常好324",
                    "家具用哦噗3233WW"
                ]
            },
            {
                id: 2,
                title: '电脑配件',
                desc: [
                    "THISi ssdas ",
                    "this isdsal; ",
                    "非常好",
                    "家具用哦噗"
                ]
            }
        ]
    },
    {
        id: 1,
        title: [
            "电脑", "配件", "办公", "文具"
        ],
        children: [
            {
                id: 1,
                title: '电脑整机',
                desc: [
                    "THISi ssdas111 ",
                    "this isdsal; 222",
                    "非常好324",
                    "家具用哦噗3233WW"
                ]
            },
            {
                id: 2,
                title: '电脑配件',
                desc: [
                    "THISi ssdas ",
                    "this isdsal; ",
                    "非常好",
                    "家具用哦噗"
                ]
            }
        ]
    },
    {
        id: 1,
        title: [
            "电脑", "配件", "办公", "文具"
        ],
        children: [
            {
                id: 1,
                title: '电脑整机',
                desc: [
                    "THISi ssdas111 ",
                    "this isdsal; 222",
                    "非常好324",
                    "家具用哦噗3233WW"
                ]
            },
            {
                id: 2,
                title: '电脑配件',
                desc: [
                    "THISi ssdas ",
                    "this isdsal; ",
                    "非常好",
                    "家具用哦噗"
                ]
            }
        ]
    },
    {
        id: 1,
        title: [
            "电脑", "配件", "办公", "文具"
        ],
        children: [
            {
                id: 1,
                title: '电脑整机',
                desc: [
                    "THISi ssdas111 ",
                    "this isdsal; 222",
                    "非常好324",
                    "家具用哦噗3233WW"
                ]
            },
            {
                id: 2,
                title: '电脑配件',
                desc: [
                    "THISi ssdas ",
                    "this isdsal; ",
                    "非常好",
                    "家具用哦噗"
                ]
            }
        ]
    },
    {
        id: 1,
        title: [
            "电脑", "配件", "办公", "文具"
        ],
        children: [
            {
                id: 1,
                title: '电脑整机',
                desc: [
                    "THISi ssdas111 ",
                    "this isdsal; 222",
                    "非常好324",
                    "家具用哦噗3233WW"
                ]
            },
            {
                id: 2,
                title: '电脑配件',
                desc: [
                    "THISi ssdas ",
                    "this isdsal; ",
                    "非常好",
                    "家具用哦噗"
                ]
            }
        ]
    },
    {
        id: 1,
        title: [
            "电脑", "配件", "办公", "文具"
        ],
        children: [
            {
                id: 1,
                title: '电脑整机',
                desc: [
                    "THISi ssdas111 ",
                    "this isdsal; 222",
                    "非常好324",
                    "家具用哦噗3233WW"
                ]
            },
            {
                id: 2,
                title: '电脑配件',
                desc: [
                    "THISi ssdas ",
                    "this isdsal; ",
                    "非常好",
                    "家具用哦噗"
                ]
            }
        ]
    },
    {
        id: 1,
        title: [
            "电脑", "配件", "办公", "文具"
        ],
        children: [
            {
                id: 1,
                title: '电脑整机',
                desc: [
                    "THISi ssdas111 ",
                    "this isdsal; 222",
                    "非常好324",
                    "家具用哦噗3233WW"
                ]
            },
            {
                id: 2,
                title: '电脑配件',
                desc: [
                    "THISi ssdas ",
                    "this isdsal; ",
                    "非常好",
                    "家具用哦噗"
                ]
            }
        ]
    }, {
        id: 1,
        title: [
            "电脑", "配件", "办公", "文具"
        ],
        children: [
            {
                id: 1,
                title: '电脑整机',
                desc: [
                    "THISi ssdas111 ",
                    "this isdsal; 222",
                    "非常好324",
                    "家具用哦噗3233WW"
                ]
            },
            {
                id: 2,
                title: '电脑配件',
                desc: [
                    "THISi ssdas ",
                    "this isdsal; ",
                    "非常好",
                    "家具用哦噗"
                ]
            }
        ]
    }, {
        id: 1,
        title: [
            "电脑", "配件", "办公", "文具"
        ],
        children: [
            {
                id: 1,
                title: '电脑整机',
                desc: [
                    "THISi ssdas111 ",
                    "this isdsal; 222",
                    "非常好324",
                    "家具用哦噗3233WW"
                ]
            },
            {
                id: 2,
                title: '电脑配件',
                desc: [
                    "THISi ssdas ",
                    "this isdsal; ",
                    "非常好",
                    "家具用哦噗"
                ]
            }
        ]
    }, {
        id: 1,
        title: [
            "电脑", "配件", "办公", "文具"
        ],
        children: [
            {
                id: 1,
                title: '电脑整机',
                desc: [
                    "THISi ssdas111 ",
                    "this isdsal; 222",
                    "非常好324",
                    "家具用哦噗3233WW"
                ]
            },
            {
                id: 2,
                title: '电脑配件',
                desc: [
                    "THISi ssdas ",
                    "this isdsal; ",
                    "非常好",
                    "家具用哦噗"
                ]
            }
        ]
    }
]
const toOver = () => {
    catePanel.value = true
}
const toOut = () => {
    catePanel.value = false
}
</script>
<style scoped lang="scss">
.category-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    &__title{
        display: flex;
        align-items: center;
        gap: 5px;
        img{
            height: 30px;
            width: 50px;
        }
    }
    &__raw {
        padding: 0 20px;
        border-radius: 10px 0 0 10px;
        height: 30px;
        font-size: 17px;
        display: flex;
        justify-content: space-around;
        align-items: center;

        &:hover {
            background-color: #FFFFFF;
            transition: all 0.5s;
        }

        &__item {
            display: flex;
            justify-content: space-between;
            gap: 15px;

            &__text {
                &:hover {
                    transition: all 0.5s;
                    color: red;
                }
            }
            &:last-child span:last-child{
               display: none;
            }
        }
    }

    &__show {
        z-index: 999;
        display: block;
        width: 900px;
        height: 500px;
        position: absolute;
        background-color: white;
        left: 100%;
        top: 0;
        transition: all 0.5s;
        border: #FF5000 solid 2px;
        border-radius: 15px;
    }
}
</style>
