Page({
  data: {
    isShow: false, //控制收起展开
    isShow2: false, //控制收起展开
  },
  /*
  * isShow做取反操作
  * */
  toChange: function() {
      let that = this;
      that.setData({
          isShow: !that.data.isShow
      })
  }
})