/*
 * @FilePath: /Users/i104/vite3/src/views/dayjsDemo.jsx
 * @author: dongyang(yang.dong@derbysoft.net)
 */

import React from 'react'
import { Space } from 'antd'
import {
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
} from 'utils/day'
const DayjsDemo = () => {
    console.log('getRelativeByFrom', getRelativeByFrom())
    console.log('getRelativeByTo', getRelativeByTo('2024-02-22'))
    console.log('getDayOfYear', getDayOfYear('2023-01-10'))
    console.log('setDayOfYear', setDayOfYear(undefined, 365))
    console.log('getWeekOfYear', getWeekOfYear(11))
    console.log('setWeekOfYear', setWeekOfYear(undefined, 1))
    console.log('getDiff', getDiff('2023-02-10', '2023-02-13'))
    console.log('getDaysInMonth', getDaysInMonth('2023-02-10'))
    console.log('getNaturalRange', getNaturalRange(undefined, 'w'))
    console.log('getDateByDiff', getDateByDiff(undefined, -7))
    console.log('isInRange', isInRange('2023-02-10', ['2023-01-03', '2023-03-10']))
    console.log('isLeapYear', isLeapYear())
    return (
        <Space>
            dayjs demo
        </Space>
    )
}

export default DayjsDemo
