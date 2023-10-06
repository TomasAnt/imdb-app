import WatchedMovie from "@components/core/watchedMovie"
import { UnorderedList } from "@styles/baseElements.styled"
import { SingleMovie } from "@typings/globalTypes"

/**
 * WatchedMovies Component
 *
 * @param props - The props that WatchedMovies expects.
 * @property {Object[]} props.watched - An array containing multiple movie objects.
 * @property {Function} props.onDeleteWatched - Function to execute when a movie is deleted.
 *
 * This component serves as a container for the WatchedMovie components.
 * It maps through the `watched` array and passes each movie object to an individual WatchedMovie component.
 */

interface WatchedMoviesProps {
  watched: SingleMovie[]
  onDeleteWatched: (imdbID: string) => void
}

export default function WatchedMovies({
  watched,
  onDeleteWatched,
}: WatchedMoviesProps) {
  return (
    <UnorderedList>
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          onDeleteWatched={onDeleteWatched}
        />
      ))}
    </UnorderedList>
  )
}
