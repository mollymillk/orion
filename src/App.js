import { RemoveScroll } from "react-remove-scroll";
import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { useEffect, useState } from "react";

import { Header } from "./components/layout/header/Header";
import { MainDisplay } from "./components/displays/main-display/MainDisplay";
import { MetalReception } from "./components/displays/metal-reception/MetalReception";
import { EcoTaxi } from "./components/displays/eco-taxi/EcoTaxi";
import { GlassReception } from "./components/displays/glass-reception/GlassReception";
import { PlacesToRent } from "./components/displays/places-to-rent/PlacesToRent";
import { PlasticAcceptance } from "./components/displays/plastic-acceptance/PlasticAcceptance";
import { WastePaper } from "./components/displays/waste-paper/WastePaper";
import { PageWrapper } from "./global/styles/global.styled";
import useWindowDimensions from "./hooks/useWindowDimensions";

export const App = () => {
  const elems = ['main', 'taxi', 'glass', 'plastic', 'metal', 'paper', 'places']
  const [scrollPosition, setScrollPosition] = useState(0);
  const { height } = useWindowDimensions();

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const currentElem = Math.round(scrollPosition / height)

  return (
    <PageWrapper>
      <Header />
      <Element name="main">
        <MainDisplay animation={currentElem === elems.indexOf('main')}/>
      </Element>
      <Element name="taxi">
        <EcoTaxi animation={currentElem === elems.indexOf('taxi')}/>
      </Element>
      <Element name="glass">
        <GlassReception />
      </Element>
      <Element name="plastic">
        <PlasticAcceptance />
      </Element>
      <Element name="metal">
        <MetalReception />
      </Element>
      <Element name="paper">
        <WastePaper />
      </Element>
      <Element name="places">
        <PlacesToRent />
      </Element>
    </PageWrapper>
  );
};
