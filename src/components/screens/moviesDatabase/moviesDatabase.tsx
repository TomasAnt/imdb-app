import { useEffect, useState } from "react"

import Box from "@components/core/box"
import ErrorMessage from "@components/core/errorMessage/errorMessage"
import Loader from "@components/core/loader"
import Movies from "@components/core/movies"
import NumResults from "@components/core/numResults"
import Search from "@components/core/search"
import WatchedMovies from "@components/core/watchedMovies"
import WatchedSummary from "@components/core/watchedSummary"
import MovieDetails from "@components/layout/movieDetails"
import Navbar from "@components/layout/navbar"
import { useDebounce } from "@hooks/useDebounce"
import { useGetMovies } from "@hooks/useGetMovies"
import { Main } from "@styles/baseElements.styled"
import { SingleMovie } from "@typings/globalTypes"
import { tempWatchedData } from "@utils/mockData"

/**
 * MoviesDatabase Component
 *
 * This component serves as the main container for the movie database application.
 *
 * Local States:
 * @property {string} query - Local state for storing the search query.
 * @property {string|null} selectedId - Local state for storing the ID of the selected movie.
 * @property {Array} watched - Local state for storing the list of watched movies.
 *
 * API Response:
 * @property {Array} movies - Array of movie objects fetched based on the debounced search query.
 * @property {boolean} isLoading - A flag indicating whether the component is in a loading state.
 * @property {string} isError - Stores an error message, if any, while fetching data.
 *
 * Functions:
 * - handleAddWatched(movie: SingleMovie): Adds a movie to the watched list and updates localStorage.
 * - handleDeleteWatched(id: string): Deletes a movie from the watched list and updates localStorage.
 * - handleSelectMovie(id: string): Sets or unsets the selected movie ID.
 * - handleCloseMovie(): Resets the selected movie ID to an empty string.
 *
 * Hooks:
 * - useDebounce: Debounces the search query to minimize API calls.
 * - useGetMovies: Custom hook that fetches the movies based on the debounced query.
 *
 * Child Components:
 * - Navbar: Contains the Search and NumResults components.
 * - Search: Allows the user to input a movie search query.
 * - NumResults: Displays the number of results based on the search query.
 * - Movies: Displays the list of fetched movies.
 * - MovieDetails: Displays the details of the selected movie.
 * - Loader: Displays a loader while fetching data.
 * - ErrorMessage: Displays an error message if data fetching fails.
 * - WatchedSummary: Displays summary info about the watched movies.
 * - WatchedMovies: Displays the list of watched movies.
 *
 */

const WATCHED_MOVIES_KEY = "watched_movies"

export default function MoviesDatabase() {
  const [query, setQuery] = useState("")
  const [selectedId, setSelectedId] = useState<string | null>("")
  const [watched, setWatched] = useState(tempWatchedData)

  const debouncedQuery = useDebounce(query, 500)
  const { movies, isLoading, isError } = useGetMovies(debouncedQuery)

  useEffect(() => {
    const watchedMoviesJSON = localStorage.getItem(WATCHED_MOVIES_KEY)
    if (watchedMoviesJSON) {
      const watchedMovies = JSON.parse(watchedMoviesJSON)
      setWatched(watchedMovies)
    }
  }, [])

  function handleAddWatched(movie: SingleMovie) {
    const newWatched = [...watched, movie]
    setWatched(newWatched)
    localStorage.setItem(WATCHED_MOVIES_KEY, JSON.stringify(newWatched))
  }

  function handleDeleteWatched(id: string) {
    const newWatched = watched.filter((movie) => movie.imdbID !== id)
    setWatched(newWatched)
    localStorage.setItem(WATCHED_MOVIES_KEY, JSON.stringify(newWatched))
  }

  function handleSelectMovie(id: string) {
    setSelectedId((selectedId) => (id === selectedId ? null : id))
  }

  function handleCloseMovie() {
    setSelectedId("")
  }

  return (
    <>
      <Navbar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </Navbar>

      <Main>
        <Box>
          {isLoading ? (
            <Loader loaderText="Loading your movies" />
          ) : (
            <Movies movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {isError && <ErrorMessage message={isError} />}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMovies
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  )
}
