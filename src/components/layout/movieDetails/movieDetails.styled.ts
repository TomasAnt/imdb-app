import styled from "styled-components"

export const Details = styled.div`
  line-height: 1.4;
  font-size: 1.4rem;

  header {
    display: flex;
  }

  section {
    padding: 4rem;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  img {
    width: 33%;
    height: auto;
  }
`

export const DetailsOverview = styled.header`
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
