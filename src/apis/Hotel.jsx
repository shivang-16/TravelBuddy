import axios from "axios";

export const getHotel = async (latitude, longitude, type = "restaurants") => {
  const options = {
    method: "GET",
    url: `https://travel-advisor.p.rapidapi.com/${type}/list-by-latlng`,
    params: {
      latitude: latitude,
      longitude: longitude,
      limit: "30",
      currency: "USD",
      distance: "2",
      open_now: "false",
      lunit: "km",
      lang: "en_US",
    },
    headers: {
      'X-RapidAPI-Key': 'ae33d9f510msha9d8492cf2d67c4p12aedfjsnd38c6838684e',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    },
  };
  try {
    const {
      data: { data },
    } = await axios.request(options);
    return data;
  } catch (error) {
    console.error(error);
  }
};
