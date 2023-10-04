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

export default function NumResults({ movies }: NumResultsProps) {
  return (
    <StyledNumResults>
      Found <strong>{movies.length}</strong> results
    </StyledNumResults>
  )
}
