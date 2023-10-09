import { WatchedMovie } from "@typings/globalTypes"
import { average } from "@utils/helpers"

import { Summary } from "."

/**
 * WatchedSummary Component
 *
 * This component displays a summary of the movies that the user has watched.
 *
 * @param {WatchedMovie} watched - An object containing information about the watched movies.
 *
 * Local Variables:
 * - avgImdbRating: The average IMDb rating of the watched movies.
 * - avgUserRating: The average user rating of the watched movies.
 * - avgRuntime: The average runtime of the watched movies.
 *
 * @returns A summary section displaying various statistics about the watched movies.
 */

export default function WatchedSummary({ watched }: WatchedMovie) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating))
  const avgUserRating = average(watched.map((movie) => movie.UserRating))
  const avgRuntime = average(watched.map((movie) => movie.Runtime))

  return (
    <Summary>
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating.toFixed(2)}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating.toFixed(2)}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </Summary>
  )
}
