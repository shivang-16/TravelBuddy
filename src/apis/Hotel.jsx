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
      'X-RapidAPI-Key': 'ae33d9f510msha9d8492cf2d67c4p12aedfjsnd38c6838684e',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    },
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
