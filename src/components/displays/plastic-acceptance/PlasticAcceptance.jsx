import { useState } from "react";
import { DisplayWrapper } from "../index.styled";
import {
  Container,
  List,
  Wrapper,
  Row,
  SvgWrapper,
  ButtonWrapper,
  ListItem,
} from "./PlasticAcceptance.styled";
import { Heading, Text } from "./../../ui/text/text.styled";
import {
  BackArrow,
  BottleFour,
  BottleOne,
  BottleThree,
  BottleTwo,
  UpMark,
} from "../../ui/icons/Icons";
import { Button } from "../../ui/button/Button.styled";
import { Transition } from "react-transition-group";
import { Modal } from "../../ui/modal/Modal";

export const PlasticAcceptance = ({ animation }) => {
  const [step, setStep] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
                    <ListItem green>
                      <UpMark />
                      <p>
                        ПЭТ-бутылки до 5 литров (бесцветные, голубые,
                        коричневые, зеленые от питьевых продуктов, бутылки от
                        «омывающей жидкости», бутылки белого цвета от питьевых
                        продуктов)
                      </p>
                    </ListItem>
                    <ListItem green>
                      <UpMark />
                      <p>
                        Бутылки, флаконы, канистры от бытовой химии, масла,
                        косметики и напитков и т.п.
                      </p>
                    </ListItem>
                    <ListItem green>
                      <UpMark />
                      <p>Пленка-стрейч, пленка ПВД, пленка тепличная</p>
                    </ListItem>
                    <ListItem green>
                      <UpMark />
                      <p>Крышки от 19 л бутылок</p>
                    </ListItem>
                    <ListItem green>
                      <UpMark />
                      <p>Полиэтиленовые крышки для банок</p>
                    </ListItem>
                  </List>
                </Container>
                <Container>
                  <Heading>Не принимаем</Heading>
                  <List>
                    <ListItem red>
                      <UpMark />
                      <p>Полиэтиленовые крышки для банок</p>
                    </ListItem>
                    <ListItem red>
                      <UpMark />
                      <p>Сайдинг</p>
                    </ListItem>
                    <ListItem red>
                      <UpMark />
                      <p>Игрушки</p>
                    </ListItem>
                    <ListItem red>
                      <UpMark />
                      <p>Виды пластика под номерами 4, 5, 6, 7, 8</p>
                    </ListItem>
                  <ButtonWrapper buttonWidth="500px">
                    <Button
                      font="20px"
                      // onClick={handleSetNextStep}
                      buttonWidth="250px"
                    >
                      Куда сдавать?
                    </Button>
                    <Button
                      font="20px"
                      onClick={handleOpen}
                      buttonWidth="250px"
                    >
                      Правила
                    </Button>
                  </ButtonWrapper>
                  </List>
                </Container>
              </Row>
            </Wrapper>
          )}
        </Transition>
      )}
      <Modal isModalOpen={isModalOpen} handleHide={handleCancel}/>
    </DisplayWrapper>
  );
};
