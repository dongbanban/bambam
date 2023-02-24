/*
 * @FilePath: /Users/i104/vite3/src/utils/day/plugin.js
 * @author: dongyang(yang.dong@derbysoft.net)
 */
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat'
import relativeTime from 'dayjs/plugin/relativeTime';
import quarterOfYear from 'dayjs/plugin/quarterOfYear'
import dayOfYear from 'dayjs/plugin/dayOfYear'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import weekYear from 'dayjs/plugin/weekYear'
import isBetween from 'dayjs/plugin/isBetween'
import isLeapYear from 'dayjs/plugin/isLeapYear'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'

Array.of(
    customParseFormat,
    relativeTime,
    quarterOfYear,
    dayOfYear,
    weekOfYear,
    weekYear,
    isBetween,
    isLeapYear,
    isSameOrBefore,
    isSameOrAfter
).forEach(item => dayjs.extend(item))