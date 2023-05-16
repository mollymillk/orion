import styled from "styled-components";
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
  gap: 5%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 45vw;
`;

export const List = styled(Text)`
  text-align: left;
  svg {
    width: 25px;
    height: 25px;
  }
`;

export const GLassImage = styled.img`
  border-radius: 5%;
  width: 25vw;
  height: 50vh;
  object-fit: cover;
`
