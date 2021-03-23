import tool from '../../utils/util.js';
Page({
  /**
   * 页面的初始数据
   */
  data: {

  },
  clickW : function () {
    wx.getUserInfo({
      lang: lang,
    })
  },
  clickTest : tool.throttle(() => {
    console.log(333)
  }, 2000),
  // clickTest: tool.throttle( function() {
  //   console.log(111)
  // }, 2000),
  // 账户余额提醒
  handleMandate3: tool.throttle( function () {
    wx.getSetting({
      withSubscriptions: true,
      success: (res) => {
        console.log('res', res)
        if (res.subscriptionsSetting) {
          if (res.subscriptionsSetting.mainSwitch) {
            if (res.subscriptionsSetting.itemSettings) {
              if (res.subscriptionsSetting.itemSettings['FDQ2WCEv3J8xhANitzAmK-sDkDUD5xG0kHBcFWTIjbs'] === 'accept') {
                // console.log('始终接受')
                wx.showToast({
                  title: '始终接受',
                  icon: 'none',
                  duration: 2000
                })
              } else if (res.subscriptionsSetting.itemSettings['FDQ2WCEv3J8xhANitzAmK-sDkDUD5xG0kHBcFWTIjbs'] === 'reject') {
                // console.log('始终拒绝')
                wx.showToast({
                  title: '始终拒绝',
                  icon: 'none',
                  duration: 2000
                })
              }
            }    
          }
          else {
            // console.log('总开关为关')
            wx.showToast({
              title: '总开关为关',
              icon: 'none',
              duration: 2000
            })
          }
        }
      }
    })
    wx.requestSubscribeMessage({
      tmplIds: ["FDQ2WCEv3J8xhANitzAmK-sDkDUD5xG0kHBcFWTIjbs"],
      success: (res) => {
        if (res['FDQ2WCEv3J8xhANitzAmK-sDkDUD5xG0kHBcFWTIjbs'] === 'accept'){
          wx.showToast({
            title: '订阅OK!',
            duration: 1200,
          })
        }
      },
      fail(err) {
        wx.showToast({
          title: '拒绝订阅',
          duration: 1200
        })
        console.error(err);
      }
    })
  }, 1000),
  // 鉴定结果通知
  handleMandate2: function () {
    wx.requestSubscribeMessage({
      tmplIds: ['AYKMZ25vkhlgo5ct8_q0pVb8b9-bHoeWkWwXI9ncKRg', 'FDQ2WCEv3J8xhANitzAmK-sDkDUD5xG0kHBcFWTIjbs'],
      success: res => {
        if (res['AYKMZ25vkhlgo5ct8_q0pVb8b9-bHoeWkWwXI9ncKRg'] === 'accept') {
          wx.showToast({
            title: '订阅ok2',
            duration: 1000
          })
        }
      },
      fail(err) {
        wx.showToast({
          title: '拒绝2',
          duration: 1200
        })
      }
    })
  },
  // 制作完成通知
  // handleMandate3: function () {
  //   wx.requestSubscribeMessage({
  //     tmplIds: ['VJBQIawyf3bmx8E56dUmVqchriiBcqC61_W255w7C2s'],
  //     success: res => {
  //       if (res['VJBQIawyf3bmx8E56dUmVqchriiBcqC61_W255w7C2s'] === 'accept') {
  //         wx.showToast({
  //           title: '订阅ok3',
  //           duration: 1000
  //         })
  //       }
  //     },
  //     fail(err) {
  //       wx.showToast({
  //         title: '拒绝3',
  //         duration: 1200
  //       })
  //       alert(err);
  //     }
  //   })
  // },
  handleMandate4: function (res) {
    wx.getSetting({
      withSubscriptions: true,
      success: res => {
        if (res.subscriptionsSetting.mainSwitch) {
          console.log('订阅消息总开关是开');
          if (res.subscriptionsSetting.itemSettings) {
            if (res.subscriptionsSetting.itemSettings['_il9WfEcq4i50qTh0ljPVgqcTNXRNAUOQEqVO_wCkl4'] == 'accept') {
              console.log('勾选了不再询问并且允许');
            } else if (res.subscriptionsSetting.itemSettings['_il9WfEcq4i50qTh0ljPVgqcTNXRNAUOQEqVO_wCkl4'] == 'reject') {
              console.log('勾选了不再询问并且取消')
            }
          } else {
            console.log('未勾选不再询问');
          }
        } else {
          console.log('订阅消息总开关是关');
        }        
      }
    })
    // wx.requestSubscribeMessage({
    //   tmplIds: ['_il9WfEcq4i50qTh0ljPVgqcTNXRNAUOQEqVO_wCkl4'],
    //   success: res => {
    //     if (res['_il9WfEcq4i50qTh0ljPVgqcTNXRNAUOQEqVO_wCkl4'] === 'accept') {
    //       wx.showToast({
    //         title: '订阅ok2',
    //         duration: 1000
    //       })
    //     }
    //   },
    //   fail(err) {
    //     wx.showToast({
    //       title: '拒绝2',
    //       duration: 1200
    //     })
    //     alert(err);
    //   }
    // })
  },
  // X5pUjaOvBmDHx8zkWrGuahhssNoJDKirZlpm72vx7gw
  handleTest1: tool.throttle( function () {
    wx.getSetting({
      withSubscriptions: true,
      success: (res) => {
        console.log('res', res)
        if (res.subscriptionsSetting) {
          if (res.subscriptionsSetting.mainSwitch) {
            if (res.subscriptionsSetting.itemSettings) {
              if (res.subscriptionsSetting.itemSettings['X5pUjaOvBmDHx8zkWrGuahhssNoJDKirZlpm72vx7gw'] === 'accept') {
                // console.log('始终接受')
                wx.showToast({
                  title: '始终接受',
                  icon: 'none',
                  duration: 2000
                })
              } else if (res.subscriptionsSetting.itemSettings['X5pUjaOvBmDHx8zkWrGuahhssNoJDKirZlpm72vx7gw'] === 'reject') {
                // console.log('始终拒绝')
                wx.showToast({
                  title: '始终拒绝',
                  icon: 'none',
                  duration: 2000
                })
              }
            }    
          }
          else {
            // console.log('总开关为关')
            wx.showToast({
              title: '总开关为关',
              icon: 'none',
              duration: 2000
            })
          }
        }
      }
    })
    wx.requestSubscribeMessage({
      tmplIds: ["X5pUjaOvBmDHx8zkWrGuahhssNoJDKirZlpm72vx7gw"],
      success: (res) => {
        if (res['X5pUjaOvBmDHx8zkWrGuahhssNoJDKirZlpm72vx7gw'] === 'accept'){
          wx.showToast({
            title: '订阅OK!',
            duration: 1200,
          })
        }
      },
      fail(err) {
        wx.showToast({
          title: '拒绝订阅',
          duration: 1200
        })
        console.error(err);
      }
    })
  }, 1000),
  // handleMandate5: 
  // tool.throttle(function () {
  //     console.log(199999);
  //     wx.requestSubscribeMessage({
  //       tmplIds: ["tMRTZ5M_vYtvLoAtvFOcOtPZRe3n3yJ6ajbEoR8m4ME"],
  //       success: (res) => {
  //         if (res['tMRTZ5M_vYtvLoAtvFOcOtPZRe3n3yJ6ajbEoR8m4ME'] === 'accept'){
  //           wx.showToast({
  //             title: '订阅OK!',
  //             duration: 1200,
  //           })
  //         }
  //       },
  //       fail(err) {
  //         wx.showToast({
  //           title: '拒绝订阅',
  //           duration: 1200
  //         })
  //         console.error(err);
  //       }
  //     })
  //   }, 1000),
  handleMandate5: function (res) {
    wx.getSetting({
      withSubscriptions: true,
      success: res => {
        if (res.subscriptionsSetting.mainSwitch) {
          console.log('订阅消息总开关是开');
          if (res.subscriptionsSetting.itemSettings) {
            if (res.subscriptionsSetting.itemSettings['tMRTZ5M_vYtvLoAtvFOcOtPZRe3n3yJ6ajbEoR8m4ME'] == 'accept') {
              console.log('勾选了不再询问并且允许');
            } else if (res.subscriptionsSetting.itemSettings['tMRTZ5M_vYtvLoAtvFOcOtPZRe3n3yJ6ajbEoR8m4ME'] == 'reject') {
              console.log('勾选了不再询问并且取消')
            }
          } else {
            console.log('未勾选不再询问');
          }
        } else {
          console.log('订阅消息总开关是关');
        }        
      }
    })},
  handleGetSetting: function () {
    wx.getSetting({
      withSubscriptions: true,
      success (res) {
        console.log('res', res);
        // console.log(res.authSetting);
      }
    })
  },
  handleOpenSetting: function () {
    wx.openSetting({
      success (res) {
        console.log(res.authSetting)
        // res.authSetting = {
        //   "scope.userInfo": true,
        //   "scope.userLocation": true
        // }
      }
    })
  },
  handleSendMsg: function () {

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.openSetting({
      success (res) {
        console.log(res.authSetting)
        // res.authSetting = {
        //   "scope.userInfo": true,
        //   "scope.userLocation": true
        // }
      }
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
    console.log(111)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})