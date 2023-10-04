import styled, { css } from "styled-components"

export type IconSizes = "small" | "medium" | "large"

interface StyledIconProps {
  size?: IconSizes
  color?: string
}

const sizeStyles = {
  small: css`
    width: 16px;
    height: 16px;
  `,
  medium: css`
    width: 24px;
    height: 24px;
  `,
  large: css`
    width: 48px;
    height: 48px;
  `,
}

export const StyledIcon = styled.div<StyledIconProps>`
  display: flex;
  align-items: center;
  color: ${({ color }) => color || "black"};

  & > svg {
    ${({ size }) => size && sizeStyles[size]}
  }
`
