import React from 'react';
import ListTabs from './component/ListTabs'
import './campaign.scss'
import ItemRowController from './component/ItemRowController';
const Campaign=(props)=>{
    return(
        <div className="campaignWrapper">
            <ListTabs/>
            <ItemRowController/>
        </div>
    )
}

export default Campaign;