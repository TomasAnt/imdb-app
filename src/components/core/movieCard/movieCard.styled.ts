import styled from "styled-components"

import { FlexCenter, FlexParagraph } from "@styles/baseElements.styled"

export const MovieCardItem = styled.li`
  position: relative;
  display: grid;
  grid-template-columns: 4rem 1fr;
  grid-template-rows: auto auto;
  column-gap: ${({ theme }) => theme.spacings.default};
  font-size: ${({ theme }) => theme.fontSizes.default};
  align-items: center;
  padding: 1.6rem 3.2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.background100};

  img {
    grid-row: 1 / -1;
  }
`

export const MovieCardHeading = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
`

export const MovieCardContainer = styled(FlexCenter)``

export const MovieCardParagraph = styled(FlexParagraph)``
