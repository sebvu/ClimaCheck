import React from 'react'
import Card from './Card'

const Details = ({weather}) => {

  return (
    <div className='bg-[#D9F3FF] flex w-full items-center justify-center px-6 py-4'>
      <div className='grid w-fit grid-cols-1 gap-20 sm:grid-cols-2 xl:grid-cols-3'>
        <Card 
          title={"Feels Like"}
          value={weather.daily[0].feels_like.day + "°F"}
        />
        <Card 
          title={"Max Temperature"}
          value={weather.daily[0].temp.max + "°F"}
        />
        <Card 
          title={"Min Temperature"}
          value={weather.daily[0].temp.min + "°F"}
        />
        <Card 
          title={"Pressure Index"}
          value={weather.daily[0].pressure + "in"}
        />
        <Card 
          title={"Humidity Level"}
          value={weather.daily[0].humidity + "%"}
        />
        <Card 
          title={"Wind Speed"}
          value={weather.daily[0].wind_speed + "mph"}
        />
      </div>
    </div>
  )
}

export default Details