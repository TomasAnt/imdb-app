import styled from "styled-components"

import { FlexCenter, FlexParagraph } from "@styles/baseElements.styled"

export const SummaryWrapper = styled.div`
  padding: 2.2rem 3.2rem 1.8rem 3.2rem;
  border-radius: 0.9rem;
  background-color: ${({ theme }) => theme.colors.background100};
  box-shadow: 0 1.2rem 2.4rem rgba(0, 0, 0, 0.2);
`

export const SummaryHeading = styled.h2`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSizes.default};
  margin-bottom: 0.6rem;
`

export const SummaryContainer = styled(FlexCenter)`
  font-size: ${({ theme }) => theme.fontSizes.default};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`

export const SummaryParagraph = styled(FlexParagraph)``
