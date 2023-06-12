import { Button } from "../../ui/button/Button.styled";
import { Heading, Text } from "../../ui/text/text.styled";
import {
  MainImage,
  DisplayWrapper,
  Container,
  List,
  GLassImage,
  ListItem,
  ButtonsWrapper,
} from "./WastePaper.styled";
import { useState } from "react";
import paper from "../../../assets/img/paper.jpg";
import { UpMark } from "../../ui/icons/Icons";
import { Modal } from "../../ui/modal/Modal";

export const WastePaper = () => {
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
        <>
          <Container>
            <Heading>Зачем сдавать макулатуру на переработку?</Heading>
            <Text>
              Сбор макулатуры и утилизация бумаги позволяют значительно снизить
              объемы вырубаемой древесины. Не всегда при производстве требуется
              первоклассная целлюлоза, ряд товаров можно выпускать из бумажных
              отходов.
            </Text>
            <List>
              ✅ 1 тонна макулатуры заменяет около 4 кубических метров
              древесины, или 100 кг макулатуры спасают 1 дерево) и позволяет
              уменьшить вырубку лесов.
            </List>
            <Button buttonWidth="300px" font="20px" onClick={handleSetNextStep}>
              Что принимаем?
            </Button>
          </Container>
        </>
      )}
      {step === 2 && (
        <>
          <Container>
            <Heading>Принимаем</Heading>
            <List>
              <ListItem green>
                <UpMark />
                <p>Бумага (можно с рисунком)</p>
              </ListItem>
              <ListItem green>
                <UpMark /> <p>Бумага после шредера</p>
              </ListItem>
              <ListItem green>
                <UpMark />
                <p>Журналы, газеты</p>
              </ListItem>
              <ListItem green>
                <UpMark /> <p>Книги, тетради, альбомы</p>
              </ListItem>
              <ListItem green>
                <UpMark /> <p>Листовки, брошюры</p>
              </ListItem>
              <ListItem green>
                <UpMark />{" "}
                <p>
                  Гофрированный картон (упаковка, коробки и т.д.) в разобранном
                  виде
                </p>
              </ListItem>
            </List>
            <Heading>Не принимаем</Heading>
            <List>
              <ListItem red>
                <UpMark />{" "}
                <p>Все виды бумаги с наличием органических остатков</p>
              </ListItem>
            </List>
            <ButtonsWrapper>
              <Button buttonWidth="250px" font="20px">
                Куда сдавать?
              </Button>
              <Button buttonWidth="250px" font="20px" onClick={showModal}>
                Правила
              </Button>
            </ButtonsWrapper>
            <Modal isModalOpen={isModalOpen} handleHide={handleCancel} />
          </Container>
        </>
      )}
      <GLassImage src={paper} />
    </DisplayWrapper>
  );
};
