import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getWeatherData } from '../../services/weatherService';

import { WiDaySunny, WiNightClear, WiStrongWind } from "react-icons/wi";

const WeatherPage = () => {
  const { state } = useParams();
  const [error, setError] = useState(null);
  const [data, setData] = useState([])
  const [latitude, longitude, day] = state.split(':').map(coord => parseFloat(coord).toFixed(3));

  const currentDay = parseInt(day)
  const prevDay = currentDay === 0 ? 0 : currentDay - 1;
  const nextDay = currentDay === 6 ? 6 : currentDay + 1;
  error && console.log(error)

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
  }, [state])

  return (
    <section className='todayWeatherSection'>
    {data.daily && data.current && 
      <figure className='todayWeather'>
        <header className='todayHeader'>
          <div className='todayTemperature'>
            <h1>Температура: {data?.daily?.temperature_2m_max[currentDay]}°</h1>
            <h4>Відчувається: {data.daily.apparent_temperature_min[currentDay]}°</h4>
          </div>
          <div className='todayDayNight'>
            {data.current.is_day === 1 ? <WiDaySunny/> : <WiNightClear/>}
          </div>
          <div className='todayWind'>
            <WiStrongWind/>{data.daily.wind_speed_10m_max[currentDay]} км/год
          </div>
        </header>
        <main className='todayMain'></main>
        <footer className='todayFooter'></footer>
      </figure>
    }
    <div>
      <Link to={`/weather/${latitude}:${longitude}:${prevDay}`}>Previous</Link>
      <Link to={`/weather/${latitude}:${longitude}:${nextDay}`}>Next</Link>
    </div>
    </section>
  )
}

export default WeatherPage