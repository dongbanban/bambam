/*
 * @FilePath: /Users/i104/vite3/src/utils/day/index.js
 * @author: dongyang(yang.dong@derbysoft.net)
 */
import dayjs from 'dayjs'; // 引入dayjs插件
import 'dayjs/locale/zh-cn'; // 引入中文语言包   默认英文语言包
import './plugin'

dayjs.locale('zh-cn')
const defaultFormat = 'YYYY-MM-DD'

/**
 * @description:  获取距离date的相对时间,date为空则返回距离现在的相对时间
 * @param {*} date
 * @param {*} withoutSuffix
 * @return {*}
 */
const getRelativeByTo = (date, withoutSuffix = false) => !date ? dayjs().toNow() : dayjs().to(dayjs(date), withoutSuffix)

/**
 * @description:  获取到date的相对时间,date为空则返回到现在的相对时间
 * @param {*} date
 * @param {*} withoutSuffix
 * @return {*}
 */
const getRelativeByFrom = (date, withoutSuffix = false) => !date ? dayjs().from() : dayjs().from(dayjs(date), withoutSuffix)

/**
 * @description: 获取date是当年的第几天
 * @param {*} date
 * @param {*} number
 * @param {*} format
 * @return {*}
 */
const getDayOfYear = date => dayjs(date).dayOfYear()

/**
 * @description: 返回date对应年份的第number天的格式化
 * @param {*} date
 * @param {*} number
 * @param {*} format
 * @return {*}
 */
const setDayOfYear = (date, number, format = defaultFormat) => dayjs(date).dayOfYear(number).format(format)

/**
 * @description: 获取date处于当年的第几周
 * @param {*} date
 * @return {*}
 */
const getWeekOfYear = date => dayjs(date).week()

/**
 * @description: 返回date对应年份的第number周的同一天，如date为周三，返回的则是周三对应的日期格式化
 * @param {*} date
 * @param {*} number
 * @param {*} format
 * @return {*}
 */
const setWeekOfYear = (date, number, format = defaultFormat) => dayjs(date).week(number).format(format)

/**
 * @description: 获取时间差,默认单位为d
 * @param {*} date1
 * @param {*} date2
 * @param {*} unit
 * @param {*} strict
 * @return {*}
 */
const getDiff = (date1, date2, unit = 'd', strict = false) => dayjs(date1).diff(date2, unit, strict)

/**
 * @description: 获取date所在月份的总天数
 * @param {*} date
 * @return {*}
 */
const getDaysInMonth = date => dayjs(date).daysInMonth()

/**
 * @description: 获取date所在的自然时间范围，默认为w
 * @param {*} date
 * @return {*}
 */
const getNaturalRange = (date, unit = 'w', format = defaultFormat) => [dayjs(date).startOf(unit).format(format), dayjs().endOf(unit).format(format)]

/**
 * @description: 获取date指定diff的日期格式化，默认为d
 * @param {*} date
 * @param {*} diff
 * @param {*} unit
 * @param {*} format
 * @return {*}
 */
const getDateByDiff = (date, diff, unit = 'd', format = defaultFormat) => diff > 0 ? dayjs(date).add(diff, unit).format(format) : dayjs(date).subtract(0 - diff, unit).format(format)

/** 
 * @description: 判断date在不在range范围内，默认为d，闭区间
 * @param {*} date
 * @param {*} range
 * @param {*} unit
 * @param {*} boundary
 * @return {*}
 */
const isInRange = (date, range, unit = 'd', boundary = '[]') => dayjs(date).isBetween(dayjs(range[0]), dayjs(range[1]), unit, boundary)

/**
 * @description: 判断date所在年份是否是闰年
 * @param {*} date
 * @return {*}
 */
const isLeapYear = date => dayjs(date).isLeapYear()

export {
    getRelativeByTo,
    getRelativeByFrom,
    getDayOfYear,
    setDayOfYear,
    getWeekOfYear,
    setWeekOfYear,
    getDiff,
    getDaysInMonth,
    getNaturalRange,
    getDateByDiff,
    isInRange,
    isLeapYear
}