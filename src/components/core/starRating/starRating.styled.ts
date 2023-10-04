import styled from "styled-components"

export const StarContainer = styled.div`
  display: flex;
`
export const StarText = styled.p<{ color: string; size: number }>`
  line-height: 1;
  margin: 0;
  color: ${({ color }) => color};
  font-size: ${({ size }) => size / 1.5}px;
`
