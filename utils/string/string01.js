// 解析url，获取参数对象
export function getRequest (uri) {
    if (!uri) {
      return {}
    }
    var num = uri.indexOf('?')
    var str = uri.substr(num + 1)
    if (!str) {
      return {}
    }
    var theRequest = {}
    var strs = str.split('&')
    for (var i = 0; i < strs.length; i++) {
      theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1])
    }
    return theRequest
  }
//   隐藏部分手机号码
  export function encryptedPhone (phone) {
    if (!phone) {
      return ''
    }
    return phone.substr(0, 3) + '***' + phone.substr(7)
  }
// 对数字进行四舍五入到“指定位数”
  export function toFixed (num, w = 5) {
    return Number(num).toFixed(w)
  }

//   对数字进行取万操作
  export function computeCnt (num) {
    var result = parseInt(num)
    if (isNaN(result)) {
      return 0
    }
    const w = Math.round(result * 10) / 10
    if (w < 10000) {
      return w
    }
    if (w > 10000) {
      return w + '万'
    }
  }
  
    