import styled, { css } from "styled-components";

export const IconButtonsWrapper = styled.div`
  display: flex;
  gap: 20px;
  ${({ scrolled }) =>
    scrolled &&
    css`
      flex-direction: column;
      position: fixed;
      right: 10px;
      bottom: 20px;
      z-index: 10;
    `}
`;
