import Image from "next/image"

import { SingleMovieProp } from "@typings/globalTypes"

import {
  MovieCardContainer,
  MovieCardHeading,
  MovieCardItem,
  MovieCardParagraph,
} from "."

export default function MovieCard({ movie }: SingleMovieProp) {
  return (
    <MovieCardItem>
      <Image
        src={movie.Poster}
        alt={`${movie.Title} poster`}
        width={40}
        height={60}
      />
      <MovieCardHeading>{movie.Title}</MovieCardHeading>
      <MovieCardContainer>
        {movie.Year && (
          <MovieCardParagraph>
            <span>🗓</span>
            <span>{movie.Year}</span>
          </MovieCardParagraph>
        )}
        {movie.imdbRating && (
          <MovieCardParagraph>
            <span>⭐️</span>
            <span>{movie.imdbRating}</span>
          </MovieCardParagraph>
        )}
        {movie.userRating && (
          <MovieCardParagraph>
            <span>🌟</span>
            <span>{movie.userRating}</span>
          </MovieCardParagraph>
        )}
        {movie.runtime && (
          <MovieCardParagraph>
            <span>⏳</span>
            <span>{movie.runtime} min</span>
          </MovieCardParagraph>
        )}
      </MovieCardContainer>
    </MovieCardItem>
  )
}
