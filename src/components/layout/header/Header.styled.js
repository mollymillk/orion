import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  width: 100%;
  height: 10vh;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 21;
  background-color: #fff;
  box-shadow: 0px 9px 36px -19px rgba(34, 60, 80, 0.2);
  @media screen and (max-width: 820px) {
    justify-content: flex-start;
    padding-left: 20px;
  }
`;

export const LinksList = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  @media screen and (max-width: 820px) {
    display: none;
  }
`;

export const ListItem = styled.div`
  font-family: "Mplus-Medium";
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  a {
    font-weight: ${({ active }) => (active ? "700" : "500")};
  }
`;
