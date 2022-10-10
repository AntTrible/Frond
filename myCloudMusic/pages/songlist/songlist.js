// pages/songlist/songlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background:{},//轮播图
    singer:{},//歌手
    newMusiclist:[]//新音乐列表
  },


  //获取banner轮播图
  getbanner:function(){
    wx.request({
      url:'https://cn-gz-yd-1.natfrp.cloud:56938/banner',
      dataType:"json",

      success:(result) =>{
        // console.log("这个是轮播图")
        // console.log(result.data.banners)
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
      url:'https://cn-gz-yd-1.natfrp.cloud:56938/top/artists',
      dataType:"json",

      success:(result) =>{
        // console.log("这个是热门歌手")
        // console.log(result.data.artists)
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
        url:'https://cn-gz-yd-1.natfrp.cloud:56938/personalized/newsong',
        dataType:"json",
        
        success:(result) =>{
          // console.log("这个是新音乐");
          // console.log(result.data.result)
          //设置给newMusiclist
          this.setData({
             newMusiclist:result.data.result
          })
        }
      })
  },

   

   //点击热门歌手
   hotlink:function(e){
    // console.log("这个是热门歌手")
    // console.log(e.currentTarget.dataset.index)

    //获取当前歌手下标
    const index=e.currentTarget.dataset.index
    //拿到当前数据
    const singer = this.data.singer
    //跳转页面传递数据
    wx.navigateTo({
      url:'/pages/singerDetail/singerDetail',
      success:function(res){
        res.eventChannel.emit('acceptDataFromOpenerPage',{data:singer[index]})
      }
    })
   },

   //点击跳转play页
   playlink:function(e){
        //拿到当前下标
        const index = e.currentTarget.dataset.index
        //拿到播放列表数据
        const musicdata = this.data.newMusiclist
        //获取歌曲id
        const mid = musicdata[index].id
        wx.request({
          url:'https://cn-gz-yd-1.natfrp.cloud:56938/check/music?id='+mid,

          success:(res)=>{

                if(res.data.message==="ok"){
                // console.log("可以播放")
                //定义数据对象
                const objdata={}
                //存储列表数据
                objdata.musiclist=musicdata
                //存储当前播放的歌曲下标
                objdata.nowIndex=index
                // console.log(objdata)
                wx.navigateTo({
                  url:'/pages/play/play',
                  success:(result)=>{
                    result.eventChannel.emit('acceptDataFromOpenerPage',{ data:objdata
                    })
                  },
                })
            }else{
              // console.log("不能播放")
              //微信弹框提示
              wx.showModal({
                content:'歌曲没有版权请选择其他歌曲进行播放',
                showCancel:true,
                title:'提示'
              })
            }
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