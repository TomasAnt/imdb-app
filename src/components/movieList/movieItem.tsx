import Image from "next/image";

import { Placeholder } from "@styles/baseElements.styled";
import { SingleMovie } from "@typings/globalTypes";

import {
  StyledListItem,
  StyledListItemContainer,
  StyledListItemHeading,
  StyledListItemParagraph,
} from ".";

/**
 * Movie Component
 *
 * @param movie - Contains information about a single movie.
 * @param onSelectMovie - Function to execute when a movie is selected.
 *
 * This component displays a movie's poster, title, and year.
 * If the movie lacks a poster, a default image is displayed.
 */

interface MovieItemProps {
  movie: SingleMovie;
  onSelectMovie: (imdbID: string) => void;
}

export default function MovieItem({ movie, onSelectMovie }: MovieItemProps) {
  const { Title, Year, Poster, imdbID } = movie;

  return (
    <StyledListItem onClick={() => onSelectMovie(imdbID)}>
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
          <span>🗓</span>
          <span>{Year}</span>
        </StyledListItemParagraph>
      </StyledListItemContainer>
    </StyledListItem>
  );
}
