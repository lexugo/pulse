import { add } from '../services/frequency'

import { useState } from 'react'

export default function useInterval(defaultFrom, defaultTo) {
	const [start, setStart] = useState(defaultFrom)
	const [end, setEnd] = useState(defaultTo)

	function extend(direction = 'future', frequency = 'days', interval = 1) {
		if (direction === 'past')
			return setStart(start => add[frequency](start, -interval))
		if (direction === 'future')
			return setEnd(end =>  add[frequency](end, interval))

		throw new Error(`Cannot extend in ${direction}`)
	}

	return [{ start, end }, extend]
}
