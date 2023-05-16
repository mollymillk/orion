import { Button } from "../../ui/button/Button.styled";
import { Heading, Text } from "../../ui/text/text.styled";
import {
  MainImage,
  DisplayWrapper,
  Container,
  List,
  GLassImage,
} from "./GlassReception.styled";
import { useState } from "react";
import glass from '../../../assets/img/glass.jpg';
import { UpMark } from "../../ui/icons/Icons";

export const GlassReception = () => {
  const [step, setStep] = useState(1);

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
            <UpMark/> Стеклотара (любые стеклянные бутылки, банки, пузырьки,
            флаконы)
            <br />
            <UpMark/> Бой стекла
            <br />
            <UpMark/>Листовое стекло
            <br />
            <UpMark/> Обычные оконные стекла без рамы
          </List>
        {/* </Container>
        <Container> */}
          <Heading>Не принимаем</Heading>
          <List>
            &#8226;Триплекс и стеклопакеты
            <br />
            &#8226;Автостекла
            <br />
          </List>
        </Container>
        </>
      )}
      <GLassImage src={glass}/>
    </DisplayWrapper>
  );
};
