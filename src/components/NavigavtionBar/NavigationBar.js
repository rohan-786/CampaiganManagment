import React, { useState } from 'react';
import {connect} from 'react-redux';
import {navigationTabs} from "../../utility/Constant";
import Tab from './Tab';
import './navigationBar.scss'
import { setStore } from '../../Redux/Actions/Action';

const NavigationBar=(props)=>{
    const {selectedTab} = props;

    const [selectedTabState , TabSelectHandler] = useState(selectedTab); 

    const clickHandler=(selectedTabInfo)=>{
        TabSelectHandler(selectedTabInfo);
        props.setSelectedTabInfo(selectedTabInfo);
    }
    
    return(
        <div className="navWrap">
            {navigationTabs.map((tab)=>{
                const isActive = selectedTabState.id == tab.id; 
               return( <Tab data={tab} eventHandler={clickHandler} active={isActive} />)
            })}
        </div>
    )
}

const mstp=(state)=>{
    const {navigation:{selectedTab}={}} = state;

    return {selectedTab};
}
const mdtp=(dispatch)=>({
    setSelectedTabInfo(info){
        dispatch(setStore('SET_SELETED_TAB',info))
    }
})

export default connect(mstp,mdtp)(NavigationBar);