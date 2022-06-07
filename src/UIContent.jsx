import React from 'react'
import './css/style.css'
import {
    Tabs
} from './Tabs'
import {
    AddedCityList
} from './AddedCityList'

export function UIContent({likeListHandle, city}) {
    return (
        <div className='main_block'>
            <Tabs city={city}/>
            <AddedCityList likeListHandle={likeListHandle}/>
        </div>
    );
}