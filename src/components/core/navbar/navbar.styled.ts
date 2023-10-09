import styled from "styled-components"

export const StyledNavbar = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  height: 7.2rem;
  padding: 0 3.2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 0.9rem;
`
