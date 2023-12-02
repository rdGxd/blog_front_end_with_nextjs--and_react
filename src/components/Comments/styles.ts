import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.sizes.content};
    width: 100%;
    margin: ${theme.spacings.large} 0 auto;
    padding: 0 ${theme.spacings.large};
  `}
`;
