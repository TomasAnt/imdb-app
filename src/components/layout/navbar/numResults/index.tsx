import { MovieProps } from "@typings/globalTypes"

import { NumResultsParagraph } from "./numResults.styled"

export default function NumResults({ movies }: MovieProps) {
  return (
    <NumResultsParagraph>
      Found <strong>{movies.length}</strong> results
    </NumResultsParagraph>
  )
}
