// 把0ff或者00ffff类型转换为rgba（0,255,255,0.1）
export function colorRgb (color) {
    let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/
    let sColor = color.toLowerCase()
    if (sColor && reg.test(sColor)) {
      if (sColor.length === 4) {
        let sColorNew = '#'
        for (let i = 1; i < 4; i += 1) {
          sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1))
        }
        sColor = sColorNew
      }
      // 处理六位的颜色值
      let sColorChange = []
      for (let i = 1; i < 7; i += 2) {
        sColorChange.push(parseInt('0x' + sColor.slice(i, i + 2)))
      }
      return 'RGBA(' + sColorChange.join(',') + ',0.1)'
    } else {
      return sColor
    }
  }
// 用途：获取数组中随机一项
export function getRefreshTips (t) {
    // 生成随机语录
    if (t.changeTips) {
      t.changeTips = false
      const tipsLen = pullTips.length
      const randomIndex = Math.floor(Math.random(0, 1) * tipsLen)
      t['refreshTips'] = pullTips[randomIndex]
    }
  }
  