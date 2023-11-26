import styled, { css } from "styled-components";

export const Wrapper = styled.p`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium} 0;

    span {
      margin: 0 0rem 0 0.5rem;
    }

    span::before {
      content: " ";
    }

    span::after {
      content: ", ";
    }

    span:last-child::after {
      content: "";
    }

    a:hover {
      filter: brightness(80%);
    }
  `}
`;
