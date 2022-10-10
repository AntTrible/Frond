// pages/singerDetail/singerDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //当前歌手数据
    singerdata:{},
    //歌手详情
    singerdetail:{},
    //热门歌手歌曲
    hotMusicList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     //获取页面传输过来的歌手基本数据并进行了存储
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.on('acceptDataFromOpenerPage',data=> {
      // console.log(data)
      this.setData({
        singerdata:data
      })
    })
     
    //调用渲染页面的方法
    this.getdetail()

    //调用热门歌曲
    this.gethotMusic()





  },

  //页面详情数据获取
  getdetail:function(){
    //获取id
    const id = this.data.singerdata.data.id
    // console.log(id)
    //通过id来做数据请求
    wx.request({
      url: 'https://cn-gz-yd-1.natfrp.cloud:56938/artist/detail?id='+id,
      success:(result)=>{
        // console.log(result)
        this.setData({
          singerdetail:result
        })
      }
    })
  },


//热门歌曲
  gethotMusic:function(){
    //获取id
    const id = this.data.singerdata.data.id
    // console.log(id)
    //通过id来做数据请求
    wx.request({
      url: 'https://cn-gz-yd-1.natfrp.cloud:56938/artist/top/song?id='+id,
      success:(result)=>{
        // console.log(result)
        this.setData({
          hotMusicList:result
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
        const musicdata = this.data.hotMusicList.data.songs
        //获取歌曲id
        let mid = musicdata[index].id
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