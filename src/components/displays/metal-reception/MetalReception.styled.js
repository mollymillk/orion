import styled, { css } from "styled-components";
import { Text } from "../../ui/text/text.styled";

export const MainImage = styled.div`
  transition-property: transform, opacity;
  transition-duration: 3s, 5s;
  width: 80%;
  height: 70%;
  border-radius: 20% 20% 20% 20% / 50% 50% 50% 50%;
  opacity: ${({ state }) => (state === "entered" ? 0 : 1)};
  transform: translateX(${({ state }) => (state === "entered" ? -400 : 0)}px);
  background-color: grey;
`;

export const DisplayWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #e5e3dc;
  display: flex;
  align-items: center;
  justify-content: center;
  /* gap: 5%; */
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  @media screen and (max-width: 820px) {
    align-items: flex-start;
    padding-top: 4vh;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 45vw;
  @media screen and (max-width: 820px) {
    width: 90vw;
    > button {
      width: 171px;
    }
  }
`;

export const List = styled(Text)`
  text-align: left;
  svg {
    width: 25px;
    height: 25px;
  }
`;

export const ListItem = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  svg {
    ${({ green }) =>
      green &&
      css`
        color: #4c956c;
      `}
    ${({ red }) =>
      red &&
      css`
        color: #f25251;
      `}
  }
  @media screen and (max-width: 820px) {
    p {
      width: 100%;
    }
  }
`;

export const GLassImage = styled.img`
  border-radius: 5%;
  width: 25vw;
  height: 50vh;
  object-fit: cover;
  margin-left: 40px;
  @media screen and (max-width: 820px) {
    display: none;
  }
`;

export const MobileGLassImage = styled.img`
  display: none;
  border-radius: 5%;
  object-fit: cover;
  width: 40%;
  height: 32vh;
  @media screen and (max-width: 820px) {
    display: block;
  }
`;

export const HeadingContainer = styled.div`
  @media screen and (max-width: 820px) {
    display: flex;
    gap: 10px;
  }
`;
