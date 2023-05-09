import { Transition } from "react-transition-group";
import { useEffect, useState } from "react";

import { Button, IconButton } from "../../ui/button/Button.styled";
import { Text, Heading } from "../../ui/text/text.styled";
import {
  TextWrapper,
  MainPhoto,
  DisplayWrapper,
  MainText,
  IconButtonsWrapper,
  LinkInfo
} from "./MainDisplay.styled";
import { TelegramIcon, VKIcon, WhatAppIcon } from "../../ui/icons/Icons";
import { IconButtons } from "../../layout/icon-buttons/IconButtons";

const linksInfo = {
  telegram: 'Написать в Telegram',
  whatsapp: 'Написать в WhatsApp',
  vk: 'Группа VK',
  default: ''
}

export const MainDisplay = ({ animation }) => {
  const [animate, setAnimate] = useState(true);
  const [hoveredLink, setHoveredLink] = useState("default");

  useEffect(() => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 500);
  }, []);


  return (
    <DisplayWrapper>
      <Transition in={animate} timeout={200}>
        {(state) => <MainPhoto state={state} />}
      </Transition>
      <Transition in={animate} timeout={0}>
        {(state) => (
          <TextWrapper state={state}>
            <Heading>Делаем Волгоград экологичным</Heading>
            <Text>
              Наша миссия — сделать доступной сдачу вторсырья на переработку в
              нашем регионе и привить экологическую ответственность всем жителям
              Волгоградской области. Мы предлагаем людям и организациям
              возможность развивать экокультуру на благо города и экологии
              региона. Помогаем людям и компаниям стать более осознанными и
              экологичными, внедряя раздельный сбор и экопривычки.
            </Text>
            <Button buttonWidth={"200px"} font="20px">
              Позвонить нам
            </Button>
            <IconButtons animation={false} setHoveredLink={setHoveredLink}/>
            <LinkInfo>{
              linksInfo[hoveredLink]
            }</LinkInfo>
          </TextWrapper>
        )}
      </Transition>
    </DisplayWrapper>
  );
};
