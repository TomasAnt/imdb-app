import MovieCard from "@components/core/movieCard"
import { UnorderedList } from "@styles/baseElements.styled"
import { MovieProps } from "@typings/globalTypes"

export default function MovieList({ movies }: MovieProps) {
  return (
    <UnorderedList>
      {movies?.map((movie) => (
        <MovieCard movie={movie} key={movie.imdbID} />
      ))}
    </UnorderedList>
  )
}
