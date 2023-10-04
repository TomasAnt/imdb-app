import { SearchInput } from "."

interface SearchProps {
  query: string
  setQuery: (query: string) => void
}

export default function Search({ query, setQuery }: SearchProps) {
  return (
    <SearchInput
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  )
}
