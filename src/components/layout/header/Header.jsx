import { Link } from "react-scroll";
import { ListItem } from "./Header.styled";

import { HeaderWrapper, LinksList } from "./Header.styled";

export const Header = () => {
  return (
    <HeaderWrapper>
      <LinksList>
        <ListItem>
          <Link to="taxi" spy={true} smooth={true} duration={500}>Эко-такси</Link>
        </ListItem>
        <ListItem>
          <Link to="glass" spy={true} smooth={true} duration={500}>Прием стекла</Link>
        </ListItem>
        <ListItem>
          <Link to="plastic" spy={true} smooth={true} duration={500}>Прием пластика</Link>
        </ListItem>
        <ListItem>
          <Link to="metal" spy={true} smooth={true} duration={500}>Прием металла</Link>
        </ListItem>
        <ListItem>
          <Link to="paper" spy={true} smooth={true} duration={500}>Прием макулатуры</Link>
        </ListItem>
        <ListItem>
          <Link to="places" spy={true} smooth={true} duration={500}>Куда сдавать?</Link>
        </ListItem>
      </LinksList>
    </HeaderWrapper>
  );
};
