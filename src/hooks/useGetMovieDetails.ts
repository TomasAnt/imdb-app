import { useEffect, useState } from "react"

import { SingleMovie } from "@typings/globalTypes"

/**
 * useGetMovieDetails Hook
 *
 * This custom hook fetches detailed information about a specific movie based on its ID.
 *
 * Local States:
 * @property {SingleMovie | null} movie - Local state for storing the fetched movie details.
 * @property {boolean} isLoading - Local state indicating whether the fetching is in progress.
 *
 * @param {string} selectedId - The ID of the movie for which details need to be fetched.
 *
 * Functions:
 * - fetchDetails(): Asynchronous function that performs the API call to fetch movie details based on the selectedId.
 *     - Handles loading state.
 *     - Updates the movie and isLoading states.
 *
 * Side Effects:
 * - useEffect: Initiates the fetchDetails function when selectedId changes.
 *     - Only runs the fetch if selectedId is present.
 *
 * @returns {Object} - The object containing:
 *     - movie: The fetched movie details or null if not fetched.
 *     - isLoading: A boolean indicating the loading state.
 */

export function useGetMovieDetails(selectedId: string) {
  const [movie, setMovie] = useState<SingleMovie | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function fetchDetails() {
      setIsLoading(true)
      try {
        const res = await fetch(`/api/getMovieDetails?i=${selectedId}`)
        const data = await res.json()
        setMovie(data)
      } catch (error) {
        console.error("Failed to fetch movie details:", error)
      } finally {
        setIsLoading(false)
      }
    }

    if (selectedId) {
      fetchDetails()
    }
  }, [selectedId])

  return { movie, isLoading }
}
