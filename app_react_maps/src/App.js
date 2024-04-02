import "./App.css";
import React from "react";
import MyIntro from "./Components/Section_Intro/Intro";
import Form from "./Components/Section_Contact/Section_Form/Form";
import Info from "./Components/Section_Contact/Section_Info/Info";
//Version Google Maps avec "@react-google-maps/api"
import MapContainer from "./Components/Section_Maps/MyMaps";
//Version Google Maps avec "@vis.gl/react-google-maps"
import SecondMapContainer from "./Components/Section_Maps/MySecondsMaps";
function App() {
  return (
    <div className="App">
    <div className="container">
      <div className="App-header">
        <MyIntro />
      </div>
      <div className="contact-section">
        <Form />
        <Info />
      </div>
    </div>

    <div className="myMaps">
      <h4>Visitez nos campus et HackerSpaces</h4>
      {/* <MapContainer /> */}
      <SecondMapContainer/>
    </div>
  </div>
  );
}

export default App;
