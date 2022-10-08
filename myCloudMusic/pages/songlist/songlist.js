// pages/songlist/songlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     background:{},//轮播图
     singer:{},//歌手
     newMusiclist:{}
  },


  //获取banner轮播图
  getbanner:function(){
    wx.request({
      url:'http://localhost:3000/banner',
      dataType:"json",

      success:(result) =>{
        console.log("这个是轮播图")
        console.log(result.data.banners)
        //设置给background
        this.setData({
          background:result.data.banners
        })
      },
    })
  },

  //获取歌手
  getsinger:function(){
    wx.request({
      url:'http://localhost:3000/top/artists',
      dataType:"json",

      success:(result) =>{
        console.log("这个是热门歌手")
        console.log(result.data.artists)
        //设置给background
        this.setData({
          singer:result.data.artists
        })
      },
    })
  },

  //获取新音乐
  getNewMusic:function(){
      wx.request({
        url:'http://localhost:3000/personalized/newsong',
        dataType:"json",
        
        success:(result) =>{
          console.log("这个是新音乐");
          console.log(result.data.result)
          //设置给newMusiclist
          this.setData({
             newMusiclist:result.data.result
          })
        }
      })
  },






















  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
        this.getbanner()//轮播图
        this.getsinger()//歌手
        this.getNewMusic()//获取新音乐

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})