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

export function TabsBody({city}) {
    const [weatherInfo, setWeatherInfo] = useState(undefined);
    const [weatherForecastInfo, setWeatherForecastInfo] = useState(undefined);

    useEffect(() => {
        serverRequest(compilationURLCurrentWeather(city)).then(result => setWeatherInfo(result));
        serverRequest(compilationURLForecast(city)).then(result => setWeatherForecastInfo(result));
    }, [city])

    return (
        <div className="tabs_body">
            <TabNow info={weatherInfo}/>
            <TabDetails info={weatherInfo}/>
            <TabForecast info={weatherForecastInfo}/>
        </div>
    );
}
