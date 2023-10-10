import Image from "next/image"

import Button from "@components/core/button"
import { Placeholder } from "@styles/baseElements.styled"
import { SingleMovie } from "@typings/globalTypes"

import {
  StyledListItem,
  StyledListItemContainer,
  StyledListItemHeading,
  StyledListItemParagraph,
} from "."

/**
 * WatchedItem Component
 *
 * @param movie - Contains information about a single movie.
 * @param onDeleteWatched - Function to execute when a movie is deleted.
 *
 * This component displays a movie's poster, title, and year.
 * If the movie lacks a poster, a default image is displayed.
 */

interface WatchedItemProps {
  movie: SingleMovie
  onDeleteWatched: (imdbID: string) => void
}

export default function WatchedMovie({
  movie,
  onDeleteWatched,
}: WatchedItemProps) {
  const { Title, Poster, imdbRating, Runtime, imdbID, UserRating } = movie

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
          <span>{UserRating}</span>
        </StyledListItemParagraph>
        <StyledListItemParagraph>
          <span>⏳</span>
          <span>{Runtime}</span>
        </StyledListItemParagraph>

        <Button variant="delete" onClick={() => onDeleteWatched(imdbID)}>
          X
        </Button>
      </StyledListItemContainer>
    </StyledListItem>
  )
}
