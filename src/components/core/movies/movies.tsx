import Movie from "@components/core/movie"
import { UnorderedList } from "@styles/baseElements.styled"
import { SingleMovie } from "@typings/globalTypes"

interface MoviesProps {
  movies: SingleMovie[]
  onSelectMovie: (id: string) => void
}

/**
 * Movies Component
 *
 * @param props - The props that Movies expects.
 * @property {Object[]} props.movies - An array containing multiple movie objects.
 * @property {Function} props.onSelectMovie - Function to execute when a movie is selected.
 *
 * This component serves as a container for the Movie components.
 * It maps through the `movies` array and passes each movie object to an individual Movie component.
 */

export default function Movies({ movies, onSelectMovie }: MoviesProps) {
  return (
    <UnorderedList>
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
      ))}
    </UnorderedList>
  )
}
