import React, { useState, useEffect } from "react";
import { getHotel } from "../apis/Hotel";
import { getWeather } from "../apis/Weather";
import Spinner from "./Spinner";
import star from '../images/star.png'
import  fav from '../images/fav.png'
import  rank from '../images/rank.png'
import  location from '../images/location.png'
import  contact from '../images/phone.png'
import  search from '../images/search.png'
const Sidebar = ({ place, setPlace, type, setType, rating, setRating, setCoordinates, setHotelCoordinates, setHotelDetails}) => {
  const [hotel, setHotel] = useState([]);
  const [restaurantImages, setRestaurantImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState('')
  const handleSearch = async () => {
    setLoading(true);
    if (place) {
      const bingMapApiKey =
        "AqGrMcJvoHh0AwTxWEVhPsT4sdT5xxgOVRe_T-CUas8poD6tGAQuuMLGDBDHDMDj";

        try {
          let pixabayCategory = "restaurants + cuisines"; // Default category for images
          if (type === "hotels") {
            pixabayCategory = "hotels";
          } else if (type === "attractions") {
            pixabayCategory = "attractions";
          }
    
          const pixabayApiKey = "39008680-8cca2ad820e4d89df9f8efa13";
          const randomPage = Math.floor(Math.random() * 20) + 1;
          const response = await fetch(
            `https://pixabay.com/api/?key=${pixabayApiKey}&q=${pixabayCategory}&image_type=photo&pretty=true&page=${randomPage}`
          );
          const data = await response.json();
          setRestaurantImages(data.hits);
        } catch (error) {
          console.log("Error fetching images:", error);
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
        
        const weatherData = await getWeather(latitude, longitude);
        console.log(weatherData)
        if (weatherData) {
          const weatherMain = weatherData.weather[0].main;
          const weatherIcon = weatherData.weather[0].icon;
  
          // setWeather(weatherMain);
          console.log(weatherMain)
  
          // Assuming you have a weather icons collection
          const weatherIconUrl = `https://openweathermap.org/img/w/${weatherIcon}.png`;
           console.log(weatherIconUrl)
          setWeather({
            icon: weatherIconUrl,
            desc: weatherMain

          })
          // Update the state variable where you want to use the weather icon URL
        } else {
          setWeather('Weather data not available');
        }

        
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
        const hotelDetails = hotelData.map((hotel)=>({
          name: hotel.name,
          rating: hotel.rating,
                    
         }))
         
       
        setHotelDetails(hotelDetails);
        setHotelCoordinates(hotelCoordinates);

        
      } catch (error) {
        console.log(error);
        setHotel([]);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    handleSearch();
    // Weather();
  }, [type, rating, getWeather]);

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
              <option value="" defaultChecked>Category</option>
              <option value="restaurants">Restaurants</option>
              <option value="hotels">Hotels</option>
              <option value="attractions">Attractions</option>
              
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
        <div className="weather">
           
           {loading ? <p>Loading weather...</p> : (
             weather ?
              <div>
               <h2>Weather</h2> 
               <div><img src={weather.icon} alt="Weather Icon" /> <p>{weather.desc}</p>
               </div>
               </div> : <p>Weather Data...</p>
           )}
         </div>
        <div className="sidebar-content">
     
          {loading ? (<Spinner/>) : hotel ? (
            hotel.length > 0 ? (
              hotel.map((element, index) => {
                const { name,  rating, num_reviews, address,phone,ranking, web_url, open_now_text, ranking_geo, cuisine, price_level


                } = element;
          
                // const cardImg = photo?.images?.large?.url;
                // const defaultImg =
                //   "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80";
                
                const randomIndex = Math.floor(Math.random() * restaurantImages.length);
                const randomRestaurantImage = restaurantImages[randomIndex];
                 const restaurantImageUrl = randomRestaurantImage?.    largeImageURL;

                const stars = [];
                for (let i = 0; i < rating; i++) {
                  stars.push(<img key={i} src={star} alt="Star"/>);
                }

                const cuisineType = cuisine?.map((dish, i)=>{
                     return <div className="cuisine" key={i}>
                        <p>{dish.name}</p>
                     </div>
                })
                
                
                return (
              
  
                  <div className="event-content-section" key={index}>                
                    <div className="card-image">
                    <img src={restaurantImageUrl} alt="Restaurant" />
                    </div>

                    <div className="content-box card-heading">
                      <h2 id="eventName">{name}</h2>
                      <div className="open-now-box"><p>{open_now_text}</p></div>
                      <img src={fav} alt=""/>
                    </div>
                   
                    <div className="content-box card-details">
                      {/* <img src={rank} alt=""/> */}
                      <div className="star-img"> {rating ? (
                          <>{stars}</>
                        ) : (
                          'No rating'
                        )}</div>
                      <div className="review"> {num_reviews?num_reviews + ' reviews':"no reviews"}</div>
                    </div>
                    <div className="price">
                      <p>{price_level}</p>
                    </div>
                    <div className="content-box card-details">
                      <img src={rank} alt=""/>
                      <p id="eventTotalMembers">{ranking?ranking:'Not available'}</p>
                    </div>
                    <div className="content-box card-details">
                      <img src={contact} alt=""/>
                      <p id="eventTotalMembers">{phone?phone:'Not available'}</p>
                    </div>
                    <div className="content-box card-details">
                      <img src={location} alt=""/>
                      <p id="eventLocation">{address?address
                      :ranking_geo}</p>
                    </div>
                   <div className="cuisine-box">{cuisineType}</div>
                    <div className="content-box explore card-details">
                    <a href={web_url} target="_blank">
                      <p>Explore</p>
                      </a>
                    </div>
                   
                  </div>
                
                );
              })
            ) : (
              // <p style={{marginTop:'100px', fontSize:'20px', opacity:'0.6', width:'300px', margin:'auto'}}> Search any <strong>Place</strong>  and <strong>select category.</strong> </p>
              <></>
            )
          ) : (
            <p>It might seems you network is slow. Error fetcing data. <strong>Try again</strong></p>
          )}
        </div>
      
      </div>
    </>
  );
};

export default Sidebar;
