import { useState } from "react"

import Image from "next/image"

import Button from "@components/core/button"
import Loader from "@components/core/loader"
import StarRating from "@components/core/starRating"
import { useGetMovieDetails } from "@hooks/useGetMovieDetails"
import { Rating, Placeholder } from "@styles/baseElements.styled"
import { SingleMovie } from "@typings/globalTypes"

import { Details, DetailsOverview } from "./movieDetails.styled"

/**
 * MovieDetails Component
 *
 * @param props - The props that MovieDetails expects.
 * @property {string} props.selectedId - The IMDb ID of the selected movie.
 * @property {Function} props.onCloseMovie - Function to execute when the movie details are to be closed.
 *
 * This component serves multiple purposes:
 * - It fetches and displays details of a selected movie.
 * - Allows a user to rate the movie.
 * - Provides an option to go back to the movie list.
 *
 * The component utilizes the `useGetMovieDetails` custom hook to fetch details of a movie based on its IMDb ID.
 * It maintains a local state `userRating` to keep track of the user's rating for the movie.
 *
 * The sub-component `MovieDetailsOverview` is used to display the main details of the movie, such as the title, release date, runtime, and genre.
 */

const MovieDetailsOverview = ({ movie }: { movie: SingleMovie }) => {
  const { Title, Released, Runtime, Genre, imdbRating } = movie
  return (
    <DetailsOverview>
      <h2>{Title}</h2>
      <p>
        {Released} &bull; {Runtime}
      </p>
      <p>{Genre}</p>
      <p>
        <span>⭐️</span>
        {imdbRating} IMDb rating
      </p>
    </DetailsOverview>
  )
}

type MovieDetailsProps = {
  selectedId: string
  onCloseMovie: () => void
}

export default function MovieDetails({
  selectedId,
  onCloseMovie,
}: MovieDetailsProps) {
  const [userRating, setUserRating] = useState<number>(0)
  const { movie, isLoading } = useGetMovieDetails(selectedId)

  if (isLoading) {
    return <Loader loaderText="Loading movie details" />
  }

  if (!movie) {
    return null
  }

  return (
    <Details>
      <header>
        <Button variant="back" onClick={onCloseMovie}>
          &larr;
        </Button>
        {movie.Poster === "N/A" ? (
          <Placeholder>NO IMAGE</Placeholder>
        ) : (
          // Using a proxy to load the movie's poster image. It handles any CORS issues and serves the image.
          <Image
            src={`/api/imageProxy?url=${encodeURIComponent(movie.Poster)}`}
            alt={`Poster of ${movie.Title} movie`}
            height={250}
            width={400}
            loading="lazy"
          />
        )}
        <MovieDetailsOverview movie={movie} />
      </header>
      <section>
        <Rating>
          <StarRating maxRating={10} size={24} onSetRating={setUserRating} />
        </Rating>
        <p>
          <em>{movie.Plot}</em>
        </p>
        <p>Starring {movie.Actors}</p>
        <p>Directed by {movie.Director}</p>
        <p>{userRating}</p>
      </section>
    </Details>
  )
}
