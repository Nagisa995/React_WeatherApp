import { React, useEffect, useState } from 'react'
import './css/style.css'
import {
    TabsBody
} from './TabsBody'
import {
    TabsItem
} from './TabsItem'


export function Tabs({ city }) {

    return (
        <div className="tabs">
            <TabsBody city={city} />
            <TabsItem />
        </div>
    );
}