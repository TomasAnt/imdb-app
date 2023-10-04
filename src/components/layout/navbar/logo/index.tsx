import { StyledLogo, StyledLogoHeading, StyledLogoSpan } from "./logo.styled";

export default function Logo() {
  return (
    <StyledLogo>
      <StyledLogoSpan role="img">🍿</StyledLogoSpan>
      <StyledLogoHeading>usePopcorn</StyledLogoHeading>
    </StyledLogo>
  );
}
