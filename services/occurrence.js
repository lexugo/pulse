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
	isAfter,
	isBefore,
	isSameDay,
	isWeekend,
} from 'date-fns'

// occurs(actual, on(expected))
// occurs(actual, every(occurrence))
export const occurs = (date, occursOn) => occursOn(date)

export const on = occurrence =>  actual => isSameDay(occurrence, actual)

export const every = ({ interval = 1, frequency, on, since, until, except })  => {
	if (interval < 1) throw new Error('interval must be positive')
	if (!frequency && !on) throw new Error('either frequency or on must be defined')

	const offset = frequency && since ? differenceIn[frequency](since, birth) % interval : 0
	const exceptions = except?.map(exception => every(exception))

	return actual => {
		if (since && isBefore(actual, since)) return false
		if (until && isAfter(actual, until)) return false

		if (on && !Object.keys(on).every(unit => get[unit](actual) === on[unit])) return false

		if (frequency === 'workdays' && is.weekend(actual)) return false
		if (frequency && differenceIn[frequency](actual, since) % interval !== offset) return false

		if (exceptions && exceptions.some(exception => exception(actual))) return false

		return true
	}
}
