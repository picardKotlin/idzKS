import React, { useEffect, useState } from 'react'
import WeatherFigure from '../../components/WeatherFigure';

const MainPage = () => {
  const [location, setLocation] = 
    useState({ latitude: null, longitude: null });
  const [error, setError] = useState(null);

  error && console.log(error)

  const userPositionSaved = [
    {
      name: 'Погода у вашому регіоні:',
      coords: location
    },
    {
      name: 'Запоріжжя',
      coords: {
        latitude: 47.838,
        longitude: 35.141
      }
    },
    {
      name: 'Київ',
      coords: {
        latitude: 50.450,
        longitude: 30.523
      }
    },
    {
      name: 'Львів',
      coords: {
        latitude: 49.839,
        longitude: 24.029
      }
    }
  ]

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
    <section className='weatherSection'>
      {userPositionSaved && userPositionSaved.map((place, index) => 
      (
        <WeatherFigure key={index} coords = {place.coords} name={place.name}/>
      )
      )}
    </section>
  )
}

export default MainPage