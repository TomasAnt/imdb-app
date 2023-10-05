import { StyledNumResults } from "."

interface Movie {
  imdbID: string
  Title: string
  Year: string
  Poster: string
}

interface NumResultsProps {
  movies: Movie[]
}

/**
 * NumResults Component
 *
 * @param movies - An array containing multiple movie objects.
 *
 * This component displays the total number of results found.
 * It receives an array of movie objects and displays its length,
 * effectively showing how many movies are in the list.
 */

export default function NumResults({ movies }: NumResultsProps) {
  return (
    <StyledNumResults>
      Found <strong>{movies.length}</strong> results
    </StyledNumResults>
  )
}
