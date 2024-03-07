import React from 'react'
import Lottie from 'lottie-react'
// import animationData01d from '../assets/01d.json'
// import animationData01n from '../assets/01n.json'
// import animationData02d from '../assets/02d.json'
// import animationData02n from '../assets/02n.json'
// import animationData03d from '../assets/03.json'
// import animationData03n from '../assets/03.json'
// import animationData04d from '../assets/04.json'
// import animationData04n from '../assets/04.json'
// import animationData09d from '../assets/09.json'
// import animationData09n from '../assets/09.json'
// import animationData10d from '../assets/10d.json'
// import animationData10n from '../assets/10n.json'
// import animationData11d from '../assets/11.json'
// import animationData11n from '../assets/11.json'
// import animationData13d from '../assets/13.json'
// import animationData13n from '../assets/13.json'
// import animationData50d from '../assets/50.json'
// import animationData50n from '../assets/50.json'

// const animationData = {
//   '01d': animationData01d,
//   '01n': animationData01n,
//   '02d': animationData02d,
//   '02n': animationData02n,
//   '03d': animationData03d,
//   '03n': animationData03n,
//   '04d': animationData04d,
//   '04n': animationData04n,
//   '09d': animationData09d,
//   '09n': animationData09n,
//   '10d': animationData10d,
//   '10n': animationData10n,
//   '11d': animationData11d,
//   '11n': animationData11n,
//   '13d': animationData13d,
//   '13n': animationData13n,
//   '50d': animationData50d,
//   '50n': animationData50n
// }

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
        <Lottie animationData={animationData[weather.current.weather[0].icon]}/> {/* will call animationData object with .icon API call */}
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