
var can  = new Vue({
    el:"#app",
    data:{
        MiContainerPhone:false,     //小米产品动态显示界面
        MiPhoneContainer:false,     //小米手机界面 
        RedmiPhoneContainer:false,  //红米手机界面 
        MiTvContainer:false,        //小米电视界面
        Mibooks:false,              //小米笔记本
        MiPad:false,                //小米平板
        Mihomehold:false,           //小米家电
        MiWifi:false,               //小米路由器
        left:"picture/轮播图变换前左.png",
        right:"picture/轮播图变换前右.png",
        Mihref:[
            "https://www.mi.com/shop/buy/detail?product_id=16326", //k50
            "https://www.mi.com/xiaomimixfold2", //小米flod2
            "https://www.mi.com/shop/buy/detail?product_id=16386", //会议宝
            "https://www.mi.com/a/h/25517.html?sign=f7d246eceaf6b751a8212639526d08f2", //电暖器
            "https://www.mi.com/a/h/25460.html?sign=b13dee151aade613fc3c81d4a906d029", //晾衣机

        ],
        LoopPicture:[
            "picture/轮播图k50.jpg",
            "picture/轮播图小米flod2.jpg",
            "picture/小米会议宝.jpg",
            "picture/小米电暖器.jpg",
            "picture/小米智能晾衣机子.jpg",
        ],
        LoopPicturenum:0,  //轮播图
        Mihrefnum:0,   //轮播图超链接

        //中间部分的手机分类
        Phone:false,             //手机显示
        TV:false,                //电视显示
        Pad:false,               //平板显示
        Watch:false,             //手表显示
        MusicSound:false,        //音响显示
        HomeHold:false,          //家电显示
        WIFI:false,              //WIFI显示
        Battery:false,           //电源显示
        Baby:false,              //儿童显示
        Life:false,              //生活显示


    },

    methods:{
      MiMiddle:function(){
        this.MiContainerPhone=false;
      },

      Mitail:function(){
        this.Phone=false;             //手机
        this.TV=false;                //电视
        this.Pad=false;               //平板
        this.Watch=false;             //手表
        this.MusicSound=false;        //音响
        this.HomeHold=false;          //家电
        this.WIFI=false;              //WIFI
        this.Battery=false;           //电源
        this.Baby=false;              //儿童
        this.Life=false;              //生活
      },

      MiPngDiv:function(){
        this.Phone=false;             //手机
        this.TV=false;                //电视
        this.Pad=false;               //平板
        this.Watch=false;             //手表
        this.MusicSound=false;        //音响
        this.HomeHold=false;          //家电
        this.WIFI=false;              //WIFI
        this.Battery=false;           //电源
        this.Baby=false;              //儿童
        this.Life=false;              //生活
      },

      MoveImg:function(){
        this.Phone=false;             //手机
        this.TV=false;                //电视
        this.Pad=false;               //平板
        this.Watch=false;             //手表
        this.MusicSound=false;        //音响
        this.HomeHold=false;          //家电
        this.WIFI=false;              //WIFI
        this.Battery=false;           //电源
        this.Baby=false;              //儿童
        this.Life=false;              //生活
      },

      XiaomiPhone:function(){                     
        this.MiContainerPhone=true;              //小米手机动态显示界面
        this.MiPhoneContainer=true;             //小米手机界面 显示
        this.RedmiPhoneContainer=false;        //红米手机界面 
        this.MiTvContainer=false;             //小米电视界面
        this.Mibooks=false;                  //小米笔记本
        this.MiPad=false;                   //小米平板
        this.Mihomehold=false;             //小米家电
        this.MiWifi=false;               //小米路由器
      },

      RedmiPhone:function(){
        this.MiContainerPhone=true;              //小米手机动态显示界面
        this.MiPhoneContainer=false;            //小米手机界面 
        this.RedmiPhoneContainer=true;         //红米手机界面  显示
        this.MiTvContainer=false;             //小米电视界面
        this.Mibooks=false;                  //小米笔记本
        this.MiPad=false;                   //小米平板
        this.Mihomehold=false;             //小米家电
        this.MiWifi=false;                //小米路由器
      },
      XiaomiTv:function(){
        this.MiContainerPhone=true;              //小米手机动态显示界面
        this.MiPhoneContainer=false;            //小米手机界面 
        this.RedmiPhoneContainer=false;        //红米手机界面  
        this.MiTvContainer=true;              //小米电视界面  显示
        this.Mibooks=false;                  //小米笔记本
        this.MiPad=false;                   //小米平板
        this.Mihomehold=false;             //小米家电
        this.MiWifi=false;                //小米路由器
      },
      XiaomiBook:function(){
        this.MiContainerPhone=true;              //小米手机动态显示界面
        this.MiPhoneContainer=false;            //小米手机界面 
        this.RedmiPhoneContainer=false;        //红米手机界面  
        this.MiTvContainer=false;             //小米电视界面  
        this.Mibooks=true;                   //小米笔记本  显示
        this.MiPad=false;                   //小米平板
        this.Mihomehold=false;             //小米家电
        this.MiWifi=false;                //小米路由器
      },
      XiaomiPad:function(){
        this.MiContainerPhone=true;              //小米手机动态显示界面
        this.MiPhoneContainer=false;            //小米手机界面 
        this.RedmiPhoneContainer=false;        //红米手机界面  
        this.MiTvContainer=false;             //小米电视界面  
        this.Mibooks=false;                  //小米笔记本  
        this.MiPad=true;                    //小米平板  显示
        this.Mihomehold=false;             //小米家电
        this.MiWifi=false;                //小米路由器
      },
      XiaomiHomeHold:function(){
        this.MiContainerPhone=true;              //小米手机动态显示界面
        this.MiPhoneContainer=false;            //小米手机界面 
        this.RedmiPhoneContainer=false;        //红米手机界面  
        this.MiTvContainer=false;             //小米电视界面  
        this.Mibooks=false;                  //小米笔记本  
        this.MiPad=false;                   //小米平板  
        this.Mihomehold=true;              //小米家电  显示
        this.MiWifi=false;                //小米路由器
      },
      XiaomiWIFI:function(){
        this.MiContainerPhone=true;              //小米手机动态显示界面
        this.MiPhoneContainer=false;            //小米手机界面 
        this.RedmiPhoneContainer=false;        //红米手机界面  
        this.MiTvContainer=false;             //小米电视界面  
        this.Mibooks=false;                  //小米笔记本  
        this.MiPad=false;                   //小米平板  
        this.Mihomehold=false;             //小米家电  显示
        this.MiWifi=true;                 //小米路由器
      },

      MiLoopPictureLeft:function(){                  //轮播图箭头的改变
         this.left="picture/轮播图左.png";
      },

      MiLoopPictureRight:function(){
         this.right="picture/轮播图右.png";
      },
     
      MoveLeft:function(){
       this.left="picture/轮播图变换前左.png";
      },

      MoveRight:function(){
        this.right="picture/轮播图变换前右.png";
      },

      LeftDown:function(){
        if(this.LoopPicturenum>0 && this.LoopPicturenum<=4){
            this.LoopPicturenum--;
            this.Mihrefnum--;
        }else if(this.LoopPicturenum==0){
            this.LoopPicturenum = 4;
            this.Mihrefnum = 4;
        }
      },

      RightDown:function(){
        if(this.LoopPicturenum>=0 && this.LoopPicturenum<4){
            this.LoopPicturenum++;
            this.Mihrefnum++;
        }else if(this.LoopPicturenum=4){
            this.LoopPicturenum = 0;
            this.Mihrefnum= 0;
        }
      },


      //小米详情页事件
      MovePhone:function(){                            //手机分类
        this.Phone=true;             //手机显示
        this.TV=false;                //电视
        this.Pad=false;               //平板
        this.Watch=false;             //手表
        this.MusicSound=false;        //音响
        this.HomeHold=false;          //家电
        this.WIFI=false;              //WIFI
        this.Battery=false;           //电源
        this.Baby=false;              //儿童
        this.Life=false;              //生活
      },

      MoveTV:function(){                               //电视分类
        this.Phone=false;             //手机
        this.TV=true;                 //电视显示
        this.Pad=false;               //平板
        this.Watch=false;             //手表
        this.MusicSound=false;        //音响
        this.HomeHold=false;          //家电
        this.WIFI=false;              //WIFI
        this.Battery=false;           //电源
        this.Baby=false;              //儿童
        this.Life=false;              //生活
      },

      MovePad:function(){                              //平板分类
        this.Phone=false;             //手机
        this.TV=false;                //电视
        this.Pad=true;                //平板显示
        this.Watch=false;             //手表
        this.MusicSound=false;        //音响
        this.HomeHold=false;          //家电
        this.WIFI=false;              //WIFI
        this.Battery=false;           //电源
        this.Baby=false;              //儿童
        this.Life=false;              //生活
      },
      
      MoveWatch:function(){                           //手表分类
        this.Phone=false;             //手机
        this.TV=false;                //电视
        this.Pad=false;               //平板
        this.Watch=true;              //手表显示
        this.MusicSound=false;        //音响
        this.HomeHold=false;          //家电
        this.WIFI=false;              //WIFI
        this.Battery=false;           //电源
        this.Baby=false;              //儿童
        this.Life=false;              //生活
      },

      MoveSound:function(){                           //音箱分类
        this.Phone=false;             //手机
        this.TV=false;                //电视
        this.Pad=false;               //平板
        this.Watch=false;             //手表
        this.MusicSound=true;         //音响显示
        this.HomeHold=false;          //家电
        this.WIFI=false;              //WIFI
        this.Battery=false;           //电源
        this.Baby=false;              //儿童
        this.Life=false;              //生活
      },

      MoveHomeHold:function(){                        //家电分类
        this.Phone=false;             //手机
        this.TV=false;                //电视
        this.Pad=false;               //平板
        this.Watch=false;             //手表
        this.MusicSound=false;        //音响
        this.HomeHold=true;           //家电显示
        this.WIFI=false;              //WIFI
        this.Battery=false;           //电源
        this.Baby=false;              //儿童
        this.Life=false;              //生活
      },

      MoveWIFI:function(){                            //WIFI分类
        this.Phone=false;             //手机
        this.TV=false;                //电视
        this.Pad=false;               //平板
        this.Watch=false;             //手表
        this.MusicSound=false;        //音响
        this.HomeHold=false;          //家电
        this.WIFI=true;               //WIFI显示
        this.Battery=false;           //电源
        this.Baby=false;              //儿童
        this.Life=false;              //生活
      },

      MoveBattery:function(){                          //电源分类
        this.Phone=false;             //手机
        this.TV=false;                //电视
        this.Pad=false;               //平板
        this.Watch=false;             //手表
        this.MusicSound=false;        //音响
        this.HomeHold=false;          //家电
        this.WIFI=false;              //WIFI
        this.Battery=true;            //电源显示
        this.Baby=false;              //儿童
        this.Life=false;              //生活
      },

      MoveBaby:function(){                             //儿童分类
        this.Phone=false;             //手机
        this.TV=false;                //电视
        this.Pad=false;               //平板
        this.Watch=false;             //手表
        this.MusicSound=false;        //音响
        this.HomeHold=false;          //家电
        this.WIFI=false;              //WIFI
        this.Battery=false;           //电源
        this.Baby=true;               //儿童显示
        this.Life=false;              //生活
      },

      MoveLife:function(){                             //生活分类
        this.Phone=false;             //手机
        this.TV=false;                //电视
        this.Pad=false;               //平板
        this.Watch=false;             //手表
        this.MusicSound=false;        //音响
        this.HomeHold=false;          //家电
        this.WIFI=false;              //WIFI
        this.Battery=false;           //电源
        this.Baby=false;               //儿童
        this.Life=true;              //生活显示
      }
    },
})
