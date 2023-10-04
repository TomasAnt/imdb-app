import styled from "styled-components"

export const StarStyle = styled.span<{ size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  display: block;
  cursor: pointer;
`
