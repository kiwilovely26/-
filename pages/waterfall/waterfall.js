// pages/waterfall/waterfall.js
let col1H = 0;
let col2H = 0;
Page({
  data: {
    scrollH: 0,
    imgWidth: 0,
    loadingCount: 0,
    images: [],
    col1: [],
    col2: [],
    photos: [
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
      "http://p92ny3phk.bkt.clouddn.com/zzx.jpg",
      "http://p92ny3phk.bkt.clouddn.com/zzx2.jpg",
      "http://p92ny3phk.bkt.clouddn.com/zzx3.jpg",
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
      "http://p92ny3phk.bkt.clouddn.com/yzc1.jpg",
      "http://p92ny3phk.bkt.clouddn.com/yzc2.jpg",
      "http://p92ny3phk.bkt.clouddn.com/yzc3.jpg",
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
      "http://p92ny3phk.bkt.clouddn.com/zjy3.jpg",
      "http://p92ny3phk.bkt.clouddn.com/tyq1.jpg",
      "http://p92ny3phk.bkt.clouddn.com/tyq2.jpg",
      "http://p92ny3phk.bkt.clouddn.com/tyq3.jpg",
      "http://p92ny3phk.bkt.clouddn.com/csy4.jpg",
      "http://p92ny3phk.bkt.clouddn.com/csy5.jpg",
      "http://p92ny3phk.bkt.clouddn.com/csy3.jpg",
      "http://p92ny3phk.bkt.clouddn.com/ydc1.jpg",
      "http://p92ny3phk.bkt.clouddn.com/ydc2.jpg",
      "http://p92ny3phk.bkt.clouddn.com/ydc3.jpg",
      "http://p92ny3phk.bkt.clouddn.com/cjy1.jpg",
      "http://p92ny3phk.bkt.clouddn.com/cjy2.jpg",
      "http://p92ny3phk.bkt.clouddn.com/cjy3.jpg",
      "http://p92ny3phk.bkt.clouddn.com/nzy1.jpg",
      "http://p92ny3phk.bkt.clouddn.com/nzy2.jpg",
      "http://p92ny3phk.bkt.clouddn.com/nzy3.jpg",
      "http://p92ny3phk.bkt.clouddn.com/lyf1.jpg",
      "http://p92ny3phk.bkt.clouddn.com/lyf2.jpg",
      "http://p92ny3phk.bkt.clouddn.com/lyf3.jpg",
      "http://p92ny3phk.bkt.clouddn.com/wxy1.jpg",
      "http://p92ny3phk.bkt.clouddn.com/wxy2.jpg",
      "http://p92ny3phk.bkt.clouddn.com/wxy3.jpg",
      "http://p92ny3phk.bkt.clouddn.com/yyh1.jpg",
      "http://p92ny3phk.bkt.clouddn.com/yyh2.jpg",
      "http://p92ny3phk.bkt.clouddn.com/yyh3.jpg",
      "http://p92ny3phk.bkt.clouddn.com/csy_n1.jpg",
      "http://p92ny3phk.bkt.clouddn.com/csy_n2.jpg",
      "http://p92ny3phk.bkt.clouddn.com/csy_n3.jpg"
    ],
  },
  onLoad: function (options) {
    wx.getSystemInfo({
      success: (res) => {
        let ww = res.windowWidth;
        let wh = res.windowHeight;
        let imgWidth = ww * 0.48;
        let scrollH = wh;

        this.setData({
          scrollH: scrollH,
          imgWidth: imgWidth
        });

        //加载首组图片
        this.loadImages();
      }
    })
  },

  onImageLoad: function (e) {
    let imageId = e.currentTarget.id;
    let oImgW = e.detail.width;         //图片原始宽度
    let oImgH = e.detail.height;        //图片原始高度
    let imgWidth = this.data.imgWidth;  //图片设置的宽度
    let scale = imgWidth / oImgW;        //比例计算
    let imgHeight = oImgH * scale;      //自适应高度

    let images = this.data.images;
    let imageObj = null;

    for (let i = 0; i < images.length; i++) {
      let img = images[i];
      if (img.id === imageId) {
        imageObj = img;
        break;
      }
    }

    imageObj.height = imgHeight;

    let loadingCount = this.data.loadingCount - 1;
    let col1 = this.data.col1;
    let col2 = this.data.col2;

    //判断当前图片添加到左列还是右列
    if (col1H <= col2H) {
      col1H += imgHeight;
      col1.push(imageObj);
    } else {
      col2H += imgHeight;
      col2.push(imageObj);
    }

    let data = {
      loadingCount: loadingCount,
      col1: col1,
      col2: col2
    };

    //当前这组图片已加载完毕，则清空图片临时加载区域的内容
    if (!loadingCount) {
      data.images = [];
    }
    this.setData(data);
  },
  loadImages: function () {
    let images = []
    for(var i=0; i<this.data.photos.length;i++){
        images.push({
          pic: this.data.photos[i],
          height:0
        })
    }

    let baseId = "img-" + (+new Date());

    for (let i = 0; i < images.length; i++) {
      images[i].id = baseId + "-" + i;
    }

    this.setData({
      loadingCount: images.length,
      images: images
    });
  },

  lookPhoto: function (event) {
    var src = event.currentTarget.dataset.url
    var imgList = this.data.photos
    wx.previewImage({
      current: src,
      urls: imgList
    })
  },
})