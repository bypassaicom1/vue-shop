<template>
    <div class="login--container">
        <div class="login--container__user">
            <div class="login--container__user__left">
                <span class="login--container__user__left__t1">手机扫码登录</span>
                <img :src="erweima" alt="">
                <span>打开<span style="color:#FF6200 ;">淘宝APP</span>—点击左上角扫一扫</span>
                <span style="color: #6C6E84; font-size: 14px;">怎么扫码登录？</span>
            </div>
            <el-divider style="height: 100%;" direction="vertical" border-style="dashed" />
            <div class="login--container__user__right">
                <div class="login--container__user__right__t1">
                    <span>密码登录</span>
                    <span style="color: #E5E8EC;">|</span>
                    <span>短信登录</span>
                </div>
                <div class="login--container__user__right__inp">
                    <el-input class="login--container__user__right__inp__t1" v-model="input1" placeholder="请输入手机号">
                        <template #prepend>+86</template>
                    </el-input>
                    <el-input class="login--container__user__right__inp__t2" v-model="input2" placeholder="请输入验证码">
                        <template #append><span style="color: #FF6200;">获取验证码</span></template>
                    </el-input>
                </div>
                <el-button style="width: 378px;height: 45px;" color="#FF6200" type="success"><span
                        style="color: white;">登录</span></el-button>
            </div>
        </div>
        <div class="login--container__bg">
        </div>
    </div>
</template>

<script setup>
import erweima from '@/assets/img/ewm.png'


</script>
<style scoped lang="scss">
.login--container {
    background-color: #F0EFF2;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &__user {
        background-color: #FFFFFF;
        width: 900px;
        height: 500px;
        border-radius: 20px;
        display: flex;

        &__left {
            flex: 0.7;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 40px;

            & img {
                width: 190px;
                border: #E5E8EC solid 2px;
                padding: 10px;
                border-radius: 10px;
            }

            &__t1 {
                font-size: 22px;
                font-weight: 550px;
            }
        }

        &__right {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 20px;
            align-items: center;
            justify-content: center;

            &__t1 {
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 21px;
                gap: 20px;
                margin-bottom: 20px;
            }

            &__inp {
                display: flex;
                flex-direction: column;
                gap: 20px;
                justify-content: center;
                align-items: center;
                margin-bottom: 40px;

                &__t1 {
                    width: 380px;
                    height: 45px;
                }

                &__t2 {
                    width: 380px;
                    height: 45px;
                }
            }
        }
    }

    &__bg {
        background: url('data:image/png;base64,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')no-repeat center center;
        background-size: 72px 42px;
        height: 100px;
        width: 100px;
        position: absolute;
        left: 100px;
        top: 7px;
    }
}
</style>