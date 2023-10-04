import { useState } from "react"

import Box from "@components/core/box"
import Loader from "@components/core/loader"
import Movies from "@components/core/movies"
import NumResults from "@components/core/numResults"
import Search from "@components/core/search"
import Navbar from "@components/layout/navbar"
import { Main } from "@styles/baseElements.styled"
import { tempMovieData } from "@utils/mockData"

export default function MoviesDatabase() {
  const [query, setQuery] = useState("")

  function handleSelectMovie() {
    console.log("Movie selected from the Movie List")
  }
  return (
    <>
      <Navbar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={tempMovieData} />
      </Navbar>

      <Main>
        <Box>
          <Movies movies={tempMovieData} onSelectMovie={handleSelectMovie} />
        </Box>
        <Box>
          <Movies movies={tempMovieData} onSelectMovie={handleSelectMovie} />
        </Box>
      </Main>

      <Loader loaderText="Loading your content" />
      {query && <p>Searching for {query}</p>}
    </>
  )
}
