var can = new Vue({
    el:"#app",
    data:{
        musicname:"",                                     //获取你搜索的歌曲
        musicsrc:[],                                      //存放歌曲播放地址         
        musicnamearr:[],                                  //传递歌曲信息包含了歌曲的名字
        musicidarr:[],                                    //存放歌曲的每首歌的id
        usermusiccomment:[],                              //存放歌曲的评论以及用户的名称和头像
        listmusic:"",                                     //传递到audio的音乐播放地址使其可以播放音乐
        musicbackgrounda:"素材/黑胶唱片.png",              //刚开始封面的黑胶唱片
        musicbackgroundb:"素材/背景.jpeg",                 //白云蓝天的背景
        can:"musicpicture1",                              //改变黑胶唱片的位置
        musicMv:"",
        
        lookmusic:false,                                       //这里是隐藏播放进度条的
        lookmv:false,                                          //显示视频mv
        lookpicture:true,                                      //显示黑胶唱片

        musiclistroll:"musiclist",

        musiccommentroll:"musiccomment",
        
    },
    methods:{
       
        Press:function(){                                                                             //查找音乐的按钮
            this.musicsrc=[];
            this.musicnamearr=[];
            this.musicidarr=[];
            this.usermusiccomment=[];
           
            var that = this;
            this.can = "musicpicture";                                         
            axios.get('https://autumnfish.cn/search?keywords='+this.musicname).then                  //获取音乐的接口信息
            (function(response){
                var num = response;
                 that.musicnamearr = response.data.result.songs;                                     //给musicnamearr传递歌曲信息 
                 console.log(response.data.result.songs);
                 for(var i = 0 ; i<response.data.result.songs.length;i++){
                    that.musicidarr.push(response.data.result.songs[i].id);
                 }    
                 
                 for(var i = 0 ; i < num.data.result.songs.length ; i++){
                 axios.get("https://autumnfish.cn/song/detail?ids="+num.data.result.songs[i].id).then
                 (function(response){
                    // console.log(response.data.songs[0].al.picUrl);
                    that.musicsrc.push(response.data.songs[0].al.picUrl);
                    
                 }
                 ,
                 function(){

                 })
                }     
            }
            ,
            function(err){
            });
            this.musicname="";
        },

        downmusic:function(id){                                                                       //根据id获取播放地址的接口
            var that = this;
            axios.get("https://autumnfish.cn/song/url?id="+id).then                               
            (function(response){
                 //console.log(response.data.data[0].url);
                 that.listmusic = response.data.data[0].url;
            }
            ,
            function(){
            });

            axios.get("https://autumnfish.cn/song/detail?ids="+id).then                           //根据id获取音乐封面的接口
            (function(response){
                console.log(response.data.songs[0].al.picUrl);
                that.musicbackgrounda = response.data.songs[0].al.picUrl;
                that.musicbackgroundb = response.data.songs[0].al.picUrl;
            }
            ,
            function(){

            });

            axios.get("https://autumnfish.cn/comment/hot?type=0&id="+id).then                     //获取歌曲的评论
            (function(response){
                //   console.log(response.data.hotComments);
                  that.usermusiccomment = response.data.hotComments;
            }
            ,
            function(){

            });

            this.lookmv=false;
            this.lookmusic=true;
            this.lookpicture=true;

        },

        downMusicMv:function(mvid){
            this.lookmusic=false;
            this.lookmv=true;
            this.lookpicture=false;
            var that = this;
            axios.get("https://autumnfish.cn/mv/url?id="+mvid).then                              //获取歌曲的视频
            (function(response){
                console.log(response);
                that.musicMv = response.data.data.url;
            }
            ,
            function(err){

            })
        },

        roll:function(){         //这个是歌曲区的滑轮
           this.musiclistroll="musiclist1";
        },
        
        moveroll:function(){
            this.musiclistroll="musiclist";
        },
        commentroll:function(){
            this.musiccommentroll="musiccomment1";
        },

        commentmove:function(){
            this.musiccommentroll="musiccomment";
        }                 
    }
    

})