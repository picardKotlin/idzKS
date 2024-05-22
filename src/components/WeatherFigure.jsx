import React, { useEffect, useState } from 'react'
import { getWeatherData } from '../services/weatherService';

import { Link } from 'react-router-dom';
import { WiDaySunny, WiNightClear, WiStrongWind } from "react-icons/wi";
import { CiDroplet } from "react-icons/ci";

const WeatherFigure = ({coords, name}) => {
  const {latitude, longitude} = coords;
  const [error, setError] = useState(null);
  const [data, setData] = useState([])

  error && console.log(error)
  
  const formatDate = (dateString) => {
    const dateParts = dateString.split('-');
    const day = dateParts[2];
    const month = dateParts[1];
    return `${day}.${month}`;
  };

  const updateWeatherData = () => {
    getWeatherData(latitude, longitude)
    .then(data => {
      setData(data);
    })
    .catch(err => {
      setError(err.message);
    });
  }

  useEffect(() => {
    latitude && longitude && updateWeatherData()
  }, [coords])
  
  const days = data.daily?.time?.map((_, index) => ({ 
    apparent_temperature_max: data.daily.apparent_temperature_max[index],
    apparent_temperature_min: data.daily.apparent_temperature_min[index],
    precipitation_probability_max: data.daily.precipitation_probability_max[index],
    temperature_2m_max: data.daily.temperature_2m_max[index],
    temperature_2m_min: data.daily.temperature_2m_min[index],
    time: data.daily.time[index],
    wind_direction_10m_dominant: data.daily.wind_direction_10m_dominant[index],
    wind_gusts_10m_max: data.daily.wind_gusts_10m_max[index],
    wind_speed_10m_max: data.daily.wind_speed_10m_max[index],
  }));

  return (
    <figure className='weatherFigure'>
      
        <h2 className='weatherTitle'>{name}</h2>
        <div className='weakWeather'>
          {days?.map((day, index) => (
            <Link to={`/weather/${latitude}:${longitude}:${index}`} key={day.time} className='dailyWeather'>

                <p className='date'>{formatDate(day.time)}</p>
                <div className='temperature'>
                  <div className='weatherIcon'><WiDaySunny/>{day.temperature_2m_max}°</div>
                  <div className='weatherIcon'><WiNightClear/>{day.temperature_2m_min}°</div>
                </div>
                <div className='precipitation'>
                  <CiDroplet/>
                  {day.precipitation_probability_max}%
                </div>
                <div className='wind'>
                  <WiStrongWind/>
                  {day.wind_speed_10m_max} км/год
                </div>
            </Link>
          ))}
        </div>
      
    </figure>
  )
}

export default WeatherFigure