<template>
    <view class="cont">
      <view class="cake-item" v-for="(item,index) in 8" @click="handleDetail(index)">
          <view class="poster">

          </view>
          <view class="info-cont" >
               <view class="info">
                   <view class="fs-28">
                    草莓蛋糕
                   </view>
                   <view class="fs-16">
                    caomeidangao
                   </view>
                   <view class="fs-18">
                      <text class="fs-14">￥</text>
                      218.00
                   </view>
               </view>
               <view class="cart-btn">
    
               </view>
          </view>
      </view>
    </view>
    </template>
    
    <script>
    export default {
           data() {
            return {
                
            }
           },
           methods: {
            handleDetail(index){
               console.log(index);
               uni.navigateTo({
                url:'../detail/detail?idx='+index
               })
            }
        }
    }
    </script>
    
    <style lang="scss">
      .cont{
        display: flex;
        flex-wrap: wrap;
        padding: 15upx;
        justify-content: space-between;
      }

      .cake-item{
        width: 350upx;
        .poster{
            height: 350upx;
            background-color: #f5f5f5;
        }
        .fs-28{
            margin-top: 24upx;
        }
        .fs-16{
            margin: 14upx 0;
        }
        .fs-18{
            margin-bottom: 22upx;
        }
      }
      
    </style>