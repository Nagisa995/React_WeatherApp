import React from 'react'
import './css/style.css'

export function TabsItem() {
    return (
        <div className="tabs_item">
            <a id="transitionNow" href="#Now" className="tab_index active_tab">Now</a>
            <a id="transitionDetails" href="#Details" className="tab_index">Details</a>
            <a id="transitionForecast" href="#Forecast" className="tab_index">Forecast</a>
        </div>
    );
}