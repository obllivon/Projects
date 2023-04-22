// @ts-ignore
import React, { Component } from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export default class YMapsComponent extends Component {
  map: any = React.createRef();
  ymaps: any = React.createRef();


  render() {
    return (
        <YMaps query={{ apikey: "8b56a857-f05f-4dc6-a91b-bc58f302ff21" }}>
          <Map
              state={{ center: [42.879227, 74.618281], zoom: 16 }}
              instanceRef={this.map}
              onLoad={(ymapsInstance: any) => {
                this.ymaps.current = ymapsInstance;
                this.addSearchControlEvents();
              }}
              width="590px"
              height="313px"
              modules={["control.SearchControl"]}
          >
            <Placemark defaultGeometry={[42.879227, 74.618281]} />
          </Map>
        </YMaps>
    );
  }

  addSearchControlEvents = () => {
    const map = this.map.current;
    const ymaps = this.ymaps.current;

    const searchControl = new ymaps.control.SearchControl({
      options: {
        float: "left",
        floatIndex: 300,
        provider: "yandex#search",
        geoObjectStandardPreset: "islands#blueDotIcon",
        placeholderContent: "Поиск мест и адресов",
        maxWidth: 320,
        size: "large"
      }
    });
    map.controls.add(searchControl);

    searchControl.events.add("resultselect", function (e: any) {
      const searchCoords = searchControl.getResponseMetaData().SearchResponse
          .Point.coordinates;
      const display: string = searchControl.getResponseMetaData().SearchResponse
          .display;

      //console.log(searchControl.getResponseMetaData());

      if (display && display === "multiple") {
        map.setCenter([searchCoords[1], searchCoords[0]], 11);
      }
    });
  };
}