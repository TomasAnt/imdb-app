import { useState, useEffect, SetStateAction, Dispatch } from "react"

export const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [T | null, Dispatch<SetStateAction<T | null>>, () => void, Error | null] => {
  const [storedValue, setStoredValue] = useState<T | null>(initialValue)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    try {
      if (typeof window === "undefined") return
      const item = window.localStorage.getItem(key)
      const value = item ? JSON.parse(item) : initialValue
      setStoredValue(value)
      setError(null)
    } catch (e) {
      setError(e as Error)
    }
  }, [key, initialValue])

  const setValue: Dispatch<SetStateAction<T | null>> = (value) => {
    try {
      setStoredValue(value)
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(value))
      }
      setError(null)
    } catch (e) {
      setError(e as Error)
    }
  }

  const removeItem = () => {
    try {
      setStoredValue(null)
      if (typeof window !== "undefined") {
        window.localStorage.removeItem(key)
      }
      setError(null)
    } catch (e) {
      setError(e as Error)
    }
  }

  return [storedValue, setValue, removeItem, error]
}
