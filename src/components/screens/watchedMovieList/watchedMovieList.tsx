import MovieCard from "@components/core/movieCard/movieCard"
import { UnorderedList } from "@styles/baseElements.styled"

type WatchedMovieListProps = {
  watched: {
    imdbID: string
    Title: string
    Year: string
    Poster: string
    runtime: number
    imdbRating: number
    userRating: number
  }[]
}

export default function WatchedMovieList({ watched }: WatchedMovieListProps) {
  return (
    <UnorderedList>
      {watched.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </UnorderedList>
  )
}
