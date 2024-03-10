import Display from './components/Display.jsx'//every component made is imported in App.jsx
import Details from './components/Details.jsx'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

function App() { 
const [weather, setWeather] = useState('')
const [lat, setLat] = useState(29.749907)
const [lng, setLng] = useState(-95.358421)
const [city, setCity] = useState('Houston')
const [state, setState] = useState('Texas')

const googleGeocodingAPIKey = `AIzaSyA4q-MYZhbhKZ1BoaLwTHp6H5tC4xaUYfA`
const googleGeocodingAPIUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(`${city}, ${state}`)}&key=${googleGeocodingAPIKey}`
const openWeatherAPIKey = `79d7e27a48b495cc69eab119dc014347`
const openWeatherAPIUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lng}&appid=${openWeatherAPIKey}&units=imperial`

useEffect(() => {
  axios.get(googleGeocodingAPIUrl)
  .then((response) => {
    setLat(response.data.results[0].geometry.location.lat)
    setLng(response.data.result[0].geometry.location.lng)
  }) 
  .catch((error) => {console.error("Error with googleGeocodingAPI:", error)})
}, [city, state])

useEffect(() => { // only runs when lat and lng is changed, or component is created
  axios.get(openWeatherAPIUrl)
  .then((response) => {
    setWeather(response.data)
  })
  .catch((error) => {console.error("Error with fetchWeatherData:", error)})
},[lat, lng])

useEffect(() => {
  console.log("Weather state updated for: ", city, state, weather); // monitoring weather changes
}, [weather])

  return (
    <>
      <div className='flex'>
        {weather && ( // Render Display only when weather is not undefined
          <Display 
            state={state}
            setState={setState}
            city={city}
            setCity={setCity}
            weather={weather}
          />
        )}
        {weather && <Details weather={weather} />}
      </div>
    </>
  )
}

export default App
