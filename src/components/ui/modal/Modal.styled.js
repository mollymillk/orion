import styled, { css } from "styled-components";
export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: 0.5s;
  overflow: hidden;
  ${({ active }) =>
    active &&
    css`
      opacity: 1;
      z-index: 99999;
      pointer-events: all;
    `}
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: first baseline;
  width: 100%;
  position: relative;
`;

export const CloseButton = styled.button`
  :hover {
    opacity: 0.8;
  }
  svg {
    width: 30px;
    height: 30px;
    color: red;
  }
  position: absolute;
  right: 0;
  @media screen and (max-width: 820px) {
    width: 26px;
    width: 26px;
    height: 26px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 30px 0;
`;

export const ModalContainer = styled.div`
  position: fixed;
  border-radius: 12px;
  background-color: #fff;
  opacity: 1;
  max-width: 45vw;
  padding: 20px;
  @media screen and (max-width: 820px) {
    max-width: 80vw;
    padding: 16px;
  }
`;
