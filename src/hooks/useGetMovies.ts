import { useState, useEffect } from "react"

type MoviesProps = {
  imdbID: string
  Title: string
  Year: string
  Poster: string
}

export function useGetMovies(query: string) {
  const [movies, setMovies] = useState<MoviesProps[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState("")

  useEffect(() => {
    async function fetchMovies() {
      if (!query) {
        setMovies([])
        return
      }

      setIsError("")
      setIsLoading(true)

      try {
        const res = await fetch(`/api/getMovies?q=${query}`)

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
  }, [query])

  return { movies, isLoading, isError }
}
