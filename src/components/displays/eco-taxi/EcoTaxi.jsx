import { Transition } from "react-transition-group";
import { useEffect, useState } from "react";

import { ImageWrapper, DisplayWrapper, Text } from "./EcoTaxi.styled";
import { ItemWrapper, Image } from "./EcoTaxi.styled";
import { Heading } from "./../../ui/text/text.styled";
import cargo from '../../../assets/img/cargo.jpg';
import kids from '../../../assets/img/kids.jpg';
import events from '../../../assets/img/events.jpg';


export const EcoTaxi = ({ animation }) => {
  const [animate, setAnimate] = useState(false);
  const [visible, setVisible] = useState(null);

  useEffect(() => {
    if (animation) {
      setAnimate(true);
      setTimeout(() => {
        setAnimate(false);
      }, 500);
    }
  }, [animation]);

  return (
    <DisplayWrapper>
      <Transition in={animation} timeout={200}>
        {(state) => (
          <>
            <ItemWrapper
              state={state}
              onMouseEnter={() => setVisible("first")}
              onMouseLeave={() => setVisible(null)}
            >
              <ImageWrapper visible={visible === "first"} image={cargo}>
                {visible !== "first" && (
                  <Heading textColor="#fff">Приём вторсырья</Heading>
                )}
              </ImageWrapper>

              <Text visible={visible === "first"}>
                Принимаем ♻️10 видов вторсырья
              </Text>
            </ItemWrapper>
            <ItemWrapper
              state={state}
              onMouseEnter={() => setVisible("second")}
              onMouseLeave={() => setVisible(null)}
            >
              <ImageWrapper visible={visible === "second"} image={events}>
                {visible !== "second" && (
                  <Heading textColor="#fff">Просвещение</Heading>
                )}
              </ImageWrapper>

              <Text visible={visible === "second"}>
                Экоуроки для детей, экодворы для жителей
              </Text>
            </ItemWrapper>
            <ItemWrapper
              state={state}
              onMouseEnter={() => setVisible("third")}
              onMouseLeave={() => setVisible(null)}
            >
              <ImageWrapper visible={visible === "third"} image={kids}>
                {visible !== "third" && (
                  <Heading textColor="#fff">Мероприятия</Heading>
                )}
              </ImageWrapper>
              <Text visible={visible === "third"}>
                Экотимбилдинги для компаний, фестивали, выставки
              </Text>
            </ItemWrapper>
          </>
        )}
      </Transition>
    </DisplayWrapper>
  );
};
