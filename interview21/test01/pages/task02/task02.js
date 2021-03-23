Page({
  data: {
    lastX: 0,
    lastY: 0,
    text : "没有滑动",
    currentGesture: 0,
  },
  // handletouchmove: function(event) {
  //   console.log(event)
  //   if (this.data.currentGesture != 0){
  //     return
  //   }
  //   let currentX = event.touches[0].pageX
  //   let currentY = event.touches[0].pageY
  //   let tx = currentX - this.data.lastX
  //   let ty = currentY - this.data.lastY
  //   let text = ""
  //   //左右方向滑动
  //   if (Math.abs(tx) > Math.abs(ty)) {
  //     if (tx < 0) {
  //       text = "向左滑动"
  //       this.data.currentGesture = 1
  //     }
  //     else if (tx > 0) {
  //       text = "向右滑动"
  //       this.data.currentGesture = 2
  //     }

  //   }
  //   //上下方向滑动
  //   else {
  //     if (ty < 0){
  //       text = "向上滑动"
  //       this.data.currentGesture = 3

  //     }
  //     else if (ty > 0) {
  //       text = "向下滑动"
  //       this.data.currentGesture = 4
  //     }

  //   }

  //   //将当前坐标进行保存以进行下一次计算
  //   this.data.lastX = currentX
  //   this.data.lastY = currentY
  //   this.setData({
  //     text : text,
  //   });
  // },

  // handletouchtart:function(event) { 
  //   console.log(event)
  //   this.data.lastX = event.touches[0].pageX
  //   this.data.lastY = event.touches[0].pageY
  // },
  // handletouchend:function(event) {
  //   console.log(event)
  //   this.data.currentGesture = 0
  //   this.setData({
  //     text : "没有滑动",
  //   });
  // },
  // 222222
  touchStart(e) {
    console.log(e)
    var that = this;
    that.setData({
      touchx: e.changedTouches[0].clientX,
      touchy: e.changedTouches[0].clientY
    })
  },
  touchEnd(e) {
    console.log(e)
    var that = this;
    let x = e.changedTouches[0].clientX;
    let y = e.changedTouches[0].clientY;
    let turn = "";
    if (x - that.data.touchx > 50 && Math.abs(y - that.data.touchy) < 50) {      //右滑
      turn = "right";
      console.log('右滑')
    } else if (x - that.data.touchx < -50 && Math.abs(y - that.data.touchy) < 50) {   //左滑
      turn = "left";
      console.log('左滑')
    }
    if(y - that.data.touchy > 50 && Math.abs(x - that.data.touchx) < 50){ //下滑
      turn = "down";
      console.log('下滑')
    }else if(y - that.data.touchy < -50 && Math.abs(x - that.data.touchx) < 50){ //上滑
      turn="up";
      console.log('上滑')
    }
    //根据方向进行操作
    if(turn == 'down'){
      //下滑触发操作
    }
  },
})