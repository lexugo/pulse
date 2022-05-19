import { memoized } from 'neon'
import { format, eachMonthOfInterval } from 'date-fns'

// Export hooks
export { default as useFormat } from './hooks/useFormat'
export { default as useMonth } from './hooks/useMonth'
export const useFormat = memoized(format)
export const useMonths = memoized(eachMonthOfInterval)
