import { CloseIcon } from "../icons/Icons";
import { Heading, Text } from "../text/text.styled";
import { ButtonWrapper, CloseButton, ContentWrapper, ModalContainer, Wrapper } from "./Modal.styled";

export const Modal = ({isModalOpen, handleHide}) => {

  return (
    <Wrapper active={isModalOpen} onClick={handleHide}>
      <ModalContainer>
        <ButtonWrapper>
            <CloseButton onClick={handleHide}>
                <CloseIcon/>
            </CloseButton>
        </ButtonWrapper>
        <ContentWrapper>
        <Heading>Мусор принимается только в чистом виде!</Heading>
        <Text>
          Все бутылки должны быть чистыми и лишены стороннего запаха. Бутылки из
          под масла должны быть хорошо промыты. Вся сдаваемая на переработку
          стеклотара должна быть лишена каких-либо органических примесей.
        </Text>
        </ContentWrapper>
      </ModalContainer>
    </Wrapper>
  );
};
