import React from 'react'
import {
    temperatureDegrees,
    time,
} from '../../../../js/utils'

export function TabDetails({ info }) {
    
    const {
        name,
        main: {
            temp,
            feels_like,
        },
        weather: [{ main }],
        sys: {
            sunrise,
            sunset,
        }
    } = info;
    
    return (
        <div id="Details" className="tab_block tab_Details">
            <p className="tabCity_2">{name}</p>
            <ul>
                <li className="weather">Temprature: {temperatureDegrees(temp)}°</li>
                <li className="weather">Feels like: {temperatureDegrees(feels_like)}°</li>
                <li className="weather">Weather: {main}</li>
                <li className="weather">Sunrise: {time(sunrise)}</li>
                <li className="weather">Sunset: {time(sunset)}</li>
            </ul>
        </div>
    );
}