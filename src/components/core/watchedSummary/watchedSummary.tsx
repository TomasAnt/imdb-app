import { WatchedMovie } from "@typings/globalTypes"
import { average } from "@utils/helpers"

import { Summary } from "."

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
