import React from 'react'
import { PiDogDuotone } from "react-icons/pi";

const formatDate = (date) => {
  const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
  }
  return new Date(date).toLocaleString('en-US', options);
}

const WeatherDisplay = ({city, state, weather}) => {
  return (
    <>
      <div className='bg-transparent h-3/6 w-full flex justify-center items-center'>
        <PiDogDuotone size = '250'/> {/* placeholder */}
      </div>
      <div className='bg-transparent h-1/6 w-full flex justify-center items-center flex-col'>
        <div className='m-2 text-3xl font-semibold'>
          <h1>{weather.current.temp + "°F"}</h1>
        </div>
        <div className='m-2 text-xl'>
          <p>{weather.daily[0].summary}</p>
        </div>
      </div>
      <div className='bg-transparent h-2/6 w-full flex justify-center items-center flex-col'>
        <div className='border-gray-600 w-full border-t-4 mb-8'>
          <hr></hr>
        </div>
        <div className='m-3 text-xl'>
          <p>{formatDate((weather.current.dt)*1000)}</p>
        </div>
        <div className='m-2 font-thin text-3xl'>
          <h2>{city}, {state}</h2>
        </div>
      </div>
    </>

  )
}

export default WeatherDisplay