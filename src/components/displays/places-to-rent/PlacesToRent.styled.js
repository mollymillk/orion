import styled from "styled-components";

export const DisplayWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background: #e5e3dc;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  justify-content: center;
  gap: 30px;
  @media screen and (max-width: 820px) {
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
`;

export const MapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40vw;
  height: 100%;
  gap: 30px;
  .map {
    width: 40vw;
    height: 50vh;
  }
  @media screen and (max-width: 820px) {
    width: 100%;
    height: unset;
    padding: 16px;
    .map {
      width: 90vw;
      height: 35vh;
    }
  }
`;

export const PlacesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  @media screen and (max-width: 820px) {
    padding: 16px;
    gap: 10px;
  }
`;

export const PlacesItem = styled.div`
  display: flex;
  text-align: left;
  h1 {
    font-size: 20px;
    text-align: left;
  }
  p {
    font-size: 17px;
  }
  @media screen and (max-width: 820px) {
    h1 {
    font-size: 16px;
    text-align: left;
  }
  p {
    font-size: 12px;
  }
  }
`;