import { eachDayOfInterval, startOfMonth, endOfMonth } from 'date-fns'

import { useMemo } from 'react'

/**
 * Return an array of dates in the month of the given date
 * @param {Date} of - the date to get the month of
 * @returns {Date[]} an array of dates
 */
export default function useMonth(of) {
	return useMemo(() => eachDayOfInterval({
		start: startOfMonth(of),
		end: endOfMonth(of)
	 }), [of])
}
