//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isFlag: false
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  handleSub: function () {

  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    let main = 0
    // wx.getSetting({
    //   withSubscriptions: true,
    //   success: (res) => {
    //     console.log('res' ,res)
    //     if (res.subscriptionsSetting) {
    //       if (res.subscriptionsSetting.mainSwitch) {
    //         main = 1
    //         if (res.subscriptionsSetting.itemSettings) {
    //           main = 3
    //         } else {
    //           main = 4
    //         }
    //       } else {
    //         main = 2
    //       }
    //     }
    //     console.log('main', main)
    //     console.log('isFlag', this.data.isFlag)
    //   }
    // })
    wx.getSetting({
      withSubscriptions: true,
      success: (res) => {
        if (res.subscriptionsSetting) {
          if (res.subscriptionsSetting.mainSwitch) { // 消息订阅总开关判断
            if (res.subscriptionsSetting.itemSettings) { // 小程序订阅过消息后才能使用itemSettings属性
              if (res.subscriptionsSetting.itemSettings[''] === 'accept') { // 始终允许该模板
                console.log('始终允许')
              } else if (res.subscriptionsSetting.itemSettings[''] === 'reject') { // 始终拒绝该模板
                console.log('始终拒绝')
              }
            } else {
              console.log(111)
            }
          }
          else {
            console.log('总开关为关')
          }
        } else { // 7.0.6版本以下不能获取subscriptionsSetting
          console.log('7.0.6版本以下不能获取subscriptionsSetting')
        }
      }
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
