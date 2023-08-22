import React, { useState, useEffect } from "react";
import { getHotel } from "../apis/Hotel";

const Sidebar = ({ place, setPlace, type, setType, setCoordinates }) => {
  const [hotel, setHotel] = useState([]);

  const handleSearch = async () => {
    if (place) {
      const bingMapApiKey =
        "AqGrMcJvoHh0AwTxWEVhPsT4sdT5xxgOVRe_T-CUas8poD6tGAQuuMLGDBDHDMDj";
      try {
        console.log("fetching coord...");
        const response = await fetch(
          `http://dev.virtualearth.net/REST/v1/Locations?q=${encodeURIComponent(
            place,
          )}&key=${bingMapApiKey}`,
        );

        const coordinates = await response.json();
        const location =
          coordinates.resourceSets[0].resources[0].point.coordinates;
        const [latitude, longitude] = location;
        console.log(location);

        // Fetching hotel data
        const hotelData = await getHotel(latitude, longitude, type);
        setHotel(hotelData);
        console.log(hotelData);

        setCoordinates({ latitude, longitude });

        // console.log(hotelCoordinates)
      } catch (error) {
        console.log(error);
        setHotel([]);
      }
    }
  };

  useEffect(() => {
    handleSearch();
  }, [type, place]);

  return (
    <>
      <div className="side-bar-card-area">
        <div className="search-bar">
          <input
            type="search"
            placeholder="Enter latitude"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>

          <div className="dropdown">
            <select
              id="fruits"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="restaurants">Restaurants</option>
              <option value="hotels">Hotels</option>
              <option value="attractions">Attraction</option>
              <option value="flight">Flight</option>
            </select>
            <select id="fruits">
              <option value="apple">Rating</option>
              <option value="banana">Banana</option>
              <option value="orange">Orange</option>
              <option value="grape">Grape</option>
              <option value="strawberry">Strawberry</option>
            </select>
          </div>
        </div>
        <div className="sidebar-content">
          {hotel ? (
            hotel.length > 0 ? (
              hotel.map((element, index) => {
                const { name, photo } = element;
                const cardImg = photo?.images?.large?.url;
                const defaultImg =
                  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80";

                return (
                  <div className="event-content-section" key={index}>
                    <div className="card-image">
                      <img src={cardImg || defaultImg} alt="Hotel" />
                    </div>

                    <div className="content-box card-heading">
                      <h2 id="eventName">{name}</h2>
                      {/* <img src={fav} alt=""/> */}
                    </div>
                    <div className="content-box card-details">
                      {/* <img src={location} alt=""/> */}
                      <p id="eventLocation">{}</p>
                    </div>
                    <div className="content-box card-details">
                      {/* <img src={date} alt=""/> */}
                      <p id="eventTime">rating</p>
                    </div>
                    <div className="content-box card-details">
                      {/* <img src={people} alt=""/> */}
                      <p id="eventTotalMembers"></p>
                    </div>
                    <div className="content-box card-details">
                      {/* <img src={game} alt=""/> */}
                      <p>Explore this restaurant</p>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>Fetching hotel data....</p>
            )
          ) : (
            <p>It might seems you network is slow...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
