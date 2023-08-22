import React, { useState } from "react";
import Map from "./Map";
import Sidebar from "./Sidebar";

const Travel = () => {
  const [place, setPlace] = useState("");
  const [coordinates, setCoordinates] = useState("");
  const [type, setType] = useState("");

  return (
    <div className="travel-page-area">
      <div className="sidebar-area travel-page-section">
        <Sidebar
          place={place}
          setPlace={setPlace}
          type={type}
          setType={setType}
          setCoordinates={setCoordinates}
        />
      </div>
      <div className="map-area travel-page-section">
        <Map coordinates={coordinates} />
      </div>
    </div>
  );
};

export default Travel;
