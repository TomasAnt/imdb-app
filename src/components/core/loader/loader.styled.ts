import styled, { keyframes } from "styled-components"

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const StyledLoader = styled.div`
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 5px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.bg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  margin: 4.8rem;
`

export const StyledSpinner = styled.div`
  border: 0.5rem solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  border-top: 0.5rem solid ${({ theme }) => theme.colors.background500};
  width: 5rem;
  height: 5rem;
  animation: ${spin} 1s linear infinite;
`

export const StyledSpinnerText = styled.p`
  margin-top: 1rem;
`
