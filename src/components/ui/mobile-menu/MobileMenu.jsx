import { useState, useRef } from "react";
import { Link } from "react-scroll";
import { CloseIcon, MenuIcon } from "../icons/Icons";
import { MenuButton, Wrapper, Item, List } from "./MobileMenu.styled";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import {Text} from '../text/text.styled';

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setIsOpen(false));
  return (
    <Wrapper ref={ref}>
      <MenuButton rotated={isOpen} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <CloseIcon/> : <MenuIcon />}
      </MenuButton>
      <List visible={isOpen}>
        <Item>
        <Link to="taxi" spy={true} smooth={true} duration={500}>
            <Text>Эко-такси</Text>
            </Link>
        </Item>
        <Item>
        <Link to="glass" spy={true} smooth={true} duration={500}>
            <Text>Прием стекла</Text>
            </Link>
        </Item>
        <Item>
        <Link to="plastic" spy={true} smooth={true} duration={500}>
            <Text>Прием пластика</Text>
            </Link>
        </Item>
        <Item>
        <Link to="metal" spy={true} smooth={true} duration={500}>
            <Text>Прием металла</Text>
            </Link>
        </Item>
        <Item>
        <Link to="paper" spy={true} smooth={true} duration={500}>
            <Text>Прием макулатуры</Text>
            </Link>
        </Item>
        <Item last>
        <Link to="places" spy={true} smooth={true} duration={500}>
            <Text>Куда сдавать?</Text>
            </Link>
        </Item>
      </List>
    </Wrapper>
  );
};
