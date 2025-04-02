<template>
    <div class="category-container">
        
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
    }
]
</script>
<style scoped lang="scss">
.category-container{

}
</style>
