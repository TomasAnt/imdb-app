/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState } from "react"

import Main from "@components/core/main"
import StarRating from "@components/core/starRating"
import Box from "@components/layout/box"
import Navbar from "@components/layout/navbar"
import Logo from "@components/layout/navbar/logo"
import NumResults from "@components/layout/navbar/numResults"
import Search from "@components/layout/navbar/search"
import MovieList from "@components/screens/movieList"
import WatchedMovieList from "@components/screens/watchedMovieList"
import WatchedMovieSummary from "@components/screens/watchedMovieSummary"
import { tempMovieData, tempWatchedData } from "@utils/mockData"

export default function HomePage() {
  const [movies, setMovies] = useState(tempMovieData)
  const [watched, setWatched] = useState(tempWatchedData)
  return (
    <>
      <Navbar>
        <Logo />
        <Search />
        <NumResults movies={movies} />
      </Navbar>
      <Main>
        <Box>
          <MovieList movies={movies} />
        </Box>
        <Box>
          <WatchedMovieSummary watched={watched} />
          <WatchedMovieList watched={watched} />
          <StarRating maxRating={10} defaultRating={5} color="red" size={15} />
          <StarRating
            maxRating={5}
            defaultRating={3}
            messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
          />
        </Box>
      </Main>
    </>
  )
}
