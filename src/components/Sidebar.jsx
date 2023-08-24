import React, { useState, useEffect } from "react";
import { getHotel } from "../apis/Hotel";
import {getAirport} from "../apis/Airport";
import Spinner from "./Spinner";
import star from '../images/star.png'
import  fav from '../images/fav.png'
import  date from '../images/date.png'
import  location from '../images/location.png'
import  people from '../images/people.png'
import  search from '../images/search.png'
const Sidebar = ({ place, setPlace, type, setType, rating, setRating, setCoordinates, setHotelCoordinates }) => {
  const [hotel, setHotel] = useState([]);
  const [restaurantImages, setRestaurantImages] = useState([]);
  
  const handleSearch = async () => {
    if (place) {
      const bingMapApiKey =
        "AqGrMcJvoHh0AwTxWEVhPsT4sdT5xxgOVRe_T-CUas8poD6tGAQuuMLGDBDHDMDj";

        try {
          const pixabayApiKey = "39008680-8cca2ad820e4d89df9f8efa13";
          const response = await fetch(
            `https://pixabay.com/api/?key=${pixabayApiKey}&q=restaurants+cuisines&image_type=photo&pretty=true`
          );
          const data = await response.json();
          setRestaurantImages(data.hits);
        } catch (error) {
          console.log("Error fetching restaurant images:", error);
          setRestaurantImages([]);
        }

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
        const hotelData = await getHotel(latitude, longitude, type, rating);
        setHotel(hotelData);
        console.log(hotelData);

        setCoordinates({ latitude, longitude });
        
        const hotelCoordinates = hotelData.map((hotel)=>({
          latitude: hotel.latitude,
          longitude: hotel.longitude,
          
        }))
        // console.log(hotelCoordinates)
        setHotelCoordinates(hotelCoordinates);
      } catch (error) {
        console.log(error);
        setHotel([]);
      }
    }
  };

  useEffect(() => {
    handleSearch();
    getAirport()
  }, [type, rating]);

  return (
    <>
      <div className="side-bar-card-area">
        <div className="search-box">
          <div className="search-bar">
          <input
            type="search"
            placeholder="Search city, place, country"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
          />
          <button onClick={handleSearch}><img src={search} alt="" /></button>
          </div>
          <div className="dropdown">
            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="restaurants">Restaurants</option>
              <option value="hotels">Hotels</option>
              <option value="attractions">Attraction</option>
              <option value="flight">Flight</option>
            </select>
            <select id="rating"  value={rating}
              onChange={(e) => setRating(e.target.value)}>
              <option value="Rating">Rating</option>
              <option value="3">Above 3 star</option>
              <option value="4">Above 4 star</option>
              <option value="5">5 star</option>
              
            </select>
          </div>
        </div>
        <div className="sidebar-content">
         
          {hotel ? (
            hotel.length > 0 ? (
              hotel.map((element, index) => {
                const { name,  rating, num_reviews, address,phone,ranking, web_url
                } = element;
          
                // const cardImg = photo?.images?.large?.url;
                // const defaultImg =
                //   "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80";
                
                const randomIndex = Math.floor(Math.random() * restaurantImages.length);
                const randomRestaurantImage = restaurantImages[randomIndex];

                const stars = [];
                for (let i = 0; i < rating; i++) {
                  stars.push(<img key={i} src={star} alt="Star"/>);
                }

                // const cuisineType = cuisine?.map((dish, i)=>({
                //   <div className="cuisines" key={i}>dish.name</div>
                // }))
                
                
                return (
                  <div className="event-content-section" key={index}>
                    <div className="card-image">
                    <img src={randomRestaurantImage.webformatURL} alt="Restaurant" />
                    </div>

                    <div className="content-box card-heading">
                      <h2 id="eventName">{name}</h2>
                      <img src={fav} alt=""/>
                    </div>
                   
                    <div className="content-box card-details">
                      {/* <img src={date} alt=""/> */}
                      <div className="star-img"> {rating ? (
                          <>{stars}</>
                        ) : (
                          'No rating'
                        )}</div>
                      <div className="review"> {num_reviews?num_reviews + ' reviews':"no reviews"}</div>
                    </div>
                    <div className="content-box card-details">
                      <img src={date} alt=""/>
                      <p id="eventTotalMembers">{ranking}</p>
                    </div>
                    <div className="content-box card-details">
                      <img src={people} alt=""/>
                      <p id="eventTotalMembers">{phone}</p>
                    </div>
                    <div className="content-box card-details">
                      <img src={location} alt=""/>
                      <p id="eventLocation">{address}</p>
                    </div>
                  
                    <div className="content-box card-details">
                    <a href={web_url} target="_blank">
                      {/* <img src={game} alt=""/> */}
                      <p>Explore</p>
                      </a>
                    </div>
                   
                  </div>
                );
              })
            ) : (
              <p>Select Place and type</p>
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
