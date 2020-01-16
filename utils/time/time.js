  function formatNumber (n) {
    const str = n.toString()
    return str[1] ? str : `0${str}`
  }
  
  export function formatTime (date) {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
  
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
  
    const t1 = [year, month, day].map(formatNumber).join('/')
    const t2 = [hour, minute, second].map(formatNumber).join(':')
  
    return `${t1} ${t2}`
  }

  export function timestamps (date) {
    var time = new Date()
    if (date) {
      time = new Date(date)
    }
    return time.getTime()
  }

  // 字符串化时间 距离时间多久 传入时间戳 即 getTime()值
// 一分钟内 "现在" 一小时内"x分钟前" 1天内 "x小时前"
export function timeToString (now, before) {
    let diffTime = now - before
    if (diffTime < (60 * 1000)) {
      return '现在'
    } else if (diffTime < (3600 * 1000)) {
      let min = Math.floor(diffTime / (60 * 1000))
      return min + '分钟前'
    } else if (diffTime <= (24 * 3600 * 1000)) {
      let hour = Math.floor(diffTime / (3600 * 1000))
      return hour + '小时前'
    } else if (diffTime <= (30 * 24 * 3600 * 1000)) {
      let day = Math.floor(diffTime / (24 * 3600 * 1000))
      return day + '天前'
    } else {
      let mon = Math.floor(diffTime / (30 * 24 * 3600 * 1000))
      return mon + '个月前'
      // return formatTime(obj).slice(0, 16)
    }
  }
  