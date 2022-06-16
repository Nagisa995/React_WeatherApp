import { React, useEffect, useState } from 'react'
import {
    TabNow
} from './tab/TabNow'
import {
    TabDetails
} from './tab/TabDetails'
import {
    TabForecast
} from './tab/TabForecast'
import {
    serverRequest,
    compilationURLCurrentWeather,
    compilationURLForecast
} from '../../../js/api'
import {
    infoDefault,
    infoForecastDefault
} from '../../../js/const'
import { useSelector } from 'react-redux'

export function TabsBody() {
    const currentCity = useSelector(state => state.currentCity);
    const [weatherInfo, setWeatherInfo] = useState(infoDefault);
    const [weatherForecastInfo, setWeatherForecastInfo] = useState(infoForecastDefault);

    useEffect(() => {
        serverRequest(compilationURLCurrentWeather(currentCity)).then(result => setWeatherInfo(result));
        serverRequest(compilationURLForecast(currentCity)).then(result => setWeatherForecastInfo(result));
    }, [currentCity])

    return (
        <div className="tabs_body">
            <TabNow info={weatherInfo}/>
            <TabDetails info={weatherInfo} />
            <TabForecast info={weatherForecastInfo} />
        </div>
    );
}
