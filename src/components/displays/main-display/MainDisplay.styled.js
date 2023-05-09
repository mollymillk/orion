import styled, { css } from "styled-components";
import { Text } from "../../ui/text/text.styled";
import main from "../../../assets/img/main.jpg";

export const DisplayWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #eeece8;
  display: flex;
  flex-direction: row;
`;

export const MainPhoto = styled.div`
  transition-property: transform, opacity;
  transition-duration: 3s, 5s;
  margin: 20vh 0;
  width: 45%;
  height: 70%;
  border-radius: 0 35% 35% 0/0 50% 50% 0;
  opacity: ${({ state }) => (state === "entered" ? 0 : 1)};
  background: url(${main});
  background-size: cover;
  transform: translateX(${({ state }) => (state === "entered" ? -400 : 0)}px);
`;

export const TextWrapper = styled.div`
  transition-property: transform, opacity;
  transition-duration: 1s, 2s;
  opacity: ${({ state }) => (state === "entered" ? 0 : 1)};
  transform: translateX(${({ state }) => (state === "entered" ? -400 : 0)}px);
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  gap: 20px;
`;

export const MainText = styled(Text)`
  text-align: center;
`;

export const IconButtonsWrapper = styled.div`
  display: flex;
  gap: 20px;
  ${({ scrolled }) =>
    scrolled &&
    css`
      position: fixed;
      top: 0;
      bottom: 0;
      width: 150px;
      left: -150px;
      z-index: 100;
    `}
`;

export const LinkInfo = styled(Text)`
  min-height: 30px;
  transition-property: opacity;
`;
