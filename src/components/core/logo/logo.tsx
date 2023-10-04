import {
  StyledLogoContainer,
  StyledLogoImage,
  StyledLogoText,
} from "./logo.styled"

export default function Logo() {
  return (
    <StyledLogoContainer>
      <StyledLogoImage role="img" aria-label="popcorn">
        🍿
      </StyledLogoImage>
      <StyledLogoText>usePopcorn</StyledLogoText>
    </StyledLogoContainer>
  )
}
