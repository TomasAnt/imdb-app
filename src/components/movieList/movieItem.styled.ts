import styled from "styled-components"

export const StyledListItem = styled.li`
  position: relative;
  display: grid;
  grid-template-columns: 4rem 1fr;
  grid-template-rows: auto auto;
  column-gap: 2.4rem;
  font-size: 1.6rem;
  align-items: center;
  padding: 1.6rem 3.2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.background100};
  cursor: pointer;
  transition: all 0.3s;

  img {
    grid-row: 1 / -1;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.background100};
  }
`

export const StyledListItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`

export const StyledListItemHeading = styled.h3`
  font-size: 1.8rem;
`

export const StyledListItemParagraph = styled.p`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`

export const ImagePlaceholder = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.background100};
  border-radius: 0.8rem;
  grid-row: 1 / -1;
  font-size: 1rem;
  align-items: center;
  text-align: center;
  width: 4rem;
  height: 6rem;
`
