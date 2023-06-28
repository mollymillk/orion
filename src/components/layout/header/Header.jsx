import { Link } from "react-scroll";
import { ListItem } from "./Header.styled";

import { HeaderWrapper, LinksList } from "./Header.styled";
import { MobileMenu } from "../../ui/mobile-menu/MobileMenu";

export const Header = ({elems, currentElem}) => {
  return (
    <HeaderWrapper>
      <LinksList>
        <ListItem active={currentElem === elems.indexOf('taxi')}>
          <Link to="taxi" spy={true} smooth={true} duration={500}>Эко-такси</Link>
        </ListItem>
        <ListItem active={currentElem === elems.indexOf('glass')}>
          <Link to="glass" spy={true} smooth={true} duration={500}>Прием стекла</Link>
        </ListItem>
        <ListItem active={currentElem === elems.indexOf('plastic')}>
          <Link to="plastic" spy={true} smooth={true} duration={500}>Прием пластика</Link>
        </ListItem>
        <ListItem active={currentElem === elems.indexOf('metal')}>
          <Link to="metal" spy={true} smooth={true} duration={500}>Прием металла</Link>
        </ListItem>
        <ListItem active={currentElem === elems.indexOf('paper')}>
          <Link to="paper" spy={true} smooth={true} duration={500}>Прием макулатуры</Link>
        </ListItem>
        <ListItem active={currentElem === elems.indexOf('places')}>
          <Link to="places" spy={true} smooth={true} duration={500}>Куда сдавать?</Link>
        </ListItem>
      </LinksList>
      <MobileMenu/>
    </HeaderWrapper>
  );
};
