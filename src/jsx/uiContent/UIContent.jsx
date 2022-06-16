import { React } from 'react'
import {
    Tabs
} from './Tabs/Tabs'
import {
    AddedCityList
} from './AddedCityList/AddedCityList'

export function UIContent() {
    return (
        <div className='main_block'>
            <Tabs />
            <AddedCityList />
        </div>
    );
}

