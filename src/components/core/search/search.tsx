import { useRef, useEffect } from "react"

import { SearchInput } from "."

interface SearchProps {
  query: string
  setQuery: (query: string) => void
}

export default function Search({ query, setQuery }: SearchProps) {
  const inputEl = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputEl.current) {
      inputEl.current.focus()
    }
  }, [])

  return (
    <SearchInput
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  )
}
