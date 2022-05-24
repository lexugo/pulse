import { memoized } from 'neon'
import { format, eachMonthOfInterval } from 'date-fns'

// Export services
export { format } from 'date-fns'
export * from './services/date'
export * from './services/frequency'
export * from './services/occurrence'

// Export hooks
export { default as useMonth } from './hooks/useMonth'
export const useFormat = memoized(format)
export const useMonths = memoized(eachMonthOfInterval)
export { default as useInterval } from './hooks/useInterval'
