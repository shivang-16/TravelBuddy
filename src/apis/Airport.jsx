import axios from 'axios';


export const getAirport = async() => {


    const options = {
      method: 'GET',
      url: 'https://travel-advisor.p.rapidapi.com/airports/search',
      params: {
        query: 'new york',
        locale: 'en_US'
      },
      headers: {
        'X-RapidAPI-Key': 'ae33d9f510msha9d8492cf2d67c4p12aedfjsnd38c6838684e',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    };
    
    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

