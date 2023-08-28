import axios from "axios";

export const getHotel = async (
  latitude,
  longitude,
  type = "restaurants",
  rating = "2",
) => {

  const options = {
    method: "GET",
    url: `https://travel-advisor.p.rapidapi.com/${type}/list-by-latlng`,
    params: {
      latitude: latitude,
      longitude: longitude,
      min_rating: rating,
    },
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_APP_TRAVEL_API,
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
