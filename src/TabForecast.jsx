import React from 'react'
import './css/style.css'

export function TabForecast() {
    return (
        <div id="Forecast" className="tab_block tab_Forecast">
            <p id='currentCityForecast'>Moscow</p>
            <ul id='forecastList'>
                <li>
                    <div className="weather_Time">
                        <div className="top_left">7 June</div>
                        <div className="bottom_left">
                            <ul>
                                <li>Temperature: 19.9°</li>
                                <li>Feels like: 18.7°</li>
                            </ul>
                        </div>
                        <div className="top_right">22:00</div>
                        <div className="bottom_right">
                            <span className="block">Clear</span>
                            <img src="http://openweathermap.org/img/wn/01d@2x.png"/>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}