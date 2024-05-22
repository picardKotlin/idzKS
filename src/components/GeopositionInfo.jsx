import React, { useEffect, useState } from 'react'
import WeatherFigure from './WeatherFigure';

const GeopositionInfo = () => {
  const [location, setLocation] = 
  useState({ latitude: null, longitude: null });
  const [error, setError] = useState(null);

  error && console.log(error)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  }, [])

  return (
    <WeatherFigure coords = {location} name={'Погода у вашому регіоні:'}/>
  )
}

export default GeopositionInfo