import { useEffect, useState } from "react"

import { SingleMovie } from "@typings/globalTypes"

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
