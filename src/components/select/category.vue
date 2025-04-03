<template>
    <div class="category-container">
        <h2>分类</h2>
        <div class="category-container__raw" v-for="item in data" :key="item.id">
            <div class="category-container__raw__item" v-for="name in item.title" :key="name">
                <span class="category-container__raw__item__text">{{ name}}</span>
                <span>/</span>
            </div>
            
           
        </div>
    </div>
</template>
<script setup>
/**
 * 首先定义数据
 */
const data = [
    {
        id:1,
        title:[
            "电脑","配件","办公","文具"
        ],
        children:[
            {
                id:1,
                title:'电脑整机',
                desc:[
                    "THISi ssdas111 ",
                    "this isdsal; 222",
                    "非常好324",
                    "家具用哦噗3233WW"
                ]
            },
            {
                id:2,
                title:'电脑配件',
                desc:[
                    "THISi ssdas ",
                    "this isdsal; ",
                    "非常好",
                    "家具用哦噗"
                ]
            }
        ]
    },
    {
        id:1,
        title:[
            "电脑","配件","办公","文具"
        ],
        children:[
            {
                id:1,
                title:'电脑整机',
                desc:[
                    "THISi ssdas111 ",
                    "this isdsal; 222",
                    "非常好324",
                    "家具用哦噗3233WW"
                ]
            },
            {
                id:2,
                title:'电脑配件',
                desc:[
                    "THISi ssdas ",
                    "this isdsal; ",
                    "非常好",
                    "家具用哦噗"
                ]
            }
        ]
    },
    {
        id:1,
        title:[
            "电脑","配件","办公","文具"
        ],
        children:[
            {
                id:1,
                title:'电脑整机',
                desc:[
                    "THISi ssdas111 ",
                    "this isdsal; 222",
                    "非常好324",
                    "家具用哦噗3233WW"
                ]
            },
            {
                id:2,
                title:'电脑配件',
                desc:[
                    "THISi ssdas ",
                    "this isdsal; ",
                    "非常好",
                    "家具用哦噗"
                ]
            }
        ]
    },
    {
        id:1,
        title:[
            "电脑","配件","办公","文具"
        ],
        children:[
            {
                id:1,
                title:'电脑整机',
                desc:[
                    "THISi ssdas111 ",
                    "this isdsal; 222",
                    "非常好324",
                    "家具用哦噗3233WW"
                ]
            },
            {
                id:2,
                title:'电脑配件',
                desc:[
                    "THISi ssdas ",
                    "this isdsal; ",
                    "非常好",
                    "家具用哦噗"
                ]
            }
        ]
    },
    {
        id:1,
        title:[
            "电脑","配件","办公","文具"
        ],
        children:[
            {
                id:1,
                title:'电脑整机',
                desc:[
                    "THISi ssdas111 ",
                    "this isdsal; 222",
                    "非常好324",
                    "家具用哦噗3233WW"
                ]
            },
            {
                id:2,
                title:'电脑配件',
                desc:[
                    "THISi ssdas ",
                    "this isdsal; ",
                    "非常好",
                    "家具用哦噗"
                ]
            }
        ]
    },
    {
        id:1,
        title:[
            "电脑","配件","办公","文具"
        ],
        children:[
            {
                id:1,
                title:'电脑整机',
                desc:[
                    "THISi ssdas111 ",
                    "this isdsal; 222",
                    "非常好324",
                    "家具用哦噗3233WW"
                ]
            },
            {
                id:2,
                title:'电脑配件',
                desc:[
                    "THISi ssdas ",
                    "this isdsal; ",
                    "非常好",
                    "家具用哦噗"
                ]
            }
        ]
    },
    {
        id:1,
        title:[
            "电脑","配件","办公","文具"
        ],
        children:[
            {
                id:1,
                title:'电脑整机',
                desc:[
                    "THISi ssdas111 ",
                    "this isdsal; 222",
                    "非常好324",
                    "家具用哦噗3233WW"
                ]
            },
            {
                id:2,
                title:'电脑配件',
                desc:[
                    "THISi ssdas ",
                    "this isdsal; ",
                    "非常好",
                    "家具用哦噗"
                ]
            }
        ]
    },
    {
        id:1,
        title:[
            "电脑","配件","办公","文具"
        ],
        children:[
            {
                id:1,
                title:'电脑整机',
                desc:[
                    "THISi ssdas111 ",
                    "this isdsal; 222",
                    "非常好324",
                    "家具用哦噗3233WW"
                ]
            },
            {
                id:2,
                title:'电脑配件',
                desc:[
                    "THISi ssdas ",
                    "this isdsal; ",
                    "非常好",
                    "家具用哦噗"
                ]
            }
        ]
    },{
        id:1,
        title:[
            "电脑","配件","办公","文具"
        ],
        children:[
            {
                id:1,
                title:'电脑整机',
                desc:[
                    "THISi ssdas111 ",
                    "this isdsal; 222",
                    "非常好324",
                    "家具用哦噗3233WW"
                ]
            },
            {
                id:2,
                title:'电脑配件',
                desc:[
                    "THISi ssdas ",
                    "this isdsal; ",
                    "非常好",
                    "家具用哦噗"
                ]
            }
        ]
    },{
        id:1,
        title:[
            "电脑","配件","办公","文具"
        ],
        children:[
            {
                id:1,
                title:'电脑整机',
                desc:[
                    "THISi ssdas111 ",
                    "this isdsal; 222",
                    "非常好324",
                    "家具用哦噗3233WW"
                ]
            },
            {
                id:2,
                title:'电脑配件',
                desc:[
                    "THISi ssdas ",
                    "this isdsal; ",
                    "非常好",
                    "家具用哦噗"
                ]
            }
        ]
    },{
        id:1,
        title:[
            "电脑","配件","办公","文具"
        ],
        children:[
            {
                id:1,
                title:'电脑整机',
                desc:[
                    "THISi ssdas111 ",
                    "this isdsal; 222",
                    "非常好324",
                    "家具用哦噗3233WW"
                ]
            },
            {
                id:2,
                title:'电脑配件',
                desc:[
                    "THISi ssdas ",
                    "this isdsal; ",
                    "非常好",
                    "家具用哦噗"
                ]
            }
        ]
    }
]
</script>
<style scoped lang="scss">
.category-container{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &__raw{
        padding: 0 20px;
        border-radius:10px 0 0 10px;
        height: 30px;
        font-size: 14px;
        display: flex;
        justify-content:space-around;
        align-items: center;
        &:hover{
            background-color: #FFFFFF;
            transition: all 0.5s;
        }
        &__item{
            display: flex;
            justify-content: space-between;
            gap: 15px;
            &__text{
                &:hover{
                    transition: all 0.5s;
                    color: red;
                }
            }
        }   
    }
}
</style>
