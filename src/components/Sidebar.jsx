import React,{useState} from 'react'
import { getHotel } from '../apis/Hotel'
import { useCoordinateContext } from './CoordinateContext'
const Sidebar = () => {
    const [hotel, setHotel] = useState([]);
    const { setCoordinates } = useCoordinateContext();
    const [latitudeInput, setLatitudeInput] = useState('');
    const [longitudeInput, setLongitudeInput] = useState('');
  
    const handleSearch = async () => {
      if (latitudeInput && longitudeInput) {
        const data = await getHotel(latitudeInput, longitudeInput);
        console.log(data);
        setHotel(data);
        if (data.length > 0) {
          const { latitude, longitude } = data[0];
          setCoordinates({ latitude, longitude });
        
        } else {
          console.log("No data fetched");
        }
      }
    };
  
    return (
      <>
        <div className='side-bar-card-area'>
        <div className='search-bar'>
          <input
            type='search'
            placeholder='Enter latitude'
            value={latitudeInput}
            onChange={(e) => setLatitudeInput(e.target.value)}
          />
          <input
            type='search'
            placeholder='Enter longitude'
            value={longitudeInput}
            onChange={(e) => setLongitudeInput(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
          
          {hotel ? (
            hotel.length > 0 ? (
              hotel.map((element, index) => {
                const { name, photo , location_string} = element;
                const cardImg = photo?.images?.original?.url; // Use optional chaining to avoid errors
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
                      <p id="eventLocation">{location_string}</p>
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
              <p>No hotel data available.</p>
            )
          ) : (
            <p>Fetching data...</p>
          )}
        </div>
      </>
    );
  };

export default Sidebar
