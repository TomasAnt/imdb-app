import { useState, useEffect } from "react"

import { SingleMovie } from "@typings/globalTypes"

/**
 * useGetMovies Hook
 *
 * This custom hook fetches movies based on the provided search query.
 *
 * Local States:
 * @property {Array<SingleMovie>} movies - Local state for storing the array of fetched movie objects.
 * @property {boolean} isLoading - Local state indicating whether the fetching is in progress.
 * @property {string} isError - Local state for storing an error message, if any, while fetching data.
 *
 * @param {string} query - The search query used for fetching movies.
 *
 * Functions:
 * - fetchMovies(): Asynchronous function that performs the API call to fetch movies based on the query.
 *     - Handles loading state and errors.
 *     - Updates the movies, isLoading, and isError states.
 *
 * Side Effects:
 * - useEffect: Initiates the fetchMovies function when the query changes.
 *     - Includes abort functionality for clean up.
 *
 * @returns {Object} - The object containing:
 *     - movies: The array of fetched movies.
 *     - isLoading: A boolean indicating the loading state.
 *     - isError: A string containing any error message.
 */

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
