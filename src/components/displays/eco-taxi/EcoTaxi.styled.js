import styled from "styled-components";


export const ImageWrapper = styled.div`
  height: 300px;
  width: 300px;
  border-radius: 25px;
  background-color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({image}) => `url(${image})`};
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.2);
  background-blend-mode: ${({visible}) => visible ? 'none' : 'darken'};
`;
export const ItemWrapper = styled.div`
  transition-property: transform, opacity;
  transition-duration: 2s, 1s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  max-width: 300px;
  opacity: ${({ state }) => (state === "entered" ? 1 : 0)};
  /* display: ${({ state }) => (state === "entering" || state === "entered" ? 'flex' : 'none')}; */
  transform: translateX(${({ state }) => (state === "entered" ? 0 : -400)}px);
  cursor: pointer;
  p {
    text-align: center;
  }
`;

export const DisplayWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  height: 100vh;
  background: #EEECE8;
  padding: 50px;
`;

export const Text = styled.p`
  transition-property: opacity;
  transition-duration: 1s;
  font-family: "Mplus-Regular";
  font-size: 20px;
  text-align: center;
  opacity: ${({visible}) => visible ? '1' : '0'};
  filter: unset;
  height: 90px;
`;
