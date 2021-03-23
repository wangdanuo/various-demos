Page({
  data: {},
  /*** 生命周期函数--监听页面加载*/
  onLoad: function() {},
  jump () {
    console.log('jump')
    wx.redirectTo({
      url: '/pages/test07/test07?code=111&userId=1'
    })
  }
})