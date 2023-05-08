import { useState } from "react";
import { DisplayWrapper } from "../index.styled";
import {
  Container,
  List,
  Wrapper,
  Row,
  SvgWrapper,
  ButtonWrapper,
} from "./PlasticAcceptance.styled";
import { Heading, Text } from "./../../ui/text/text.styled";
import {
  BackArrow,
  BottleFour,
  BottleOne,
  BottleThree,
  BottleTwo,
} from "../../ui/icons/Icons";
import { Button } from "../../ui/button/Button.styled";
import { Transition } from "react-transition-group";

export const PlasticAcceptance = ({ animation }) => {
  const [step, setStep] = useState(1);

  const handleSetNextStep = () => setStep(step + 1);
  const handleSetPrevStep = () => setStep(step - 1);

  return (
    <DisplayWrapper>
      {step === 1 && (
        <Transition in={animation && step === 1} timeout={200}>
          {(state) => (
            <Wrapper>
              <Row content={"start"} state={state}>
                <Container>
                  <Heading>Почему стоит сдавать пластик?</Heading>
                  <List>
                    Повторное использование отходов стеклянной тары и стеклобоя
                    позволяет сберечь и сэкономить природные ресурсы. Например,
                    использование 10% стеклянного боя способствует экономии газа
                    на 3%. Если человек, занимающийся производством стеклянной
                    продукции, будет использовать стеклянный бой, то он снизит
                    расход газа на 30%.
                    <br />
                    Помимо природного газа, повторное использование данных
                    отходов позволяет сэкономить тонны известняка, песка и соды.
                  </List>
                </Container>
                <SvgWrapper number={0}>
                  <BottleOne />
                </SvgWrapper>
                <SvgWrapper number={1}>
                  <BottleTwo />
                </SvgWrapper>
                <SvgWrapper number={2}>
                  <BottleThree />
                </SvgWrapper>
                <ButtonWrapper buttonWidth="300px">
                  <Button font="20px" onClick={handleSetNextStep}>
                    Что принимаем?
                  </Button>
                </ButtonWrapper>
              </Row>
            </Wrapper>
          )}
        </Transition>
      )}
      {step === 2 && (
        <Transition in={animation && step === 2} timeout={200}>
          {(state) => (
            <Wrapper>
              <Row state={state}>
                <Container>
                  <Heading>Принимаем</Heading>
                  <List>
                    &#8226; ПЭТ-бутылки до 5 литров (бесцветные, голубые,
                    коричневые, зеленые от питьевых продуктов, бутылки от
                    «омывающей жидкости», бутылки белого цвета от питьевых
                    продуктов)
                    <br />
                    &#8226;Бутылки, флаконы, канистры от бытовой химии, масла,
                    косметики и напитков и т.п.
                    <br />
                    &#8226;Пленка-стрейч, пленка ПВД, пленка тепличная
                    <br />
                    &#8226;Крышки от 19 л бутылок
                    <br />
                    &#8226;Полиэтиленовые крышки для банок
                  </List>
                </Container>
                <Container>
                  <Heading>Не принимаем</Heading>
                  <List>
                    &#8226;Пакеты целлофановые
                    <br />
                    &#8226;Сайдинг
                    <br />
                    &#8226;Игрушки
                    <br />
                    &#8226;Виды пластика под номерами 4, 5, 6, 7, 8
                  </List>
                  <ButtonWrapper buttonWidth="500px">
                    <Button
                      font="20px"
                      onClick={handleSetNextStep}
                      buttonWidth="250px"
                    >
                      Куда сдавать?
                    </Button>
                  </ButtonWrapper>
                </Container>
              </Row>
            </Wrapper>
          )}
        </Transition>
      )}
    </DisplayWrapper>
  );
};
