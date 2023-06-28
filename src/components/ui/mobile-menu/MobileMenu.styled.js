import styled from "styled-components";

export const Wrapper = styled.div`
  display: none;
  position: relative;
  @media screen and (max-width: 820px) {
    display: block;
  }
`;

export const MenuButton = styled.button`
  transform: ${({ rotated }) => (rotated ? "rotate(90deg)" : "rotated(0)")};
  opacity: ${({ rotated }) => (rotated ? "0.7" : "1")};
  transition-property: transform, opacity;
  transition-duration: 0.4s, 0.2s;
  svg {
    color: #3a5a40;
  }
`;

export const Item = styled.div`
  padding: 10px 20px;
  background: #fff;
  p {
    font-size: 20px;
    white-space: nowrap;
    text-align: left;
  }
`;

export const List = styled.div`
  position: absolute;
  background-color: #fff;
  top: ${({ visible }) => (visible ? "60px" : "40px")};
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  opacity: ${({ visible }) => (visible ? "1" : "0")};
  transition-property: top, opacity, visibility;
  transition-duration: 0.5s, 1s, 1s;
  -webkit-box-shadow: 44px 56px 52px -88px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 44px 56px 52px -88px rgba(0, 0, 0, 0.75);
  box-shadow: 44px 56px 52px -88px rgba(0, 0, 0, 0.75);
`;
