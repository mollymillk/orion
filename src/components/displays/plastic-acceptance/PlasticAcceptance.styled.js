import styled, { css } from "styled-components";
import { Text } from "../../ui/text/text.styled";

const positions = [
  {
    top: 10,
    left: 60,
  },
  {
    top: 20,
    left: 70,
  },
  {
    top: 10,
    left: 65,
  },
  {
    top: 15,
    left: 65,
  },
];

export const Row = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  opacity: ${({ state }) => (state === "entered" ? 1 : 0)};
  transform: translateX(${({ state }) => (state === "entered" ? 0 : -400)}px);
  transition-property: transform, opacity;
  transition-duration: 2s, 1s;
  @media screen and (max-width: 820px) {
    flex-direction: ${({ mobileRow }) => !mobileRow && "column"};
  }
`;

export const SvgWrapper = styled.div`
  position: absolute;
  top: ${({ number }) => positions[number].top + "vh"};
  left: ${({ number }) => positions[number].left + "vw"};
  -webkit-animation: ${({ number }) => `spin ${number + 1}s linear infinite`};
  -moz-animation: ${({ number }) => `spin ${number + 1}s linear infinite`};
  animation: ${({ number }) => `spin ${number + 1}s linear infinite`};
  svg {
    width: 120px;
  }
  @-moz-keyframes spin {
    50% {
      -moz-transform: rotate(20deg);
    }
  }
  @-webkit-keyframes spin {
    50% {
      -webkit-transform: rotate(20deg);
    }
  }
  @keyframes spin {
    50% {
      -webkit-transform: rotate(20deg);
      transform: rotate(20deg);
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 45vw;
  justify-self: flex-end;
  padding: 4px;
  @media screen and (max-width: 820px) {
    max-width: ${({ large }) => (large ? "85vw" : "50vw")};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5%;
  justify-content: center;
  height: 100vh;
  align-items: center;
  /* @media screen and (max-width: 820px) {
    gap: 1vw;
  } */
`;
export const List = styled(Text)`
  text-align: left;
  font-size: 20px;
  @media screen and (max-width: 820px) {
    font-size: 12px;
  }
`;

export const ButtonWrapper = styled.div`
  height: 100%;
  display: flex;
  gap: 10px;
  flex-direction: column;
  margin-top: 10vh;
  > button {
    width: 275px;
  }
  @media screen and (max-width: 820px) {
    margin-top: 5vh;
    > button {
      width: 100%;
    }
  }
`;

export const TextWrapper = styled.div`
  display: flex;
`;

export const DisplayImage = styled.img`
  width: 10vw;
  height: 10vw;
  display: none;
  @media screen and (max-width: 820px) {
    margin-left: 1vw;
    width: 31vw;
    height: 43vw;
    border-radius: 5%;
    object-fit: cover;
    display: block;
  }
`;

export const ListItem = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  p {
    max-width: 40vw;
  }
  svg {
    width: 20px;
    height: 20px;
    margin-top: 10px;
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
`;
