// pages/task01/task01.js
var p = 0
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fromShare: false,
    timer: null,  // 定时器
    list: [1,2,3,4,5,6],
    touchX: 0,
    touchY: 0
  },
  onstart : function ({ changedTouches: c }) {
    this.setData({
      touchX: c[0].clientX,
      touchY: c[0].clientY
    })
  },
  onend : function ({ changedTouches: c }) {
    if (c[0].clientY - this.data.touchY < -36 && Math.abs(c[0].clientX - this.data.touchX) < 36) {
      console.log('成功')
    }
  },
  onscroll: function (e) {
    console.log('e', e)
  },
  // TODO
  onShareAppMessage: function (res) {
    return {
      success: (res) => {
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000
        })        
        console.log('res', res)
      },
      fail: () => {
        wx.showToast({
          title: '失败',
          icon: 'success',
          duration: 2000
        })        
        console.log('res', res)
      }      
    }
  },
  clickLogin: function () {
    wx.login({
      success (res) {
        // console.log('res', res)
        if (res.code) {
          //发起网络请求
          // wx.request({
          //   url: 'https://test.com/onLogin',
          //   data: {
          //     code: res.code
          //   }
          // })
        } else {
          // console.log('登录失败！' + res.errMsg)
        }
      }
    })
  },
  clickShare: function () {
    this.setData({
      fromShare: true
    })
  },
  handleSave: function () {
    wx.getSetting({
      withSubscriptions: false,
      success: (res) => {
        if (res.authSetting['scope.writePhotosAlbum'] === false) {
          console.log('保存失败，请开启相册权限。')
          return
        }
        wx.downloadFile({
          url: 'https://souche.oss-cn-hangzhou.aliyuncs.com/20201030/png/f08d38234e0573ff0c269f1dd80efc06.png',
          success: (res) => {
            console.log(res, 'res')
            wx.saveImageToPhotosAlbum({
              filePath: res.tempFilePath,
              success: () => {
                wx.showToast({
                  title: '保存图片成功！',
                })
              },
              fail: () => {
                wx.showToast({
                  title: '保存图片失败！',
                })
              }
            })
          }
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    if (this.data.fromShare) {
      if (p > 3) { 
        console.log('分享成功');
      } else {
        console.log('分享失败')
      }
      clearInterval(this.data.timer)
    }
    // console.log(`${getCurrentPages()[0].options.a}`)
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  
  onHide: function () {
    const { fromShare } = this.data
    if (fromShare) {
      this.setData({
        timer: setInterval(() => {   
          p++;
          console.log(p)
        }, 1000)
      })

    }
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