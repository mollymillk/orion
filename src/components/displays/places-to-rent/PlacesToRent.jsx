import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { MapWrapper, DisplayWrapper, PlacesWrapper, PlacesItem } from "./PlacesToRent.styled";
import { Heading } from "../../ui/text/text.styled";

export const PlacesToRent = () => {

  return (
    <DisplayWrapper>
      <MapWrapper>
        <Heading>Куда сдавать вторсырье?</Heading>
        <YMaps>
          <div>
            <Map
              defaultState={{ center: [48.760975, 44.648057], zoom: 10 }}
              className="map"
            >
              <Placemark geometry={[48.727028, 44.490619]}/>
          <Placemark geometry={[48.789878, 44.747375]}/>
          <Placemark geometry={[48.793511, 44.572536]}/>
            </Map>
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
          <p>ул. Генерала Ватутина, 28</p>
          </Heading>
        </PlacesItem>

      </PlacesWrapper>
    </DisplayWrapper>
  );
};
