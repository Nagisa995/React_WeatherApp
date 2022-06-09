import { React, useState } from 'react'
import './css/style.css'
import {
    Tabs
} from './Tabs'
import {
    AddedCityList
} from './AddedCityList'
import {
    getCityList
} from './utils'

export function UIContent({likeListHandle, city}) {
    const [cityList,setCityList]=useState(getCityList())
    return (
        <div className='main_block'>
            <Tabs city={city} addCityInList={setCityList}/>
            <AddedCityList likeListHandle={likeListHandle} list={cityList} changeList={setCityList}/>
        </div>
    );
}