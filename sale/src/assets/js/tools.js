// import Vue from 'vue'

/**
 * 时间格式化
 * @author wfyuan 2018-9-7
 * @param datetime
 * @param fmt 格式化规则，yyyy-MM-dd hh:mm:ss
 * @returns {*}
 */
export const dateFormat = function (datetime, fmt) {
  var date = new Date(datetime * 1000)
  var o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
  }
  return fmt
}

/**
 * 测试方法
 * @author wfyuan 2018-9-7
 */
export const testMethod = function () {
  console.log(123445)
}
