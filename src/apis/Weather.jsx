import axios from "axios";

export const getWeather = async (latitude, longitude) => {
  let URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=6abb0d23dd7946b4ae962c8e5af23183`;
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
