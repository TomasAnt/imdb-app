import Image from "next/image"

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
    <li onClick={() => onSelectMovie(movie.imdbID)}>
      <Image
        src={movie.Poster}
        alt={`${movie.Title} poster`}
        height={60}
        width={40}
      />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  )
}
