import { MultipleMovies } from "@typings/globalTypes"

import { StyledNumResults } from "."

/**
 * NumResults Component
 *
 * @param movies - An array containing multiple movie objects.
 *
 * This component displays the total number of results found.
 * It receives an array of movie objects and displays its length,
 * effectively showing how many movies are in the list.
 */

export default function NumResults({ movies }: MultipleMovies) {
  return (
    <StyledNumResults>
      Found <strong>{movies.length}</strong> results
    </StyledNumResults>
  )
}
