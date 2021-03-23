import React, { Component } from 'react'

var list111 = [
  {
    id: 1,
    taskName: '首次添加车辆',
    score: '1000',
    period: 1,
    status: 1,
    taskCode: 'ADD_CAR_MESSAGE',
    description: '首次添加车辆信息'
  },
  {
    id: 2,
    taskName: '绑定手机号',
    score: '1000',
    period: 2,
    status: 0,
    taskCode: 'BIND_PHONE',
    description: '成功绑定手机号'
  },
  {
    id: 3,
    taskName: '开启消息提醒',
    score: '1000',
    period: 3,
    status: 1,
    taskCode: 'OPEN_MESSAGE_REMIND',
    description: '开启消息提醒，始终允许三条模板'
  },
  {
    id: 4,
    taskName: '查询违章记录',
    score: '800',
    period: 2,
    status: 0,
    taskCode: 'FIND_BREAK_RULE',
    description: '查询违章记录'
  },
  {
    id: 5,
    taskName: '进行二手车估价',
    score: '200',
    period: 1,
    status: 0,
    taskCode: 'ESTIMATE_MODEL_LEAVE_DATA',
    description: '二手车估价'
  },
  {
    id: 6,
    taskName: '查询新车底价',
    score: '100',
    period: 1,
    status: 1,
    taskCode: 'NEW_CARS_MODEL_LEAVE_DATA',
    description: '查询新车底价并完成留资'
  },
  {
    id: 7,
    taskName: '分享小程序',
    score: '500',
    period: 3,
    status: 0,
    taskCode: 'SEND_FRIEND',
    description: '分享小程序给好友'
  },
  {
    id: 8,
    taskName: '关注公众号',
    score: '600',
    period: 3,
    status: 1,
    taskCode: 'DOWNLOAD_OFFICIAL_ACCOUNTS',
    description: '关注“大搜车”公众号'
  }
]

export default class task_list_mock extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
