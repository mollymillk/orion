import { Transition } from "react-transition-group";
import { useEffect, useState } from "react";

import { Button } from "../../ui/button/Button.styled";
import { Text, Heading } from "../../ui/text/text.styled";
import { TextWrapper, MainPhoto, DisplayWrapper, MainText } from "./MainDisplay.styled";

export const MainDisplay = ({animation}) => {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    // if (animation) {
      setAnimate(true);
      setTimeout(() => {
        setAnimate(false);
      }, 500);
    // }
  }, []);

  console.log('main', animation);
  return (
    <DisplayWrapper>
      <Transition in={animate} timeout={200}>
        {(state) => <MainPhoto state={state}/>}
      </Transition>
      <Transition in={animate} timeout={0}>
        {(state) => (
          <TextWrapper state={state}>
            <Heading>Делаем Волгоград экологичным</Heading>
            <Text>
            Наша миссия — сделать доступной сдачу вторсырья на переработку в нашем регионе и привить экологическую ответственность всем жителям Волгоградской области. Мы предлагаем людям и организациям возможность развивать экокультуру на благо города и экологии региона. Помогаем людям и компаниям стать более осознанными и экологичными, внедряя раздельный сбор и экопривычки.
            </Text>
            <Button buttonWidth={'200px'} font='20px'>Позвонить нам</Button>
          </TextWrapper>
        )}
      </Transition>
    </DisplayWrapper>
  );
};
