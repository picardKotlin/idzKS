// weatherService.js
import axios from 'axios';

export const getWeatherData = (latitude, longitude) => {
  return axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,cloud_cover,wind_speed_10m,wind_direction_10m&daily=temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_probability_max,wind_speed_10m_max,wind_gusts_10m_max,wind_direction_10m_dominant&timezone=Europe%2FBerlin`)
    .then(response => {
      if ('data' in response) {
        return response.data;
      } else {
        throw new Error('Invalid response format');
      }
    });
};
