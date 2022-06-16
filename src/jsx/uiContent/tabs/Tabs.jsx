import { React} from 'react'
import {
    TabsBody
} from './tabsBody/TabsBody'
import {
    TabsItem
} from './tabsItem/TabsItem'


export function Tabs() {

    return (
        <div className="tabs">
            <TabsBody/>
            <TabsItem />
        </div>
    );
}