import React from 'react'
import './demo01.css'

const DigitalScroll = (props) => {

  const { height = 80 } = props

  const numberList = `${props.numbers || 0}`.split('')

  return (
    <div className="c-digital-scroll">
      {numberList.map((number, index) => {
        return <NumberBox key={index} number={number} height={height / 2} />
      })}
    </div>
  )
}

const arr = new Array(10).fill(0)

const NumberBox = (props) => {
  const { height = 80, number = 2200 } = props

  const boxStyle = React.useMemo(() => {
    return {
      height: `${height}PX`,
      transform: [`translateY(${-number * height}PX)`],
      transitionDuration: `${Math.random() + 0.3}s`
    }
  }, [height, number])

  const containerStyle = React.useMemo(() => {
    return {
      height: `${height}PX`,
      lineHeight: `${height}PX`
    }
  }, [height])

  return (
    <div className="box-container" style={containerStyle}>
      <div className="box" style={boxStyle}>
        {arr.map((i, index) => {
          return (
            <div key={index} className="number" style={containerStyle}>{index}</div>
          )
        })}
      </div>
    </div>
  )
}

export default DigitalScroll