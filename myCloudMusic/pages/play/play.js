// pages/play/play.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //歌曲列表
      musiclist:[],
    //当前歌曲下标
     nowIndex:"",
     //当前歌曲数据
     music:{},
     
     // 歌曲id
     musicid:"",
     //控制播放方法
     action:{
      "method":"play"
     },
     //定义歌词数据
     lrcdata:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取传递过来的歌曲数据
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.on('acceptDataFromOpenerPage', data=> {
      // console.log(data.data)
      const musiclist=data.data.musiclist
      const nowIndex=data.data.nowIndex
      //当前播放歌曲
      const music = musiclist[nowIndex]
      // console.log(music)
      //赋值
      this.setData({
        nowIndex:nowIndex,
        musiclist:musiclist,
        musicid:music.id
      })
    })
  
    //调用获取歌曲详情方法
    this.getMusicDetail()
    //调用获取歌词的方法
    this.getlrc()
  },

  getMusicDetail:function(){
    wx.request({
         url:'https://cn-gz-yd-1.natfrp.cloud:56938/song/detail?ids='+this.data.musicid,
        success:(result)=>{
          console.log(result.data.songs[0])
          this.setData({
            music:result.data.songs[0]
          })
        },
    })
  },

  //播放控制
  playdate:function(){
    //获取当前状态
    let date = this.data.action.method
    //判断状态
    if(date ==="play"){
      this.setData({
        action:{
          "method":"pause"
        }
      })
    }else{
      this.setData({
        action:{
          "method":"play"
        }
      })
    }
  },

  //获取歌词
  getlrc:function(){
     wx.request({
        url:'https://cn-gz-yd-1.natfrp.cloud:56938/lyric?id='+this.data.musicid,
        success:(result)=>{
          const lrcstr = result.data.lrc.lyric
          //整理歌词
          this.setlrcshow(lrcstr)
        }
     })
  },
  //整理歌词
  setlrcshow: function(lrc){
    //定义空列表
      let lrcdata=[]
      //拆分成段落
      const lrclist = lrc.split("\n")
      //分离出来的时间和歌词
      //定义正则
      const re =/\[\d{2}:\d{2}\.\d{2,3}\]/ 
      //遍历列表
      lrclist.forEach(item=>{
        if(item){
          //获取时间
          let itemdate = item.match(re)
          //判断剔除掉空时间
          if(itemdate){
            itemdate=itemdate[0]
            //整理时间-拆分出中括号
            itemdate = itemdate.slice(1,-1)
            // 转换有意义的时分秒
            const timelist = itemdate.split(":")
            const time0=timelist[0]
            const time1=timelist[1]
            //整理拿到最终的时间值
            const time = parseFloat(time0)*60+parseFloat(time1)
            console.log(time)
            //找歌词 替换方法把符合时间的清除掉
            const lrcstr = item.replace(re,"")

            //给歌词和时间进行匹配整合储存到列表当中
            lrcdata.push([time,lrcstr])
          }
        }
    })
    console.log(lrcdata)
    // 储存
    this.setData({
      lrcdata:lrcdata
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