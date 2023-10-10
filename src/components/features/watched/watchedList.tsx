import WatchedItem from "@components/features/watched/watchedItem"
import { UnorderedList } from "@styles/baseElements.styled"
import { SingleMovie } from "@typings/globalTypes"

/**
 * WatchedList Component
 *
 * @param props - The props that WatchedList expects.
 * @property {Object[]} props.watched - An array containing multiple movie objects.
 * @property {Function} props.onDeleteWatched - Function to execute when a movie is deleted.
 *
 * This component serves as a container for the WatchedItem components.
 * It maps through the `watched` array and passes each movie object to an individual WatchedItem component.
 */

interface WatchedListProps {
  watched: SingleMovie[]
  onDeleteWatched: (imdbID: string) => void
}

export default function WatchedListMovies({
  watched,
  onDeleteWatched,
}: WatchedListProps) {
  return (
    <UnorderedList>
      {watched.map((movie) => (
        <WatchedItem
          movie={movie}
          key={movie.imdbID}
          onDeleteWatched={onDeleteWatched}
        />
      ))}
    </UnorderedList>
  )
}
