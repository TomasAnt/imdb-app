import WatchedMovie from "@components/core/watchedMovie"
import { UnorderedList } from "@styles/baseElements.styled"

export default function WatchedMovies({ watched, onDeleteWatched }) {
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
