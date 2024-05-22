import React, { useEffect, useState } from 'react'
import GeopositionInfo from '../../components/GeopositionInfo';
import { useParams } from 'react-router-dom';
import { STATES } from '../../data/states';
import WeatherFigure from '../../components/WeatherFigure';

const MainPage = () => {
  const {state} = useParams()
  let currenState = null;
  console.log(state)
  if(state) {
    currenState = STATES.find(stateFind => stateFind.id === state)
  }
  

  return (
    <section className='weatherSection'>
      {currenState !== null ? <WeatherFigure coords = {currenState.coords} name={currenState.name}/> : <GeopositionInfo/>}
    </section>
  )
}

export default MainPage