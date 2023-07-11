import { IconButton } from "../../ui/button/Button.styled";
import { IconButtonsWrapper } from "./IconButtons.styled";
import { TelegramIcon, WhatAppIcon, VKIcon, PhoneIcon } from "../../ui/icons/Icons";

export const IconButtons = ({ animation, setHoveredLink }) => {
  return (
    <IconButtonsWrapper
      scrolled={animation}
      onMouseLeave={() => setHoveredLink("default")}
    >
      <IconButton
        buttonColor='#53A275'
        hoverColor='#4fb37a'
        font="20px"
        size='30px'
        phone
        scrolled={animation}
        onClick={() => window.open("tel:+79608857272")}>
        <PhoneIcon/>
      </IconButton>
      <IconButton
        buttonColor="#0088cc"
        hoverColor="#1298db"
        font="20px"
        onMouseEnter={() => setHoveredLink("telegram")}
        onClick={() => window.open("https://t.me/ecotaxivlg")}
      >
        <TelegramIcon/>
      </IconButton>
      <IconButton
        buttonColor="#25D366"
        hoverColor="#3be37a"
        font="20px"
        onMouseEnter={() => setHoveredLink("whatsapp")}
        onClick={() => window.open("//api.whatsapp.com/send?phone=89608857272")}
      >
        <WhatAppIcon />
      </IconButton>
      <IconButton
        buttonColor="#4C75A3"
        hoverColor="#588cc7"
        font="20px"
        onMouseEnter={() => setHoveredLink("vk")}
        onClick={() => window.open("https://vk.com/chistoebud")}
      >
        <VKIcon />
      </IconButton>
    </IconButtonsWrapper>
  );
};
