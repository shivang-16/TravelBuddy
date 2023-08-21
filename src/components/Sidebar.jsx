import React,{useState} from 'react'
import { getHotel } from '../apis/Hotel'
import { useCoordinateContext } from './CoordinateContext'

const Sidebar = () => {

    const [hotel, setHotel] = useState([]);
    const { setCoordinates } = useCoordinateContext();
    const [place, setPlace] = useState("")
    const bingMapApiKey = "AqGrMcJvoHh0AwTxWEVhPsT4sdT5xxgOVRe_T-CUas8poD6tGAQuuMLGDBDHDMDj"
  
    const handleSearch = async () => {
      if (place) {
        const bingMapKey = bingMapApiKey
        try {
          console.log("fetching coord...")
          const response = await fetch(
            `http://dev.virtualearth.net/REST/v1/Locations?q=${encodeURIComponent(
              place
            )}&key=${bingMapKey}`
          );
  
          const coordinates = await response.json();
          const location = coordinates.resourceSets[0].resources[0].point.coordinates;
          const [latitude, longitude] = location;
          console.log(location)
          setCoordinates({latitude,longitude})
  
    
          // Fetching hotel data
          const hotelData = await getHotel(latitude, longitude);
          setHotel(hotelData);
          console.log(hotelData)
        } catch (error) {
          console.log(error);
          setHotel([]);
        }
      }
    };
  
    return (
      <>
        <div className='side-bar-card-area'>
        <div className='search-bar'>
        <input
            type="search"
            placeholder="Enter latitude"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
          <div className='sidebar-content'>
          {hotel ? (
            hotel.length > 0 ? (
              hotel.map((element, index) => {
                const { name, photo} = element;
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

export default Sidebar
