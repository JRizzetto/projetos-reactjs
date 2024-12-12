import './WeatherInfo5days.css'


function WeatherInfo5days({ weather5days }) {

    console.log(weather5days)

    let dailyForescast = {}

    for (let forecast of weather5days.list) {
        const date = new Date(forecast.dt * 1000).toLocaleDateString();

        if (!dailyForescast[date]) {
            dailyForescast[date] = forecast
        }
    }

    const next5DaysForecast = Object.values(dailyForescast).slice(1, 6)

    function converteDate(date) {
        const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit' })

        return newDate
    }

    return (
        <div className='weather-container'>
            <h3>Previsão próximos 5 days</h3>
            <div className='weather-list'>
                {next5DaysForecast.map(forecast => (
                    <div key={forecast.dt} className='weather-item'>
                        <p className='forecast-day'>{converteDate(forecast)}</p>
                        <img src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} />
                        <p className='forecastDescription'>{forecast.weather[0].description}</p>
                        <p>{Math.round(forecast.main.temp_min)}°C min / {Math.round(forecast.main.temp_max)}°C max</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WeatherInfo5days