//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
  },
  onLoad: function () {    
  },
  bindViewHome: function(){
    wx.navigateTo({
      url: '../home/home'
    })
  }
})
