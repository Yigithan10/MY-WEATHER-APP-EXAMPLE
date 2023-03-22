import axios from 'axios';

const url = 'https://api.openweathermap.org/data/2.5/weather?q=';
const type = 'units=metric';
const lang = 'lang=en';
const apiKey = '<<your_api_key>>'; // !!!

// city name
export const getCityName = async cityName => {
  const response = await axios.get(`${url}${cityName}&${type}&appid=${apiKey}&${lang}`);
  return response.data;
};
