import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import WeatherInfo from './components/WeatherInfo/WeatherInfo'
import WeatherInfo5days from './components/WeatherInfo5days/WeatherInfo5days'

function App() {
  const [weather, setWeather] = useState()
  const [weather5days, setWeather5days] = useState()

  const inputRef = useRef()

  async function searchCity() {
    const city = inputRef.current.value
    const key = "792778c1e6439ccef07894e54441a823"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const url5days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const apiInfo = await axios.get(url)
    const apiInfo5Days = await axios.get(url5days)
 
    setWeather5days(apiInfo5Days.data)
    setWeather(apiInfo.data)
  }

  return (
    <div className='container'>
      <h1>DevClub previsão do tempo</h1>
      <input ref={inputRef} type="text" placeholder='Digite o nome da cidade' />
      <button onClick={searchCity}>Buscar</button>
      
      {weather && <WeatherInfo weather={weather}/>}
      {weather5days && <WeatherInfo5days weather5days={weather5days}/>}
    </div>
  )
}

export default App
