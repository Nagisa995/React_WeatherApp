import React from 'react'
import './css/style.css'


export function AddedCityList({likeListHandle}) {
    return (
        <div className='location'>
            <div className="added">Added Locations:</div>
            <div className="city_list">
                <ul>
                    <li className="city">
                        <span onClick={likeListHandle}>moscow</span>
                        <img src="http://simpleicon.com/wp-content/uploads/cross.png" alt="" className="delete" />
                    </li>
                </ul>
            </div>
        </div>
    );
}