import { useState } from "react";
import { DisplayWrapper } from "../index.styled";
import {
  Container,
  List,
  Wrapper,
  Row,
  ButtonWrapper,
  ListItem,
  TextWrapper,
  DisplayImage,
} from "./PlasticAcceptance.styled";
import { Heading } from "./../../ui/text/text.styled";
import {
  UpMark,
} from "../../ui/icons/Icons";
import { Button } from "../../ui/button/Button.styled";
import { Transition } from "react-transition-group";
import { Modal } from "../../ui/modal/Modal";
import plastic from "../../../assets/img/plastic.jpg";
import { Link } from "react-scroll";

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
                <Container large>
                  <Heading>Почему стоит сдавать пластик?</Heading>
                  <TextWrapper>
                    <List>
                      Переработка пластика это актуальное направление в борьбе с
                      растущими свалками. Пластиковые отходы сегодня стали
                      серьезной проблемой.
                      Каждый человек ежегодно
                    выбрасывает на свалки около 88 кг полимерных изделий:
                    посуду, пластмассовые бутылки и другую тару.
                    </List>
                    <DisplayImage src={plastic} />
                  </TextWrapper>
                  <List>
                    Умножив размеры отходов от одного человека на общее
                    население планеты, становится понятным, почему полимеры так
                    опасны для жизни на Земле в целом. 
                  </List>
                  <List>
                  <ListItem red>
                      <UpMark />
                      <p>Полиэтиленовые пакеты сохраняются до 20 лет</p>
                    </ListItem>
                    <ListItem red>
                      <UpMark />
                      <p>Пластмассовые изделия могут сохраняться столетиями</p>
                    </ListItem>
                  </List>
                  <ButtonWrapper buttonWidth="300px">
                  <Button font="20px" onClick={handleSetNextStep}>
                    Что принимаем?
                  </Button>
                </ButtonWrapper>
                </Container>
              </Row>
            </Wrapper>
          )}
        </Transition>
      )}
      {step === 2 && (
        <Transition in={animation && step === 2} timeout={200}>
          {(state) => (
            <Wrapper>
              <Row state={state} mobileRow>
                <Container >
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
                        buttonWidth="250px"
                      >
                        <Link to="places" spy={true} smooth={true} duration={500}>

                        Куда сдавать?
                        </Link>
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
      <Modal isModalOpen={isModalOpen} handleHide={handleCancel} />
    </DisplayWrapper>
  );
};
