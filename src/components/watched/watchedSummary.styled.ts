import styled from "styled-components"

export const Summary = styled.div`
  padding: 2.2rem 3.2rem 1.8rem 3.2rem;
  border-radius: 0.9rem;
  background-color: ${({ theme }) => theme.colors.background100};
  box-shadow: 0 1.2rem 2.4rem rgba(0, 0, 0, 0.2);

  h2 {
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.fontSizes.default};
    margin-bottom: ${({ theme }) => theme.spacings.xxs};
  }

  div {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacings.default};
    font-size: ${({ theme }) => theme.fontSizes.default};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
  }

  p {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`
