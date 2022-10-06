<template>
<view>
  <view class="cont"></view>
    <view class="margin bg-fff">
            <view class="text-center">
                <image class="avatar" src="../../static/logo.png" mode=""></image>
            </view>
            <view class="fs-28 text-center">
                喂你吃零食
            </view>
        <view class="flex grid">
            <view class="flex flex-direction align-center padding" v-for="(item,index) in gridArr">
                <text :class="['iconfont',item.icon]"></text>
                {{item.name}}
             </view>
             <view class="flex flex-direction align-center padding" v-for="(item,index) in gridArr">
                <text :class="['iconfont',item.icon]"></text>
                {{item.name}}
             </view>
      </view>
    </view>
  </view>

</template>

<script>
export default {
         data() {
            return {
                gridArr:[
                    {
                        icon:'icon-danju',
                        name:'我的订单'
                    },
                    {
                        icon:'icon-jifen',
                        name:'待收货'
                    },
                    {
                        icon:'icon-caiwu',
                        name:'待付款'
                    },
                    {
                        icon:'icon-vip-fill',
                        name:'会员等级'
                    },
                ]
            }
         },
         methods: {
            
         },
}
</script>

<style lang="scss">
.cont{
    background-color:#f6f6f6 ;
    height: 400upx;
}
.grid .iconfont{
    font-size: 60upx;
    color: #888;
}
.avatar{
    width: 150upx;
    height: 150upx;
    border-radius: 50%;
    margin-top: -75upx;
}
.margin .bg-fff{
    margin-top: -200;
}
</style>