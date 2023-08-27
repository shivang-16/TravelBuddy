import axios from "axios";

export const getHotel = async (latitude, longitude, type = "restaurants", rating="2") => {
  console.log(rating)
  console.log(type)
  const options = {
    method: "GET",
    url: `https://travel-advisor.p.rapidapi.com/${type}/list-by-latlng`,
    params: {
      latitude: latitude,
      longitude: longitude,
      min_rating: rating
    },
    headers: {
      'X-RapidAPI-Key': '78dff1a885mshed896939e16eab9p15b5c0jsna3e2616ea273',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
  };
  try {
    console.log('fetching data...')
    const {
      data: { data },
    } = await axios.request(options);
    console.log("data fetched")
    return data;
  } catch (error) {
    console.error(error);
  }
};
