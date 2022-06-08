import { React, useEffect, useState } from 'react'
import './css/style.css'
import {
    TabNow
} from './TabNow'
import {
    TabDetails
} from './TabDetails'
import {
    TabForecast
} from './TabForecast'
import {
    serverRequest,
    compilationURLCurrentWeather,
    compilationURLForecast
} from './api'
import {
    temperatureDegrees,
    time,
} from './utils'
import {
    infoDefault
} from './const'

export function TabsBody({ city }) {
    const [weatherInfo, setWeatherInfo] = useState(infoDefault);
    const [weatherForecastInfo, setWeatherForecastInfo] = useState();

    useEffect(() => {
        serverRequest(compilationURLCurrentWeather(city)).then(result => setWeatherInfo(result));
        serverRequest(compilationURLForecast(city)).then(result => setWeatherForecastInfo(result));
    }, [city])

    console.log(weatherInfo);

    return (
        <div className="tabs_body">
            <TabNow name={weatherInfo.name} temperature={temperatureDegrees(weatherInfo.main.temp)} icon={weatherInfo.weather[0].icon} />
            <TabDetails name={weatherInfo.name} temp={temperatureDegrees(weatherInfo.main.temp)} weather={weatherInfo.weather[0].main} sunrise={time(weatherInfo.sys.sunrise)} sunset={time(weatherInfo.sys.sunset)} feelsLike={temperatureDegrees(weatherInfo.main.feels_like)} />
            <TabForecast info={weatherForecastInfo} />
        </div>
    );
}
