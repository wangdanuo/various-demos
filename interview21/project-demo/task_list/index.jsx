import React, { Component } from 'react'
import { View, Image, Text, ScrollView, Button } from '@tarojs/components'
import classNames from 'classNames'
import { getTaskList, finishTask } from '@/api/task'
import { getPlatformToken } from '@/utils'
import Taro from '@tarojs/taro'
import { throttle } from '@/utils'
import './index.less'

var timeRecord = 0
const tplIdArr = [
  'nfLeouUUZNMMbkDwUCNfrREZ9tq9Ymiy3pN_Aa0RY10',  // 积分兑换通知
  '860p2cmxwyuX9p-7CKpkMncBbaI4dZETbr1QQ_6r7a8',  // 充值成功提醒
  '7IQ2Opp3ZPuludV-merzVxAS_EJb1NMF6u6HwEd5fwQ'   // 购买成功通知
]
export default class List extends Component {
  constructor (props) {
    super(props)
    this.state = {
      listData: {},
      unFold: false,
      touchX: 0,
      touchY: 0,
      fromFriends: false,
      timer: null,
      // todo
      // list1: [
      //   {
      //     description: "绑定第二辆车送积分55",
      //     icon: "https://souche-devqa.oss-cn-hangzhou.aliyuncs.com/20201112/jpg/c83eb0b5a1e291c0b81c9cc536e02c6a.jpg",
      //     id: "1",
      //     period: 2,
      //     score: 40055,
      //     status: 0,
      //     taskCode: "SEND_FRIEND",
      //     taskName: "绑定第二辆车"
      //   },
      //   {
      //     description: "绑定第二辆车送积分55",
      //     icon: "https://souche-devqa.oss-cn-hangzhou.aliyuncs.com/20201112/jpg/c83eb0b5a1e291c0b81c9cc536e02c6a.jpg",
      //     id: "2",
      //     period: 2,
      //     score: 40055,
      //     status: 1,
      //     taskCode: "ADD_CAR_MESSAGE",
      //     taskName: "绑定第二辆车55"
      //   },
      //   {
      //     description: "绑定第二辆车送积分55",
      //     icon: "https://souche-devqa.oss-cn-hangzhou.aliyuncs.com/20201112/jpg/c83eb0b5a1e291c0b81c9cc536e02c6a.jpg",
      //     id: "1",
      //     period: 3,
      //     score: 40055,
      //     status: 0,
      //     taskCode: "ADD_CAR_MESSAGE",
      //     taskName: "绑定第二辆车55"
      //   },
      //   {
      //     description: "绑定第二辆车送积分55",
      //     icon: "https://souche-devqa.oss-cn-hangzhou.aliyuncs.com/20201112/jpg/c83eb0b5a1e291c0b81c9cc536e02c6a.jpg",
      //     id: "1",
      //     period: 4,
      //     score: 40055,
      //     status: 0,
      //     taskCode: "ADD_CAR_MESSAGE",
      //     taskName: "绑定第二辆车55"
      //   },
      //   {
      //     description: "绑定第二辆车送积分55",
      //     icon: "https://souche-devqa.oss-cn-hangzhou.aliyuncs.com/20201112/jpg/c83eb0b5a1e291c0b81c9cc536e02c6a.jpg",
      //     id: "1",
      //     period: 1,
      //     score: 40055,
      //     status: 0,
      //     taskCode: "ADD_CAR_MESSAGE",
      //     taskName: "绑定第二辆车55"
      //   },
      //   {
      //     description: "绑定第二辆车送积分55",
      //     icon: "https://souche-devqa.oss-cn-hangzhou.aliyuncs.com/20201112/jpg/c83eb0b5a1e291c0b81c9cc536e02c6a.jpg",
      //     id: "1",
      //     period: 1,
      //     score: 40055,
      //     status: 0,
      //     taskCode: "ADD_CAR_MESSAGE",
      //     taskName: "绑定第二辆车55"
      //   },
      // ]
    }
  }
  componentDidMount () {
    getTaskList().then(({ data = {} }) => {
      this.setState({ listData: data })
    })
  }
  componentDidShow () {
    if (this.state.fromFriends) {
      if (timeRecord > 2) {
        finishTask('SEND_FRIEND')
      }
      clearInterval(this.state.timer)
    }
  }
  componentDidHide () {
    if (this.state.fromFriends) {
      this.setState({
        timer: setInterval(() => {
          timeRecord++
        }, 1000)
      })
    }
  }
  changeFold = () => {
    this.setState({ unFold: !this.state.unFold })
  }
  touchStart = ({ changedTouches: c }) => {
    this.setState({
      touchX: c[0].clientX,
      touchY: c[0].clientY
    })
  }
  touchEnd = ({ changedTouches: c }) => {
    if (c[0].clientY - this.state.touchY < -50 && Math.abs(c[0].clientX - this.state.touchX) < 50) {
      this.setState({ unFold: !this.state.unFold })
    }
  }
  extSourceOpen = (data) => {
    const [cztaskcode, czwtoken, useUrl, flag = ''] = data
    Taro.navigateTo({
      url: `/pages/webview/index?h5UrlOrigin=${encodeURIComponent(`${useUrl}&czwtoken=${czwtoken}&cztaskcode=${cztaskcode}`)}${flag && `&browse=yes&cztaskcode=${cztaskcode}`}`
    })
  }
  handleTaskBtn = (code, status) => {
    if (status === 1) return
    switch (code) {
      case 'ADD_CAR_MESSAGE': // 1、首次添加车辆
        break
      case 'BIND_PHONE': // 2、绑定手机号
        break
      case 'OPEN_MESSAGE_REMIND': // 3、始终订阅消息
        this.handleSubscription('OPEN_MESSAGE_REMIND')
        break
      case 'FIND_BREAK_RULE': // 4、查询违章记录
        break 
      case 'ESTIMATE_MODEL_LEAVE_DATA': // 5、二手车估价留资
        this.extSourceOpen(['ESTIMATE_MODEL_LEAVE_DATA', getPlatformToken(), 'https://cargz.24che.com/index?spm=400516.238085.9218.61835.1248424.1.13678932'])
        break
      case 'NEW_CARS_MODEL_LEAVE_DATA': // 6、新车查低价留资
        this.extSourceOpen(['NEW_CARS_MODEL_LEAVE_DATA', getPlatformToken(), 'https://makt.24che.com/new_car_inquiry/index?spm=400516.238085.9218.61835.2036044.1.13678930'])
        break
      case 'CLICK_QUESTIONS_LEAVE_DATA':// 7、选车宝留资
        this.extSourceOpen(['CLICK_QUESTIONS_LEAVE_DATA', getPlatformToken(), 'https://cartj.24che.com/pages/choose-car/index?spm=400516.238085.9218.61835.2036045.1.13678931'])
        break
      case 'PAGE_LEAVE_DATA': // 8、砍价师页面留资
        this.extSourceOpen(['PAGE_LEAVE_DATA', getPlatformToken(), 'https://makt.souche.com/activity/CP4YPi0PMB?spm=400516.238085.9218.61835.2036043.1.13678928'])
        break
      case 'PURCHASE_PRIZE_CARD': // 9、购卡
        break
      case 'RECHARGE_ORDER':      // 10、油卡充值
        break
      case 'BROWSE_SECOND':       // 11、浏览分期购车
        this.extSourceOpen(['BROWSE_SECOND', getPlatformToken(), 'https://boc.24che.com/boc/dist/index.html', true])
        break
      case 'SEND_FRIEND':         // 12、分享小程序
        this.setState({ fromFriends: true })
        break
      case 'DOWNLOAD_OFFICIAL_ACCOUNTS': // 13、关注公众号
        this.handleConcern('DOWNLOAD_OFFICIAL_ACCOUNTS')
        break
      default:
        break
    }
  }
  handleTaskStatus = (period) => {
    switch (period) {
      case 1: return '已完成'
      case 2: return '下周再领'
      case 3: return '下月再领'
      default: break
    }
  }
  async handleConcern (code) {
    await Taro.previewImage({
      // todo
      urls: ['']
    })
    Taro.getSetting({
      withSubscriptions: false,
      success: (res) => {
        if (res.authSetting['scope.writePhotosAlbum'] === false) {
          Taro.showModal({
            title: '保存失败',
            content: '保存图片失败，请开启相册权限！',
            mask: true
          })
          return
        }
        Taro.downloadFile({
          // todo
          url: '',
          success: (res) => {
            Taro.saveImageToPhotosAlbum({
              filePath: res.tempFilePath,
              success: () => {
                Taro.showModal({
                  title: '保存成功',
                  mask: true,
                  content: '已将图片保存至相册！'
                })
                finishTask(code)
              }
            })
          }
        })
      }
    })
  }
  handleSubscription = throttle((code) => {
    Taro.requestSubscribeMessage({
      tmplIds: tplIdArr,
      success: function (res) {
        console.log(res)
        for (value of tplIdArr) {
          if (res[value] === 'reject') {
            Taro.showToast({
              content: '订阅失败'
            })
          }
          return
        }
        Taro.showToast({
          title: '订阅成功!',
          icon: 'success',
          duration: 2000
        })
      }
    })
  }, 1000)
  render () {
    const { listData, unFold } = this.state
    const list = listData.taskList || []
    const accum = listData.accumulate || {}
    return (
      <View className={classNames({ 'list-main': true, 'list-main-un': unFold })}>
        <View className="list-wrap">
          <View onTouchStart={this.touchStart} onTouchEnd={this.touchEnd}>
            <Image className="list-img" src="https://img.souche.com/f2e/ad39eea3af365eec0b4008179cc746f1.png" />
            <Text className="list-word">任务列表</Text>
            {unFold && <View onClick={this.changeFold} className="c-icon-error, list-icon" />}
            <View className="list-total">
              {/* todo */}
              <Text onClick={this.handleSubscription} className="list-total-txt">每完成10次任务</Text>
              <View className="list-total-left">+{accum.score}里程</View>
              <View className="list-total-right">{accum.finishTotal}/10</View>
            </View>
          </View>
          <ScrollView className="list-scroll" scrollY={list.length > 5 && 'true'}>
            {
              list.map(({ taskName, score, period, status, taskCode, icon, description }, idx) => {
                const btnTxt = this.handleTaskStatus(period)
                return (
                  <View className="list-item" key={idx}>
                    <Image src={icon} className="list-item-l" />
                    <View className="list-item-m">
                      <Text className="item-m-name">{taskName}</Text>
                      <Text className="item-m-num">+{score}里程</Text>
                      <View className="item-m-detail">{description}</View>
                    </View>
                    <Button
                      onClick={() => this.handleTaskBtn(taskCode, status)} 
                      openType={taskCode === 'SEND_FRIEND' ? "share" : ""}
                      className={classNames({ 'list-item-r': true, 'list-item-finish': status === 1 })}
                    >
                      {status === 1 ? btnTxt : '去领取'}
                    </Button>
                  </View>
                )
              })
            }
          </ScrollView>
        </View>
      </View>
    )
  }
}