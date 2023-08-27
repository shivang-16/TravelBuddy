import React, { useState } from "react";
import Map from "./Map";
import Sidebar from "./Sidebar";

const Travel = () => {
  const [place, setPlace] = useState("");
  const [coordinates, setCoordinates] = useState("");
  const [type, setType] = useState("");
  const [rating, setRating] = useState("");
  const [hotelCoordinates, setHotelCoordinates] = useState('');
  const [hotelDetails, setHotelDetails] = useState('')
  return (
    <div className="travel-page-area">
      <div className="sidebar-area travel-page-section">
        <Sidebar
          place={place}
          setPlace={setPlace}
          type={type}
          setType={setType}
          rating={rating}
          setRating={setRating}
          setCoordinates={setCoordinates}
          setHotelCoordinates={setHotelCoordinates}
          setHotelDetails={setHotelDetails}
        />
      </div>
      <div className="map-area travel-page-section">
        <Map coordinates={coordinates} 
             hotelCoordinates={hotelCoordinates}
             hotelDetails={hotelDetails}
              />
      </div>
    </div>
  );
};

export default Travel;
