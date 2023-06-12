import { Button } from "../../ui/button/Button.styled";
import { Heading, Text } from "../../ui/text/text.styled";
import {
  MainImage,
  DisplayWrapper,
  Container,
  List,
  GLassImage,
  ListItem,
} from "./MetalReception.styled";
import { useState } from "react";
import metal from "../../../assets/img/metal.png";
import { UpMark } from "../../ui/icons/Icons";
import { Modal } from "../../ui/modal/Modal";

export const MetalReception = () => {
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
            <Heading>Зачем сдавать металл на переработку?</Heading>
            <Text>
              Металлолом — это категория отходов и сплавов, которые вышли из
              эксплуатации. Но это не значит, что они больше не могут принести
              пользу!
            </Text>
            <List>
              ✅ В промышленности есть целое направление, которое занимается
              переработкой металла <br />
              ✅ Если она проводится правильно, то качество готового материала
              не будет отличаться от исходного. <br />
            </List>
            <Button buttonWidth="300px" font="20px" onClick={handleSetNextStep}>
              Что принимаем?
            </Button>
          </Container>
          <GLassImage src={metal} />
        </>
      )}
      {step === 2 && (
        <>
          <Container>
            <Heading>Принимаем</Heading>
            <List>
              <ListItem green>
                <UpMark />
                <p>Алюминиевые банки от напитков</p>
              </ListItem>
              <ListItem green>
                <UpMark /> <p>Фольга</p>
              </ListItem>
              <ListItem green>
                <UpMark />
                <p>Аэрозольные баллончики (проколотые или разрезанные)</p>
              </ListItem>
              <ListItem green>
                <UpMark />{" "}
                <p>
                  Консервные банки и металлические крышки (с любым покрытием
                  внутри)
                </p>
              </ListItem>
              <ListItem green>
                <UpMark />{" "}
                <p>Сковородки, кастрюли и т.п., в том числе и тефлоновые</p>
              </ListItem>
              <ListItem green>
                <UpMark />{" "}
                <p>
                  Металлические части от сантехники (краны, переходники, фитинги
                  и т.п.)
                </p>
              </ListItem>
            </List>
          </Container>
          <Container>
            <Heading>Не принимаем</Heading>
            <List>
              <ListItem red>
                <UpMark /> <p>Люки дорожные и обручайки</p>
              </ListItem>
              <ListItem red>
                <UpMark /> <p>Кладбищенский лом</p>
              </ListItem>
              <ListItem red>
                <UpMark />{" "}
                <p>Военные металлические предметы (снаряды, оружие и т.д.)</p>
              </ListItem>
              <ListItem red>
                <UpMark /> <p>Закрытые тары (баллоны, емкости и т.д.)</p>
              </ListItem>
            </List>
            <Button buttonWidth="300px" font="20px">
              Куда сдавать?
            </Button>
            <Button buttonWidth="300px" font="20px" onClick={showModal}>
              Правила
            </Button>
            <Modal isModalOpen={isModalOpen} handleHide={handleCancel} />
          </Container>
        </>
      )}
    </DisplayWrapper>
  );
};
