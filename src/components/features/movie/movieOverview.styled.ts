import styled from "styled-components"

export const Overview = styled.header`
  width: 100%;
  padding: 2.4rem 3rem;
  background-color: ${({ theme }) => theme.colors.background100};
  display: flex;
  flex-direction: column;
  gap: 1.4rem;

  h2 {
    font-size: 2.4rem;
    margin-bottom: 0.4rem;
    line-height: 1.1;
  }

  p {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
`
