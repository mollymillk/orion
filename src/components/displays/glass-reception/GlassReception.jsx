import { Button } from "../../ui/button/Button.styled";
import { Heading, Text } from "../../ui/text/text.styled";
import {
  MainImage,
  DisplayWrapper,
  Container,
  List,
  GLassImage,
  ListItem,
} from "./GlassReception.styled";
import { useState } from "react";
import glass from "../../../assets/img/glass.jpg";
import { UpMark } from "../../ui/icons/Icons";
import { Modal } from "../../ui/modal/Modal";

export const GlassReception = () => {
  const [step, setStep] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSetNextStep = () => setStep(step + 1);
  return (
    <DisplayWrapper>
      {step === 1 && (
        <Container>
          <Heading>Зачем сдавать стекло на переработку?</Heading>
          <Text>
            Переработка стекла — важная отрасль в утилизации отходов,
            необходимая для защиты окружающей среды и сохранения природных
            ресурсов.
          </Text>
          <List>
            🔻 Стекло не подвергается биологическому разложению <br />
            🔻 Разбитое стекло, попавшее в окружающую среду, представляет угрозу
            для животных и людей <br />
            🔻 Засоренная стеклом почва неблагоприятная для роста растительности
          </List>
          <Button buttonWidth="300px" font="20px" onClick={handleSetNextStep}>
            Что принимаем?
          </Button>
        </Container>
      )}
      {step === 2 && (
        <>
          <Container>
            <Heading>Принимаем</Heading>
            <List>
              <ListItem green>
                <UpMark />
                <p>
                  Стеклотара (любые стеклянные бутылки, банки, пузырьки,
                  флаконы)
                </p>
              </ListItem>
              <ListItem green>
                <UpMark /> <p>Бой стекла</p>
              </ListItem>
              <ListItem green>
                <UpMark />
                <p>Листовое стекло</p>
              </ListItem>
              <ListItem green>
                <UpMark /> <p>Обычные оконные стекла без рамы</p>
              </ListItem>
            </List>
            <Heading>Не принимаем</Heading>
            <List>
              <ListItem red>
                <UpMark /> <p>Триплекс и стеклопакеты</p>
              </ListItem>
              <ListItem red>
                <UpMark /> <p>Автостекла</p>
              </ListItem>
            </List>
            <Button buttonWidth="300px" font="20px">
              Куда сдавать?
            </Button>
            <Button buttonWidth="300px" font="20px" onClick={showModal}>
              Правила
            </Button>
            <Modal isModalOpen={isModalOpen} handleHide={handleCancel}/>
          </Container>
        </>
      )}
      <GLassImage src={glass} />
    </DisplayWrapper>
  );
};
