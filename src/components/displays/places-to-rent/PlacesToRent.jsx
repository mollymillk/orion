import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { MapWrapper, DisplayWrapper, PlacesWrapper, PlacesItem } from "./PlacesToRent.styled";
import { Heading } from "../../ui/text/text.styled";

export const PlacesToRent = () => {

  return (
    <DisplayWrapper>
      <MapWrapper>
        <Heading>Куда сдавать вторсырье?</Heading>
        <YMaps>
          <Placemark geometry={[55.75, 37.61]}/>
          <div>
            <Map
              defaultState={{ center: [55.75, 37.57], zoom: 9 }}
              className="map"
            />
          </div>
        </YMaps>
      </MapWrapper>
      <PlacesWrapper>
        <PlacesItem>
          <Heading>
          АНО Чистое будущее
          <p>Джаныбековская, 2Б</p>
          </Heading>
        </PlacesItem>
        <PlacesItem>
          <Heading>
          ВещиТут
          <p>Молодежная, 8</p>
          </Heading>
        </PlacesItem>
        <PlacesItem>
          <Heading>
          Пункт приема металла, стекла, макулатуры и ПЭТ
          <p>ул. генерала Ватутина, 28</p>
          </Heading>
        </PlacesItem>

      </PlacesWrapper>
    </DisplayWrapper>
  );
};
