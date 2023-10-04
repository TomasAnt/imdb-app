import { StyledLoader, StyledSpinner, StyledSpinnerText } from "."

interface LoaderProps {
  loaderText: string
}

export default function Loader({ loaderText }: LoaderProps) {
  return (
    <StyledLoader>
      <StyledSpinner />
      <StyledSpinnerText>{loaderText}</StyledSpinnerText>
    </StyledLoader>
  )
}
