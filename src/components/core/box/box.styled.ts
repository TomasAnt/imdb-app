import styled from "styled-components"

export const StyledBox = styled.div`
  width: 42rem;
  max-width: 42rem;
  background-color: ${({ theme }) => theme.colors.background500};
  border-radius: 0.9rem;
  overflow: auto;
  position: relative;
`
