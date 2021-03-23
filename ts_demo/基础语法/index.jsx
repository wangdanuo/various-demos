import React, { Component } from 'react'
import { View, Image, Text, ScrollView } from '@tarojs/components'
import classNames from 'classNames'
// import Taro from '@tarojs/taro'
import './index.less'

export default class List extends Component {
  constructor (props) {
    super(props)
    this.state = {
      listData: [],
      unFold: false
    }
  }
  componentDidMount () {}
  changeFold = () => {
    this.setState({
      unFold: !this.state.unFold
    })
  }
  render () {
    const { listData, unFold } = this.state
    return (
      <View className={classNames({"list-main": true, "list-main-un": unFold})}>
        <View className="list-wrap">
          <Image className="list-img" src="https://img.souche.com/f2e/ad39eea3af365eec0b4008179cc746f1.png" />
          <Text className="list-word">任务列表</Text>
          <View className="c-icon-error, list-icon" />
          <View className="list-total">
            <Text className="list-total-txt">每完成10次任务</Text>
            <View className="list-total-left">+1000里程</View>
            <View className="list-total-right">2/10</View>
          </View>
          <ScrollView className="list-scroll" scrollY="true">
            <View className="list-item">
              <Image className="list-item-l" />
              <View className="list-item-m">
                <Text className="item-m-name">分享小程序</Text>
                <Text className="item-m-num">+2000里程</Text>
                <View className="item-m-detail">发送给好友，好友列表唤起2秒</View>
              </View>
              <View className="list-item-r">去领取吧</View>
            </View>
            {
              listData.map((item, index) => {
                return (
                  <View className="list-item">

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
