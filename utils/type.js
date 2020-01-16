// 函数调用前校验格式
export function callback (func) {
    if (Object.prototype.toString.call(func) === '[object Function]') {
      func()
    }
  }
  