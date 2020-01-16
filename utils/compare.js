// 可以比较三个数字的版本号，例如：当ver2使用7.0.5时，如果获取到的版本信息ver1大于7.0.5时，返回true
// params ver1 （string）:获取到的版本号信息例如：sys.version
// params ver2 （string）:参考版本号，例如7.0.5
// 当需要判断版本大于等于7.0.5时，如下调用
// judgeV(sys.version, '7.0.5')
export const judgeV = function (ver1, ver2) {
    const version1pre = parseFloat(ver1)
    const version2pre = parseFloat(ver2)
    const version1next = ver1.replace(version1pre + '.', '')
    const version2next = ver2.replace(version2pre + '.', '')
    if (version1pre > version2pre) {
      return true
    } else if (version1pre < version2pre) {
      return false
    } else {
      if (version1next >= version2next) {
        return true
      } else {
        return false
      }
    }
  }