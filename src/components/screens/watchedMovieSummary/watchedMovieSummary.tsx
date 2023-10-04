import { WatchedMovieSummaryProps } from "@typings/globalTypes"
import { average } from "@utils/helpers"

import {
  SummaryContainer,
  SummaryHeading,
  SummaryParagraph,
  SummaryWrapper,
} from "."

export default function WatchedMovieSummary({
  watched,
}: WatchedMovieSummaryProps) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating))
  const avgUserRating = average(watched.map((movie) => movie.userRating))
  const avgRuntime = average(watched.map((movie) => movie.runtime))

  return (
    <SummaryWrapper>
      <SummaryHeading>Movies you watched</SummaryHeading>
      <SummaryContainer>
        <SummaryParagraph>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </SummaryParagraph>
        <SummaryParagraph>
          <span>⭐️</span>
          <span>{avgImdbRating}</span>
        </SummaryParagraph>
        <SummaryParagraph>
          <span>🌟</span>
          <span>{avgUserRating}</span>
        </SummaryParagraph>
        <SummaryParagraph>
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </SummaryParagraph>
      </SummaryContainer>
    </SummaryWrapper>
  )
}
