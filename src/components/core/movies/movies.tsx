import Movie from "@components/core/movie"

import { StyledList } from "."

interface MoviesProps {
  movies: {
    Poster: string
    Title: string
    imdbID: string
    Year: string
  }[]
  onSelectMovie: (id: string) => void
}

export default function Movies({ movies, onSelectMovie }: MoviesProps) {
  return (
    <StyledList>
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
      ))}
    </StyledList>
  )
}
