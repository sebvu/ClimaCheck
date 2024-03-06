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
const openWeatherAPIUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lng}&appid=${openWeatherAPIKey}`

const fetchLatLng = () => { //only runs when called
// Input Validation - Confirm that both strings are not empty
if (city.length === 0 || state.length === 0) {
    alert ("Please enter a valid city and state")
    setCityAndState("")
    return
}

  axios.get(googleGeocodingAPIUrl)
  .then((response) => {
    setLat(response.data.results[0].geometry.location.lat)
    setLng(response.data.results[0].geometry.location.lng)
  })
  .catch((error) => {console.log(error)})
}

useEffect(() => { //only runs when lat and lng is changed, or component is created
  const fetchWeatherData = () => {
    axios.get(openWeatherAPIUrl)
    .then((response) => {
      setWeather(response.data)
    })
    .catch((error) => {console.log(error)})
  }
  console.log(lat)
  fetchWeatherData()
},[lat, lng])

  return (
    <>
      <div className='flex'>
      <Display 
        state={state}
        setState={setState}
        city={city}
        setCity={setCity}
        fetchLatLng={fetchLatLng}
      /> 
      <Details/>
      </div>
    </>
  )
}

export default App
