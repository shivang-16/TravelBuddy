import axios from 'axios';

export const getHotel = async ( latitude= '12.91285', longitude= '100.87808') => {
  const options = {
    method: 'GET',
    url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng',
    params: {
      latitude: latitude,
      longitude: longitude,
      limit: '30',
      currency: 'USD',
      distance: '2',
      open_now: 'false',
      lunit: 'km',
      lang: 'en_US'
    },
    headers: {
      'X-RapidAPI-Key': '041e69f866msh0d1a1ade0bd9dd7p1bb269jsnbca2d0d21969',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
  };
  try {
    console.log("fetching data...");
    const { data: { data } } = await axios.request(options);
    console.log("data fetched");
    return data;

  } catch (error) {
    console.error(error);
  }
};
