import styled from "styled-components";

export const Button = styled.button`
  display: block;
  padding: 0.684rem 1rem;
  color: #fff;
  transition: opacity 0.4s ease;
  border-radius: 60px;
  font-size: ${({font}) => font || '14px'};
  font-weight: 500;
  background-color: #2C6E49;
  width: ${({buttonWidth}) => buttonWidth};
  max-height: 50px;
  &:hover {
    opacity: 0.7;
  }
`;

export const IconButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({buttonColor}) => buttonColor};
  transition: background 0.4s ease;
  &:hover {
    background: ${({hoverColor}) => hoverColor};
  }
  display: ${({phone, scrolled}) => phone && !scrolled ? 'none' : 'flex'};
  justify-content: center;
  align-items: center;
  svg {
    width: ${({size}) => size || '50px'};
    height: ${({size}) => size || '50px'};
  }
`