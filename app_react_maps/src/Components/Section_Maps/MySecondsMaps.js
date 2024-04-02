import React from "react";

//Modules à installer depuis la ligne cmd C:\Users\awndoye\Documents\GOMYCODE-DEV-FULL-STACK\CheckPoint_React_Maps\app_react_maps>npm install @vis.gl/react-google-maps
import {
  APIProvider,
  AdvancedMarker,
  Map,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
const location = {
  // adresse: "Avenue Félix Éboué, x Rte des Brasseries, Dakar.",
  lat: 14.69195,
  lng: -17.43319,
};

const SecondMapContainer = () => {

  return (
    // <div>
    <APIProvider apiKey="MYKEY">
    <div style={{ width: "85vw", height: "80vh" }}>
      <Map zoom={10} defaultCenter={location} mapId={"MYIDCARD"}>
      
        <AdvancedMarker
        position={location}
          latitude={location.lat}
          longitude={location.lng}
          offsetLeft={-20}
          offsetTop={-10}
          draggable={true}
          onDragEnd={(event) => {
            console.log("New position:", event.lngLat);
          }}
        >
          <Pin background={"gold"} />
          <InfoWindow>
            <div>Information Window Content</div>
          </InfoWindow>
        </AdvancedMarker>
      </Map>
    </div>
  </APIProvider>
    // </div>
  );
};

export default SecondMapContainer;