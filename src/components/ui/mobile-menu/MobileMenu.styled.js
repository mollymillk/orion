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
  /* border-bottom: ${({ last }) => (last ? "none" : "2px solid #9abea1")}; */
  p {
    font-size: 20px;
    font-weight: 600;
    white-space: nowrap;
    text-align: left;
    color: #3a5a41;
  }
`;

export const List = styled.div`
  position: absolute;
  background-color: #fff;
  top: ${({ visible }) => (visible ? "63px" : "40px")};
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  opacity: ${({ visible }) => (visible ? "1" : "0")};
  transition-property: top, opacity, visibility;
  transition-duration: 0.5s, 1s, 1s;
  -webkit-box-shadow: 0px 1px 21px -3px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 1px 21px -3px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 1px 21px -3px rgba(34, 60, 80, 0.2);
`;
