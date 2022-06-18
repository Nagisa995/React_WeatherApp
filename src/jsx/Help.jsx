import { React } from 'react'
import { Link } from 'react-router-dom'

export function Help() {

    return (
        <div>
            This application is designed to receive short-term and long-term weather forecast
            <ul>
                <li>
                    The tab now contains brief information about the current weather
                </li>
                <li>
                    The details tab contains detailed information about the current state of the weather
                </li>
                <li>
                    The forecast tab contains a long-term weather forecast for the next 5 days with an interval of 3 hours
                </li>
            </ul>
            <Link to='/'>Home Page</Link>
        </div>
    )
}