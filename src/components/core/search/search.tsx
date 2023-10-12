import { useRef, useEffect } from "react"

import { SearchInput } from "."

interface SearchProps {
  query: string
  setQuery: (query: string) => void
}

export default function Search({ query, setQuery }: SearchProps) {
  const inputEl = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const callback = (e: KeyboardEvent) => {
      if (document.activeElement === inputEl.current) return

      if (e.code === "Enter") {
        inputEl.current!.focus()
        setQuery("")
      }
    }

    document.addEventListener("keydown", callback)
    return () => document.removeEventListener("keydown", callback)
  }, [setQuery])

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
