import { DisplayWrapper, Button } from "./Shop.styled";
import { Heading } from "../../ui/text/text.styled";
import p1 from "../../../assets/img/p1.jpg";
import p2 from "../../../assets/img/p2.jpg";
import p3 from "../../../assets/img/p3.jpg";
import p4 from "../../../assets/img/p4.jpg";
import p5 from "../../../assets/img/p5.jpg";
import p6 from "../../../assets/img/p6.jpg";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const images = [p1, p2, p3, p4, p5, p6];
const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "65vh",
};

export const Shop = () => {
  return (
    <DisplayWrapper>
      <Heading>Плитка из вторсырья</Heading>
      <Button omClick={()=>window.open('https://t.me/ECOCOVERindustri')}>Заказать</Button>
      <div className="slide-container">
        <Slide>
          {images.map((slideImage, index) => (
            <div key={index} className="each-slide-effect">
              <div
                style={{ ...divStyle, backgroundImage: `url(${slideImage})` }}
              >
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </DisplayWrapper>
  );
};
