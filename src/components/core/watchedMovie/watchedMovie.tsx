import Image from "next/image"

import Button from "@components/core/button"
import { Placeholder } from "@styles/baseElements.styled"

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
    Year: string
    imdbRating: string
    Runtime: string
    imdbID: string
  }
  onDeleteWatched: (id: string) => void
}

export default function WatchedMovie({ movie, onDeleteWatched }: MovieProps) {
  const { Title, Poster, imdbRating, Runtime, imdbID } = movie

  return (
    <StyledListItem>
      {Poster === "N/A" ? (
        <Placeholder>NO IMAGE</Placeholder>
      ) : (
        // Using a proxy to load the movie's poster image. It handles any CORS issues and serves the image.
        <Image
          src={`/api/imageProxy?url=${encodeURIComponent(Poster)}`}
          alt={`${Title} poster`}
          height={60}
          width={40}
        />
      )}
      <StyledListItemHeading>{Title}</StyledListItemHeading>
      <StyledListItemContainer>
        <StyledListItemParagraph>
          <span>⭐️</span>
          <span>{imdbRating}</span>
        </StyledListItemParagraph>
        <StyledListItemParagraph>
          <span>🌟</span>
          <span>$userRating</span>
        </StyledListItemParagraph>
        <StyledListItemParagraph>
          <span>⏳</span>
          <span>{Runtime} min</span>
        </StyledListItemParagraph>

        <Button variant="delete" onClick={() => onDeleteWatched(imdbID)}>
          X
        </Button>
      </StyledListItemContainer>
    </StyledListItem>
  )
}
