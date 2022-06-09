import { React} from 'react'
import './css/style.css'
import {
    TabsBody
} from './TabsBody'
import {
    TabsItem
} from './TabsItem'


export function Tabs({ city, addCityInList }) {

    return (
        <div className="tabs">
            <TabsBody city={city} addCityInList={addCityInList}/>
            <TabsItem />
        </div>
    );
}