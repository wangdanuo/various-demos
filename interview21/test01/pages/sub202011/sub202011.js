// pages/sub202011/sub202011.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tplId01: 'tMRTZ5M_vYtvLoAtvFOcOgBGnF97z20wxkhn-1QN8EU', // 新上架画稿提醒
    loadingShow: true,
    dataArr: ['11111', '222222', '33333', '55555']
  },
  clickBtn: function (code) {
    console.log('clickBtn', code)
  },
  onClickImg: function () {
    this.setData({
      loadingShow: !this.data.loadingShow
    })
  },
  
  handleSub01: function () {
    const { tplId01 } = this.data;
    wx.requestSubscribeMessage({
      tmplIds: [tplId01],
      success: res => {
        // console.log('点击订阅res', res);
        if (res[tplId01] === 'accept') {
          wx.showToast({
            title: '订阅成功',
            duration: 2200
          })
          this.toGetSetting()
        } else {
          wx.showToast({
            title: '拒绝订阅',
            duration: 2200
          })          
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  toGetSetting: function () {
    wx.getSetting({
      withSubscriptions: true,
      success: (res) => {
        // console.log('查询状态res', res);
        if (res.subscriptionsSetting) {
          if (res.subscriptionsSetting.mainSwitch) {
            // console.log('订阅消息总开关为开');
            if (res.subscriptionsSetting.itemSettings) {
              if (res.subscriptionsSetting.itemSettings['tMRTZ5M_vYtvLoAtvFOcOgBGnF97z20wxkhn-1QN8EU'] === 'accept') {
                wx.showToast({
                  title: '当前为始终接受',
                  icon: 'none',
                  duration: 2000
                })
              } else if (res.subscriptionsSetting.itemSettings['tMRTZ5M_vYtvLoAtvFOcOgBGnF97z20wxkhn-1QN8EU'] === 'reject') {
                wx.showToast({
                  title: '当前为始终拒绝',
                  icon: 'none',
                  duration: 2000
                })
              }
            } else {
              console.log('没有该属性')
            }
          } else {
            console.log('订阅消息总开关为关')
          }
        }
      }
    })
  },
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})