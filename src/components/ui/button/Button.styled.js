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
