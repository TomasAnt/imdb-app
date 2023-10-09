import MovieItem from "@components/movieList/movieItem"
import { UnorderedList } from "@styles/baseElements.styled"
import { SingleMovie } from "@typings/globalTypes"

interface MovieListProps {
  movies: SingleMovie[]
  onSelectMovie: (id: string) => void
}

/**
 * Movie List Component
 *
 * @param props - The props that Movie List expects.
 * @property {Object[]} props.movies - An array containing multiple movie objects.
 * @property {Function} props.onSelectMovie - Function to execute when a movie is selected.
 *
 * This component serves as a container for the Movie Item component.
 * It maps through the `movies` array and passes each movie object to an individual Movie Item component.
 */

export default function MovieList({ movies, onSelectMovie }: MovieListProps) {
  return (
    <UnorderedList>
      {movies?.map((movie) => (
        <MovieItem
          movie={movie}
          key={movie.imdbID}
          onSelectMovie={onSelectMovie}
        />
      ))}
    </UnorderedList>
  )
}
