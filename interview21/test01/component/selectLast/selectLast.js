// component/selectLast/selectLast.js
Component({
  properties: {
    arrayData: {
      type: Array
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
    isListShow: false, // 初始option不显示
    currentText: "全部类型", // 初始内容
    animationData: {}, // 动画
  },

  methods: {
    onTypeChange : function () {
      var show = this.data.isListShow;
      var action = wx.createAnimation({
        timingFunction: "ease",
      });
      this.action = action;
      if (show) {
        action.rotate(0).step();
        this.setData({
          animationData: action.export()
        })
      } else {
        action.rotate(180).step();
        this.setData({
          animationData: action.export()
        })
      }
      this.setData({
        isListShow: !show
      })
    },
    setText: function (e) {
      var currentData  = this.properties.arrayData;
      var currentIdx = e.target.dataset.index;
      var currentTxt = currentData[currentIdx].txt;
      this.action.rotate(0).step();
      this.setData({
        isListShow: false,
        currentText: currentTxt,
        animationData: this.action.export()
      })
    },    
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