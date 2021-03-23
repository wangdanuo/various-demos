const app = getApp()

Page({
  data: {
  },

  showModal: function () {
    wx.showModal({
      title: '失败',
      content: '失败内容',
      showCancel: false
    })
  },

  getUserInfo: function () {
    wx.authorize({
      scope: 'scope.userInfo',
      success () {
        
      }
    })
  },

  onLoad: function () {

  },
})