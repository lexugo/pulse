import { isAfter, isBefore, isSameDay } from 'date-fns'

import { get, differenceIn, is } from './frequency'
import { birth } from './date'

// occurs(actual, either(on(expected), every(occurrence)), since(birth), until(tomorrow))
export const occurs = (date, ...occurrences) => occurrences.every(occursOn => occursOn(date))

export const either = (...occurrences) => actual => occurrences.some(occursOn => occursOn(actual))

/** Expect the actual date to be on the same as the occurrence */
export const on = occurrence =>  actual => isSameDay(occurrence, actual)

/** Expect the actual date to be before the occurrence */
export const before = occurrence => actual => isBefore(occurrence, actual)
export const until = occurrence => either(on(occurrence), before(occurrence))

export const after = occurrence => actual => isAfter(occurrence, actual)
export const since = occurrence => either(on(occurrence), after(occurrence))

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
