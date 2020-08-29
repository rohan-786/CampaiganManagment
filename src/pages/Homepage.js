import React from 'react';
import {connect} from 'react-redux';
import Header from '../components/Header/Header';
import TitleLayer from '../components/TitleLayer/TitleLayer';
import NavigationBar from '../components/NavigavtionBar/NavigationBar';
import Campaign from '../components/Campaigns/Campaign';


const HomePage=(props)=>{
    return(
        <div>
            <Header/>
            <TitleLayer/>
            <NavigationBar/>
            <Campaign/>
        </div>  
    )

}

const mstp=()=>{
    
}

export default connect(mstp,null)(HomePage);