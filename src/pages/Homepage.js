import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import Header from '../components/Header/Header';
import TitleLayer from '../components/TitleLayer/TitleLayer';
import NavigationBar from '../components/NavigavtionBar/NavigationBar';
import Campaign from '../components/Campaigns/Campaign';
import Overlay from "../Redux/component/core/CustomOverlay/overlay";


const HomePage=(props)=>{
    useEffect(() => {
        document.body.style.overflowX = "hidden";
      }, []);
    return(
        <React.Fragment>
        <div>
            <Header/>
            <TitleLayer/>
            <NavigationBar/>
            <Campaign/>
        </div>  
        <Overlay/>
        </React.Fragment>
    )

}

const mstp=()=>{
    
}

export default connect(mstp,null)(HomePage);