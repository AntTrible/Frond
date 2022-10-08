// pages/songlist/songlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     background:{},//轮播图
     singer:{}//歌手
  },


  //获取banner
  getbanner:function(){
    wx.request({
      url:'http://localhost:3000/banner',
      dataType:"json",

      success:(result) =>{
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
        console.log(result.data.artists)
        //设置给background
        this.setData({
          singer:result.data.artists
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
        this.getbanner()//轮播图
        this.getsinger()//歌手

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