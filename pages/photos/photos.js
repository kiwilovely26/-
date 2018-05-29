Page({
  data: {
    hidden: false,
    imgHeight:186,
    photos:[
      "http://p92ny3phk.bkt.clouddn.com/lsy1.jpg",
      "http://p92ny3phk.bkt.clouddn.com/lsy2.jpg",
      "http://p92ny3phk.bkt.clouddn.com/lsy3.jpg",
      "http://p92ny3phk.bkt.clouddn.com/yxd1.jpg",
      "http://p92ny3phk.bkt.clouddn.com/yxd2.jpg",
      "http://p92ny3phk.bkt.clouddn.com/yxd3.jpg",
      "http://p92ny3phk.bkt.clouddn.com/zbr1.jpg",
      "http://p92ny3phk.bkt.clouddn.com/zbr2.jpg",
      "http://p92ny3phk.bkt.clouddn.com/zbr3.jpg",
      "http://p92ny3phk.bkt.clouddn.com/zxt1.jpg",
      "http://p92ny3phk.bkt.clouddn.com/zxt2.jpg",
      "http://p92ny3phk.bkt.clouddn.com/zxt3.jpg",
      "http://p92ny3phk.bkt.clouddn.com/syx1.jpg",
      "http://p92ny3phk.bkt.clouddn.com/syx2.jpg",
      "http://p92ny3phk.bkt.clouddn.com/syx3.jpg",
      "http://p92ny3phk.bkt.clouddn.com/lmc1.jpg",
      "http://p92ny3phk.bkt.clouddn.com/lmc2.jpg",
      "http://p92ny3phk.bkt.clouddn.com/lmc3.jpg",
      "http://p92ny3phk.bkt.clouddn.com/dyx1.jpg",
      "http://p92ny3phk.bkt.clouddn.com/dyx2.jpg",
      "http://p92ny3phk.bkt.clouddn.com/dyx3.jpg",
      "http://p92ny3phk.bkt.clouddn.com/lhd1.jpg",
      "http://p92ny3phk.bkt.clouddn.com/lhd2.jpg",
      "http://p92ny3phk.bkt.clouddn.com/lhd3.jpg",
      "http://p92ny3phk.bkt.clouddn.com/lyk1.jpg",
      "http://p92ny3phk.bkt.clouddn.com/lyk2.jpg",
      "http://p92ny3phk.bkt.clouddn.com/lyk3.jpg",
      "http://p92ny3phk.bkt.clouddn.com/lzx1.jpg",
      "http://p92ny3phk.bkt.clouddn.com/lzx2.jpg",
      "http://p92ny3phk.bkt.clouddn.com/lzx3.jpg",
      "http://p92ny3phk.bkt.clouddn.com/xxy1.jpg",
      "http://p92ny3phk.bkt.clouddn.com/xxy2.jpg",
      "http://p92ny3phk.bkt.clouddn.com/xxy3.jpg",
      "http://p92ny3phk.bkt.clouddn.com/yyl1.jpg",
      "http://p92ny3phk.bkt.clouddn.com/yyl2.jpg",
      "http://p92ny3phk.bkt.clouddn.com/yyl3.jpg",
      "http://p92ny3phk.bkt.clouddn.com/zzt1.jpg",
      "http://p92ny3phk.bkt.clouddn.com/zzt2.jpg",
      "http://p92ny3phk.bkt.clouddn.com/zzt3.jpg",
      "http://p92ny3phk.bkt.clouddn.com/ly1.jpg",
      "http://p92ny3phk.bkt.clouddn.com/ly2.jpg",
      "http://p92ny3phk.bkt.clouddn.com/ly3.jpg",
      "http://p92ny3phk.bkt.clouddn.com/zjy1.jpg",
      "http://p92ny3phk.bkt.clouddn.com/zjy2.jpg",
      "http://p92ny3phk.bkt.clouddn.com/zjy3.jpg"
    ],
    clientHeight:0,
    arr:[],
    arrHight:[]
  },  

  lookPhoto: function(event){
    var src = event.currentTarget.dataset.url
    var imgList = this.data.photos
    wx.previewImage({
      current:src,
      urls: imgList
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var _this = this;
    wx.getSystemInfo({
      success: function(res) {
        _this.setData({          
          clientHeight:res.windowHeight
        })
        var arr = [true,true,true,true,true,true];
        var length = Array.from(_this.data.photos).length;
        var arrHight = [];
        for (var i = 0; i < length-6; i++) {
          var n = 6;
          arr[i+n] = false;
          arrHight[i+n] = Math.floor((i+n) / 2) * _this.data.imgHeight;
        }
        /* for (var j = 0; j < arr.length; j++) {
          if (arrHight[j] < _this.data.clientHeight) {
            arr[j] = true
          }
        } */
        _this.setData({
          arr: arr,
          arrHight: arrHight
        })
      }
    })    
  },

  onReady:function(){
    this.setData({
      hidden:true
    })
  },

  onPageScroll: function (res) {
    var arrHight = this.data.arrHight;
    var scrollTop = res.scrollTop;
    var arr = this.data.arr;
    for (var i = 0; i < this.data.arr.length-6; i++) {
      var n = 6;
      if (arrHight[i+n] <= scrollTop + this.data.clientHeight) {
        if (!arr[i+n]) {
          arr[i+n] = true;          
        }
      } 
    } 
    this.setData({
      arr: this.data.arr
    })
  }
})