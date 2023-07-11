import styled, { css } from "styled-components";

export const DisplayWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #e5e3dc;
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  margin: auto;
  .slide-container {
    max-width: 30vw;
    margin: 1vw 0 0 15vw;
  }
  @media screen and (max-width: 820px) {
    padding-top: 25vh;
    .slide-container {
      max-width: 70vw;
      margin: 1vw 0 0 15vw;
    }
  }
`;

export const Button = styled.button`
  margin: 10px auto;
  background-color: #2c6e49;
  border-radius: 60px;
  height: 40px;
  width: 200px;
  color: #fff;
  -webkit-box-shadow: 7px 6px 11px -10px rgba(0, 0, 0, 0.77);
  -moz-box-shadow: 7px 6px 11px -10px rgba(0, 0, 0, 0.77);
  box-shadow: 7px 6px 11px -10px rgba(0, 0, 0, 0.77);
  :hover {
    -webkit-box-shadow: 7px 6px 11px -6px rgba(0, 0, 0, 0.77);
    -moz-box-shadow: 7px 6px 11px -6px rgba(0, 0, 0, 0.77);
    box-shadow: 7px 6px 11px -6px rgba(0, 0, 0, 0.77);
  }
  transition: box-shadow, 0.3s;
`;
