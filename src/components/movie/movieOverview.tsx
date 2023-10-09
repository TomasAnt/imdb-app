import { SingleMovie } from "@typings/globalTypes"

import { Overview } from "."

export default function MovieOverview({ movie }: { movie: SingleMovie }) {
  const { Title, Released, Runtime, Genre, imdbRating } = movie
  return (
    <Overview>
      <h2>{Title}</h2>
      <p>
        {Released} &bull; {Runtime}
      </p>
      <p>{Genre}</p>
      <p>
        <span>⭐️</span>
        {imdbRating} IMDb rating
      </p>
    </Overview>
  )
}
