//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    swingShow: false,
    zoomInShow:false,
    slideInDownShow:false
  },
  onLoad: function () {

  }, 
  onReady:function(){
    
  },
  onShow:function(){
    let that = this;
    setTimeout(function(){
      that.setData({
        swingShow:true,
        zoomInShow: true,
        slideInDownShow: true
      })
    },0)
  },
  onHide:function(){
    console.log("hide");
    this.setData({
      swingShow: false,
      zoomInShow: false,
      slideInDownShow: false
    })
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log("来自页面内转发按钮"); 
      console.log(res.target)
    }else{
      console.log("来自右上角转发菜单");
    }
    return {
      title: '儿童节快乐～',
      path: '/pages/index/index',
      imageUrl:"/assets/img/children-home.png",
      success:(res)=>{
        console.log("转发成功",res)
      },
      fail:(res)=>{
        console.log("转发失败",res)
      }
    }
  }
})
