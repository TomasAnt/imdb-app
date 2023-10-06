import { useState, useEffect } from "react"

import { SingleMovie } from "@typings/globalTypes"

export function useGetMovies(query: string) {
  const [movies, setMovies] = useState<SingleMovie[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState("")

  useEffect(() => {
    const controller = new AbortController()

    async function fetchMovies() {
      if (!query) {
        setMovies([])
        return
      }

      setIsError("")
      setIsLoading(true)

      try {
        const res = await fetch(`/api/getMovies?q=${query}`, {
          signal: controller.signal,
        })

        if (res.status === 404) {
          setIsError(`No results for movie: "${query}" found`)
          setMovies([])
          setIsLoading(false)
          return
        }

        if (!res.ok) {
          throw new Error(res.statusText)
        }

        const data = await res.json()
        if (data.Search) {
          setMovies(data.Search)
        } else {
          setIsError("No results found")
          setMovies([])
        }

        setIsLoading(false)
      } catch (error: unknown) {
        if (error instanceof Error) {
          setIsError(error.message)
        } else {
          setIsError("An unknown error occurred")
        }
        setMovies([])
        setIsLoading(false)
      }
    }

    fetchMovies()

    return () => {
      controller.abort()
    }
  }, [query])

  return { movies, isLoading, isError }
}
