import styled, { css } from "styled-components"
export type ButtonVariants = "toggle" | "delete" | "add" | "back"

interface StyledButtonProps {
  variant: ButtonVariants
}

const defaultButton = css<StyledButtonProps>`
  border: none;
  cursor: pointer;
`

const toggleButton = css`
  position: absolute;
  top: ${({ theme }) => theme.spacings.xs};
  right: ${({ theme }) => theme.spacings.xs};
  height: ${({ theme }) => theme.spacings.default};
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.background900};
  color: #dee2e6;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  z-index: 999;
`

const deleteButton = css`
  position: absolute;
  right: ${({ theme }) => theme.spacings.default};
  height: ${({ theme }) => theme.spacings.md};
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.background900};
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  transition: all 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.redDark};
  }
`

const addButton = css`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #dee2e6;
  border-radius: 10rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  padding: 1rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  transition: all 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryLight};
  }
`

const backButton = css`
  position: absolute;
  top: ${({ theme }) => theme.spacings.xxs};
  left: ${({ theme }) => theme.spacings.xxs};
  height: ${({ theme }) => theme.spacings.lg};
  aspect-ratio: 1;
  border-radius: 50%;
  border: none;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.background500};
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.8);
  font-family: sans-serif;
  font-size: ${({ theme }) => theme.fontSizes.h2};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`

const stylesMap = {
  toggle: toggleButton,
  delete: deleteButton,
  add: addButton,
  back: backButton,
}

export const StyledButton = styled.button<StyledButtonProps>`
  ${defaultButton};
  ${(props) => stylesMap[props.variant] || defaultButton};
`
