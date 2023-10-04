import { useEffect, useState } from "react"

import Box from "@components/core/box"
import ErrorMessage from "@components/core/errorMessage"
import Loader from "@components/core/loader"
import Logo from "@components/core/logo"
import Main from "@components/core/main"
import StarRating from "@components/core/starRating"
import { Movie, MovieDetails, WatchedMovie } from "@typings/globalTypes"
import { average } from "@utils/helpers"

export default function Movies() {
  const [query, setQuery] = useState("Pulp Fiction")
  const [movies, setMovies] = useState([])
  const [watched, setWatched] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<null | string>(null)
  const [selectedId, setSelectedId] = useState<null | string>(null)

  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id))
  }

  function handleCloseMovie() {
    setSelectedId(null)
  }

  useEffect(() => {
    async function fetchMovies() {
      setIsLoading(true)
      setError(null)

      const res = await fetch(`/api/getMovies?q=${query}`)

      if (!res.ok) {
        setError("Something went wrong, while fetching movies from the server")
        setIsLoading(false)
        return
      }

      const data = await res.json()
      if (data.error) {
        setError(data.error)
        setIsLoading(false)
        return
      }
      setMovies(data.Search)
      setIsLoading(false)
    }
    if (!query || query.length < 3) {
      setMovies([])
      setError(null)
      return
    }
    fetchMovies()
  }, [query])

  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>

      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList onSelectMovie={handleSelectMovie} movies={movies} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>

        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList watched={watched} />
            </>
          )}
        </Box>
      </Main>
    </>
  )
}

function NavBar({ children }: { children: React.ReactNode }) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  )
}

type SearchProps = {
  query: string
  setQuery: React.Dispatch<React.SetStateAction<string>>
}

function Search({ query, setQuery }: SearchProps) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  )
}

function NumResults({ movies }: { movies: any }) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  )
}

function MovieList({
  movies,
  onSelectMovie,
}: {
  movies: Movie[]
  onSelectMovie: any
}) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  )
}

function Movie({ movie, onSelectMovie }: { movie: any; onSelectMovie: any }) {
  return (
    <li onClick={() => onSelectMovie(movie.imdbID)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  )
}

function MovieDetails({
  selectedId,
  onCloseMovie,
}: {
  selectedId: any
  onCloseMovie: any
}) {
  const [movie, setMovie] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie as MovieDetails

  useEffect(() => {
    async function getMovieDetails() {
      setIsLoading(true)
      const res = await fetch(`/api/getMovieDetails?i=${selectedId}`)

      if (!res.ok) {
        setIsLoading(false)
        return
      }

      const data = await res.json()
      setMovie(data)
      setIsLoading(false)
    }

    if (!selectedId) {
      setMovie(null)
      return
    }

    getMovieDetails()
  }, [selectedId])

  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${title} movie`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐️</span>
                {imdbRating} IMDb rating
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              <StarRating maxRating={10} size={24} />
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring: {actors} and others</p>
            <p>Directed by: {director} </p>
          </section>
        </>
      )}
    </div>
  )
}

function WatchedSummary({ watched }: { watched: WatchedMovie[] }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating))
  const avgUserRating = average(watched.map((movie) => movie.userRating))
  const avgRuntime = average(watched.map((movie) => movie.runtime))

  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  )
}

function WatchedMoviesList({ watched }: { watched: WatchedMovie[] }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  )
}

function WatchedMovie({ movie }: { movie: Movie }) {
  return (
    <li>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>
      </div>
    </li>
  )
}
