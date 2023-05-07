import styled from "styled-components";
import { Text } from "../../ui/text/text.styled";

const positions = [
  {
    top: 10,
    left: 60,
  },
  {
    top: 20,
    left: 70,
  },
  {
    top: 10,
    left: 65,
  },
  {
    top: 15,
    left: 65,
  },
];

export const Row = styled.div`
  position: relative;
  display: flex;
  justify-content: ${({ content }) => `flex-${content}`};
`;

export const SvgWrapper = styled.div`
  position: absolute;
  top: ${({ number }) => positions[number].top + "vh"};
  left: ${({ number }) => positions[number].left + "vw"};
  -webkit-animation:${({number}) => `spin ${number+1}s linear infinite`};
  -moz-animation:${({number}) => `spin ${number+1}s linear infinite`};
  animation:${({number}) => `spin ${number+1}s linear infinite`};
  svg {
    width: 120px;
  }
  @-moz-keyframes spin {
    50% {
      -moz-transform: rotate(20deg);
    }
  }
  @-webkit-keyframes spin {
    50% {
      -webkit-transform: rotate(20deg);
    }
  }
  @keyframes spin {
    50% {
      -webkit-transform: rotate(20deg);
      transform: rotate(20deg);
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 40vw;
  justify-self: flex-end;
  margin: 0 0 0 10vw;
  padding: 4px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5%;
  justify-content: center;
  height: 100vh;
  width: 90vw;

  /* align-items: center; */
`;
export const List = styled(Text)`
  text-align: left;
  font-size: 25px;
  /* background: #fff; */
`;
