// password RegExp
export const password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/

// username RegExp
export const phoneNum = /^1[34578]\d{9}$/

// 匹配身份证号
export const identifyId = /[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/

// 短信验证码
export const messageCode = /^\d{6}$/

// 姓名
export const name = /^[\u4e00-\u9fa5]+$/

// 车牌号
export const plateNumber = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/

// 汉字校验
export const name = /^[\u4e00-\u9fa5]{2,6}$/
export const nameReg = /^[\u4e00-\u9fa5]*$/