<template>
  <scroll-view :scroll-into-view="topItem" scroll-with-animation class="scroll-cont" scroll-y="true" @scroll="handleScroll">
    <view>
        <view id="top"></view>
    <nav-custom></nav-custom>
    <swiper class="banner" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" indicator-active-color="#51DDD0">
    	<swiper-item v-for="(item,index) in banner" :key="item.objectId" @click="handleBanner(item.link)">
    		<view class="swiper-item" >
                <image :src="item.img"></image>
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
    <view class="back-top " v-if="isShow" @click="handleBackTop">
        <text class="iconfont icon-fanhuidingbu"></text>
    </view>
    
  </view>
  </scroll-view>
</template>

<script>
 import {$http} from '../../utils/request.js'
export default{
    data() {
        return {
            isShow:false,
            topItem:'' , //返回顶部标记点
            banner:[]
        }
    },
    methods: {
       handleScroll:function(ev){
            console.log(ev);
            let {scrollTop}  = ev.detail;
            this.isShow = scrollTop>500;
            this.topItem = '';
       },
       handleBackTop:function(){
        this.topItem = 'top';
       },
       
       handleBanner:function(link){
        console.log("测试触发按键");
        uni.navigateTo({
            url:`./banner-ad?link=${link}`
        })
       }
    },
    onLoad() {
        // //方法1
        //     uni.request({
        //         url:'https://rzpofyyx.lc-cn-n1-shared.com/1.1/classes/classify',
        //         method:'GET',
        //         header:{
        //             "X-LC-Id": "RzPoFYYXWgF3DjgxcIuAsgVG-gzGzoHsz",
        //             "X-LC-Key": "o4oBu6cmLRhQILGbhilgtNQJ" ,
        //             "Content-Type": "application/json" 
        //         },
        //         success:(res) =>{
        //             console.log(res);
        //         }
        //     })

        // //方法2
        //  $http('/1.1/classes/classify').then(res=>{
        //     console.log(res);
        //  })

        // //方法3
        // this.$get('/1.1/classes/classify').then(res=>{
        //     console.log(res);
        // })

        this.$get('/1.1/classes/banner').then(res=>{
            console.log(res);
            this.banner = res.results;
        })
    }
}
</script>

<style lang="scss">
.banner{
    height: 1000upx;
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
.back-top{
    height: 100upx;
    width: 100upx;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 0 10upx 4upx rgba(0,0,0,0.4);
    position: fixed;
    bottom: 40upx;
    right: 20upx;
    text-align: center;
    line-height: 100upx;
}
.icon-fanhuidingbu{
    font-size: 60upx;
}
.scroll-cont{
    height: 100vh;
}
</style>