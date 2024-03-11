import React from 'react'
import Lottie from 'lottie-react'

const animationDataPaths = { //animation data file paths
  '01d': '01d',
  '01n': '01n',
  '02d': '02d',
  '02n': '02n',
  '03d': '03',
  '03n': '03',
  '04d': '04',
  '04n': '04',
  '09d': '09',
  '09n': '09',
  '10d': '10d',
  '10n': '10n',
  '11d': '11',
  '11n': '11',
  '13d': '13',
  '13n': '13',
  '50d': '50',
  '50n': '50'
}

const animationData = {}; // object that will store animation data

for (const key in animationDataPaths) {
  import(`../assets/${animationDataPaths[key]}.json`) // importing all json files
  .then((data) => { // storing in animationdata object
    animationData[key] = data.default; //key is paired with the corresponding data
  });
}

const formatDate = (date, timezone) => {
  const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
      timeZone: timezone
  }
  return new Intl.DateTimeFormat('en-US', options).format(new Date(date))
}

const WeatherDisplay = ({city, state, weather}) => {
  return (
    <>
      <div className='bg-transparent h-3/6 w-full flex justify-center items-center'>
        <Lottie animationData={animationData[weather.current.weather[0].icon]}/> {/* will call animationData object with .icon API call */}
      </div>
      <div className='bg-transparent h-1/6 w-full flex justify-center items-center flex-col'>
        <div className='m-2 text-3xl font-semibold'>
          <h1>{weather.current.temp + "°F"}</h1>
        </div>
        <div className='m-2 text-xl flex'>
          <p>{weather.daily[0].summary}</p>
        </div>
      </div>
      <div className='bg-transparent h-2/6 w-full flex justify-center items-center flex-col'>
        <div className='border-gray-600 w-full border-t-4 mb-8'>
          <hr></hr>
        </div>
        <div className='m-3 text-xl'>
          <p>{formatDate(weather.current.dt*1000, weather.timezone)}</p>
        </div>
        <div className='m-2 font-thin text-3xl'>
          <h2>{city}, {state}</h2>
        </div>
      </div>
    </>

  )
}

export default WeatherDisplay