<template>
  <view>
    <p>这个是草莓蛋糕</p>
    <p>好吃</p>
    <p>草莓味</p>
    <u-button text="返回上一页" color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))" @click="handleBack"></u-button>
    <u-button type="primary" text="访问个人中心" @click="handleMy"></u-button>
  </view>
</template>

<script>
export default {
         data() {
            return {
                
            }
         },
        onLoad(options) {
            console.log(options);
        },
        methods: {
            handleBack:function(){
                uni.navigateBack({
                    delta:1
                })
            },
            handleMy:function(){
                uni.switchTab({
                    url:'../food/food'
                })
            }
        },
}
</script>

<style>

</style>