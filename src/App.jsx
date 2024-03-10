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
      console.log(response) // provides the data tree response gives
      
      const {lat, lng} = response?.data?.results[0]?.geometry?.location || {}

      if (lat && lng) {
      setLat(lat)
      setLng(lng)
      }
    }) 
    .catch((error) => {
      console.error("Error retrieving location data:", error)
      if (error.response) {
        console.error("Network error:", error.response.status, error.response.data)
        // Handle network errors (e.g., display user-friendly message)
      } else if (error.request) {
        console.error("Request error:", error.request) // Connection issues, etc.
        // Handle request errors
      } else {
        console.error("Other error:", error.message)
        // Handle other unexpected errors
      }
    })
}, [city, state])

useEffect(() => { // only runs when lat and lng is changed, or component is created
  axios.get(openWeatherAPIUrl)
  .then((response) => {
    setWeather(response.data)
  })
  .catch((error) => {
    console.error("Error retrieving location data:", error)
      if (error.response) {
        console.error("Network error:", error.response.status, error.response.data)
        // Handle network errors (e.g., display user-friendly message)
      } else if (error.request) {
        console.error("Request error:", error.request) // Connection issues, etc.
        // Handle request errors
      } else {
        console.error("Other error:", error.message)
        // Handle other unexpected errors
      }
  })
},[lat, lng])

useEffect(() => {
  console.log("Weather state updated for: ", city, state, weather) // monitoring weather changes
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
