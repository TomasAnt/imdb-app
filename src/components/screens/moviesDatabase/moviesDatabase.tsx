import { useState } from "react"

import Box from "@components/core/box"
import ErrorMessage from "@components/core/errorMessage/errorMessage"
import Loader from "@components/core/loader"
import Movies from "@components/core/movies"
import NumResults from "@components/core/numResults"
import Search from "@components/core/search"
import MovieDetails from "@components/layout/movieDetails"
import Navbar from "@components/layout/navbar"
import { useDebounce } from "@hooks/useDebounce"
import { useGetMovies } from "@hooks/useGetMovies"
import { Main } from "@styles/baseElements.styled"

/**
 * MoviesDatabase Component
 *
 * This component serves as the main container for the movie database application.
 *
 * @property {string} query - Local state for storing the search query.
 * @property {string} selectedId - Local state for storing the ID of the selected movie.
 * @property {Array} movies - Array of movie objects fetched based on the debounced search query.
 * @property {boolean} isLoading - A flag indicating whether the component is in a loading state.
 * @property {string} isError - Stores an error message, if any, while fetching data.
 *
 * Functions:
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
 *
 */

export default function MoviesDatabase() {
  const [query, setQuery] = useState("")

  const [selectedId, setSelectedId] = useState<string | null>("")

  function handleSelectMovie(id: string) {
    setSelectedId((selectedId) => (id === selectedId ? null : id))
  }

  const debouncedQuery = useDebounce(query, 500)
  const { movies, isLoading, isError } = useGetMovies(debouncedQuery)

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
            />
          ) : (
            <Box>No watched movies</Box>
          )}
        </Box>
      </Main>
    </>
  )
}
