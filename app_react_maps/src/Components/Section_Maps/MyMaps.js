import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const libraries = ["places"];
const location = {
  // adresse: "Avenue Félix Éboué, x Rte des Brasseries, Dakar.",
  lat: 14.69195,
  lng: -17.43319,
};

const apiKey = "MYKEY";
// const MapContainer = () =>
const MapContainer = () => {
  const mapStyles = {
    width: "85vw",
    height: "80vh", // Suppression de l'espace supplémentaire
  };
  // Le hook useLoadScript est une fonctionnalité de la bibliothèque React Google Maps qui permet de charger de manière asynchrone le script de l'API Google Maps
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries,
  });
  if (loadError) {
    console.log("Eror loading maps");
  }

  if (!isLoaded) {
    console.log("loading maps");
    return <div>Loading...</div>;
  }

  return (
    <div>
      <GoogleMap
        zoom={18}
        mapContainerStyle={mapStyles}
        center={location}
        googleAPIKey={apiKey} // Utilisation de googleAPIKey pour définir la clé API
      >
        <Marker
          position={location}
          icon={{
            url: "/blue-dot.png",
            scaledSize: new window.google.maps.Size(50, 50),
          }}
          onClick={() => {
            console.log("Marqueur cliqué !");
          }}
          draggable={true}
          onDragEnd={(e) => {
            console.log("Nouvelle position :", e.latLng.lat(), e.latLng.lng());
          }}
          animation={window.google.maps.Animation.BOUNCE}
          label={{
            text: "New York City",
            color: "white",
            fontSize: "14px",
            fontWeight: "bold",
          }}
          title="Cliquez ici pour plus d'informations"
        />
      </GoogleMap>
    </div>
  );
};

export default MapContainer;

// import React from 'react';
// import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

// const libraries = ['places'];
// const mapContainerStyle = {
//   width: '100vw',
//   height: '100vh',
// };
// const center = {
//     lat: 14.69195,// default latitude
//     lng: -17.43319,// default longitude
// };

// const apiKey = 'key';

// const MapContainer = () => {
//     const { isLoaded, loadError } = useLoadScript({
//       googleMapsApiKey: apiKey,
//       libraries,
//     });

//     if (loadError) {
//       return <div>Error loading maps</div>;
//     }

//     if (!isLoaded) {
//       return <div>Loading maps</div>;
//     }

//     return (
//       <div>
//         <GoogleMap
//           mapContainerStyle={mapContainerStyle}
//           zoom={10}
//           center={center}
//         >
//           <Marker position={center} />
//         </GoogleMap>
//       </div>
//     );
//     }
// export default MapContainer;
