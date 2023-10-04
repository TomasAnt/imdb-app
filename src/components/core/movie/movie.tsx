import Image from "next/image"

import {
  StyledListItem,
  StyledListItemContainer,
  StyledListItemHeading,
  StyledListItemParagraph,
} from "."

interface MovieProps {
  movie: {
    Poster: string
    Title: string
    imdbID: string
    Year: string
  }
  onSelectMovie: (id: string) => void
}

export default function Movie({ movie, onSelectMovie }: MovieProps) {
  return (
    <StyledListItem onClick={() => onSelectMovie(movie.imdbID)}>
      <Image
        src={movie.Poster}
        alt={`${movie.Title} poster`}
        height={60}
        width={40}
      />
      <StyledListItemHeading>{movie.Title}</StyledListItemHeading>
      <StyledListItemContainer>
        <StyledListItemParagraph>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </StyledListItemParagraph>
      </StyledListItemContainer>
    </StyledListItem>
  )
}
