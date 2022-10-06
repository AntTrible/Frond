<template>
  <view>
    <nav-custom></nav-custom>
    <swiper class="banner" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" indicator-active-color="#51DDD0">
    	<swiper-item v-for="(item,index) in 3">
    		<view class="swiper-item" >
                <img src="../../static/img/华硕放价.png">
            </view>
    	</swiper-item>
    </swiper>
    <home-title title="本季推荐" en-title="Seasonal Recommed" en-tit="Seasonal"></home-title>
    <scroll-view scroll-x="true">
        <view class="scroll-inner">
            <image src="../../static/img/华硕无畏14.jpg" mode="heightFix"></image>
            <image src="../../static/img/华硕无畏15.jpg" mode="heightFix"></image>
            <image src="../../static/img/华硕无双.jpg" mode="heightFix"></image>

            <image src="../../static/img/华硕a豆 14 i5.jpg" mode="heightFix"></image>
            <image src="../../static/img/华硕a豆14 pro.jpg" mode="heightFix"></image>
            <image src="../../static/img/华硕a豆14.jpg" mode="heightFix"></image>
        </view>
    </scroll-view>
    <home-title title="法式经典" en-title="French Classics" en-tit="French"></home-title>
    <image class="classify" src="../../static/img/华硕电脑.png"></image>
    <view class="flex flex-wrap padding-sm justify-between">
        <good-item v-for="(item,index) in 4"></good-item>
    </view>
    
  </view>
</template>

<script>
import GoodItem from '../../components/good-item.vue'
import HomeTitle from '../../components/home-title.vue'
import navCustom from '../../components/nav-custom.vue'
export default {
  components: { navCustom, HomeTitle, GoodItem },

}
</script>

<style lang="scss">
.banner{
    height: 800upx;
    swiper-item{
        height: 1000upx;
    }
    image{
        width: 100%;
        height: 1000upx;
    }
}
.scroll-inner{
    white-space: nowrap;
    image{
        height: 290upx;
    }
}
.classify{
    height: 380upx;
    width: 100%;
}
</style>