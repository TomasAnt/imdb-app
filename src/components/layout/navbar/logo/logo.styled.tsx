import styled from "styled-components";

export const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.xs};
`;

export const StyledLogoSpan = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.h1};
`;

export const StyledLogoHeading = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.h2};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.white};
`;
