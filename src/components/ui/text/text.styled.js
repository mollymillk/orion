import styled from "styled-components";

export const Heading = styled.h1`
    font-size: 30px;
    font-family: 'Mplus-Bold';
    text-align: center;
    color: ${({textColor}) => textColor || '#293D33'};
`

export const Text = styled.p`
    font-family: 'Mplus-Regular';
    font-size: 20px;
    text-align: center;
`