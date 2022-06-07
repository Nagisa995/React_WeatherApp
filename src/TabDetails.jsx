import React from 'react'
import './css/style.css'

export function TabDetails() {
    return (
        <div id="Details" className="tab_block tab_Details">
            <p id='currentCityDetails' className="tabCity_2">Moscow</p>
            <ul>
                <li className="weather">Temprature: <span id="detailsTemprature">20.2</span>°</li>
                <li className="weather">Feels like: <span id="detailsFeelsLike">19.0</span>°</li>
                <li className="weather">Weather: <span id="detailsWeather">Clouds</span></li>
                <li className="weather">Sunrise: <span id="detailsSunrise">7:48</span></li>
                <li className="weather">Sunset: <span id="detailsSunset">1:8</span></li>
            </ul>
        </div>
    );
}