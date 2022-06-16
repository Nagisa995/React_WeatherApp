import React from 'react'
import {
    temperatureDegrees,
    dateFromString,
    time,
    weatherIconURL
} from '../../../../js/utils'

export function TabForecast({ info }) {
    const {
        city: {
            name
        },
        list
    } = info;

    const forecastList = list.map(element => <ForecastElement info={element} key={JSON.stringify(element)}/>);

    return (
        <div id="Forecast" className="tab_block tab_Forecast">
            <p>{name}</p>
            <ul>
                {forecastList}
            </ul>
        </div>
    );
}

function ForecastElement({ info }) {

    const {
        dt_txt,
        dt,
        main: {
            temp,
            feels_like
        },
        weather: [{ icon, main }],
    } = info;

    return (
        <li>
            <div className="weather_Time">
                <div className="top_left">{dateFromString(dt_txt)}</div>
                <div className="bottom_left">
                    <ul>
                        <li>Temperature: {temperatureDegrees(temp)}°</li>
                        <li>Feels like: {temperatureDegrees(feels_like)}°</li>
                    </ul>
                </div>
                <div className="top_right">{time(dt)}0</div>
                <div className="bottom_right">
                    <span className="block">{main}</span>
                    <img src={weatherIconURL(icon)} />
                </div>
            </div>
        </li>
    )
}