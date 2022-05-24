// noinspection JSUnresolvedFunction

import { every, occurs, on } from '../services/occurrence'

expect.extend({
	toOccur(received, date) {
		return {
			message: () => `expected occurrence to occur on ${date}`,
			pass: occurs(date, received)
		}
	}
})

const yesterday = new Date(2022, 4, 1)
const today = new Date(2022, 4, 2)
const tomorrow = new Date(2022, 4, 3)

test('occurs on', () => {
	const occurrence = on(today)

	expect(occurrence).toOccur(today)
	expect(occurrence).not.toOccur(tomorrow)
	expect(occurrence).not.toOccur(yesterday)
})

test('occurs every day', () => {
	const recurrence = every({ frequency: 'days' })

	expect(recurrence).toOccur(today)
	expect(recurrence).toOccur(tomorrow)
	expect(recurrence).toOccur(yesterday)
})

test('occurs every workday since today', () => {
	const recurrence = every({ frequency: 'workdays', since: today })

	expect(recurrence).not.toOccur(yesterday)
	expect(recurrence).toOccur(today)
	expect(recurrence).toOccur(tomorrow)
})

test('occurs every 1st of the month', () => {
	const recurrence = every({ on: { 'day of the month': 1 }})

	expect(recurrence).toOccur(yesterday)
	expect(recurrence).not.toOccur(today)
	expect(recurrence).not.toOccur(tomorrow)
})
