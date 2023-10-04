import styled from "styled-components"

export const Main = styled.main`
  margin-top: 2.4rem;
  height: calc(100vh - 7.2rem - 3 * 2.4rem);
  display: flex;
  gap: 2.4rem;
  justify-content: center;
`

export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`

export const FlexParagraph = styled.p`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`

export const UnorderedList = styled.ul`
  list-style: none;
  padding: 0.8rem 0;
  overflow: hidden;

  cursor: pointer;
  transition: all 0.3s;
`

export const ErrorText = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.bg};
  padding: 4.8rem;
`

export const LoaderText = styled.p`
  text-align: center;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSizes.bg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  margin: 4.8rem;
`

export const RatingBox = styled.div`
  background-color: ${({ theme }) => theme.colors.background100};
  border-radius: 0.9rem;
  padding: 2rem 2.4rem;
  margin-bottom: 0.8rem;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`
