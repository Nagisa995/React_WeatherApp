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
    infoDefault,
    infoForecastDefault
} from './const'

export function TabsBody({ city, addCityInList }) {
    const [weatherInfo, setWeatherInfo] = useState(infoDefault);
    const [weatherForecastInfo, setWeatherForecastInfo] = useState(infoForecastDefault);

    useEffect(() => {
        serverRequest(compilationURLCurrentWeather(city)).then(result => setWeatherInfo(result));
        serverRequest(compilationURLForecast(city)).then(result => setWeatherForecastInfo(result));
    }, [city])

    return (
        <div className="tabs_body">
            <TabNow info={weatherInfo} addCityInList={addCityInList}/>
            <TabDetails info={weatherInfo} />
            <TabForecast info={weatherForecastInfo} />
        </div>
    );
}
