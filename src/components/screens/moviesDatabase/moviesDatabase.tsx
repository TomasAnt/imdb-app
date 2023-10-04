import { useState } from "react"

import Loader from "@components/core/loader"
import Movie from "@components/core/movie/movie"
import NumResults from "@components/core/numResults"
import Search from "@components/core/search"
import Navbar from "@components/layout/navbar"
import { tempMovieData } from "@utils/mockData"

export default function Movies() {
  const [query, setQuery] = useState("")

  function handleSelectMovie() {
    console.log("Movie selected")
  }
  return (
    <>
      <Navbar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={tempMovieData} />
      </Navbar>
      <Movie movie={tempMovieData[0]} onSelectMovie={handleSelectMovie} />
      <Loader loaderText="Loading your content" />
      {query && <p>Searching for {query}</p>}
    </>
  )
}
