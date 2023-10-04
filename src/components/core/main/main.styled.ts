import styled from "styled-components"

export const StyledMain = styled.main`
  margin-top: ${({ theme }) => theme.spacings.default};
  height: calc(100vh - 7.2rem - 3 * 2.4rem);
  display: flex;
  gap: ${({ theme }) => theme.spacings.default};
  justify-content: center;
`
