import { IconButton } from "../../ui/button/Button.styled";
import { IconButtonsWrapper } from "./IconButtons.styled";
import { TelegramIcon, WhatAppIcon, VKIcon } from "../../ui/icons/Icons";

export const IconButtons = ({ animation, setHoveredLink }) => {
  return (
    <IconButtonsWrapper
      scrolled={animation}
      onMouseLeave={() => setHoveredLink("default")}
    >
      <IconButton
        buttonColor="#0088cc"
        hoverColor="#1298db"
        font="20px"
        onMouseEnter={() => setHoveredLink("telegram")}
      >
        <TelegramIcon />
      </IconButton>
      <IconButton
        buttonColor="#25D366"
        hoverColor="#3be37a"
        font="20px"
        onMouseEnter={() => setHoveredLink("whatsapp")}
      >
        <WhatAppIcon />
      </IconButton>
      <IconButton
        buttonColor="#4C75A3"
        hoverColor="#588cc7"
        font="20px"
        onMouseEnter={() => setHoveredLink("vk")}
      >
        <VKIcon />
      </IconButton>
    </IconButtonsWrapper>
  );
};
