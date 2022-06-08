import React from 'react'
import './css/style.css'

export function TabDetails({ name, temp, weather, sunrise, sunset, feelsLike }) {
    return (
        <div id="Details" className="tab_block tab_Details">
            <p className="tabCity_2">{name}</p>
            <ul>
                <li className="weather">Temprature: {temp}°</li>
                <li className="weather">Feels like: {feelsLike}°</li>
                <li className="weather">Weather: {weather}</li>
                <li className="weather">Sunrise: {sunrise}</li>
                <li className="weather">Sunset: {sunset}</li>
            </ul>
        </div>
    );
}