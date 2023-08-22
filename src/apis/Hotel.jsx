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
      "X-RapidAPI-Key": "041e69f866msh0d1a1ade0bd9dd7p1bb269jsnbca2d0d21969",
      "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
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
