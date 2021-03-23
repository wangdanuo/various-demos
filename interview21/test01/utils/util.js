const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
function throttle (fn, delay = 1000) {
  let prev = Date.now()
  return (...args) => {
    const now = Date.now()
    if (now - prev >= delay) {
      fn(...args)
      prev = Date.now()
    }
  }
}
module.exports = {
  formatTime: formatTime,
  throttle
}
