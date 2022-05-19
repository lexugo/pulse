import {
	differenceInBusinessDays,
	differenceInCalendarDays,
	differenceInCalendarMonths,
	differenceInCalendarWeeks,
	differenceInCalendarYears,
	getDate,
	getDay,
	getDayOfYear,
	getWeekOfMonth,
	getWeek,
	getMonth,
	getYear,
	isWeekend,
	addDays, addMonths, addYears,
} from 'date-fns'

export const differenceIn = {
	workdays: differenceInBusinessDays,
	days: differenceInCalendarDays,
	weeks: differenceInCalendarWeeks,
	months: differenceInCalendarMonths,
	years: differenceInCalendarYears
}

export const get = {
	'day of the week': getDay,
	'day of the month': getDate,
	'day of the year': getDayOfYear,

	'week of the month': getWeekOfMonth,
	'week of the year': getWeek,

	'month of the year': getMonth,
	month: getMonth,

	year: getYear
}

export const is = {
	weekend: isWeekend,
}

export const add = {
	'days': addDays,
	'months': addMonths,
	'years': addYears
}
