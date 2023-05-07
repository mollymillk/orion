import styled from "styled-components";

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
    background: ${({background}) => background || 'red'};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;