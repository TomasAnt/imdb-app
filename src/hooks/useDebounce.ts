import { useEffect, useState } from "react"

/**
 * useDebounce Hook
 *
 * Debounces a given value based on a specified delay time.
 *
 * @param {string} value - The value to debounce.
 * @param {number} delay - The delay time in milliseconds.
 *
 * @returns {string} debouncedValue - The debounced value.
 */

export const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}
