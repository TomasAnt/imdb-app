import { useState } from "react"

import { StyledSearchInput } from "./search.styled"

export default function Search() {
  const [query, setQuery] = useState("")
  return (
    <StyledSearchInput
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  )
}
