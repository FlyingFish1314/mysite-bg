/**
 * 根据当前时间返回对应的一天中的时段
 * @returns 当前时段
 */
export function getTimeStateStr() {
  const timeNow = new Date()
  const hours = timeNow.getHours()
  if (hours >= 6 && hours <= 10) return `早上好`
  if (hours >= 10 && hours <= 14) return `中午好`
  if (hours >= 14 && hours <= 18) return `下午好`
  if (hours >= 18 && hours <= 24) return `晚上好`
  if (hours >= 0 && hours <= 6) return `凌晨好`
}
