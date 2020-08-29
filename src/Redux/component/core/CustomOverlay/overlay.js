import React from 'react';
import {connect} from 'react-redux';
import style from './overlay.scss';


class Overlay extends React.Component {
    
    render() {
        const {overLayState , type} = this.props;
        
        if(overLayState == false) return null;
        
        return (<div className={'customOverlay'}>
            <div class={`overlay ${type == 'white' ? 'whiteOverlay' : 'blackOverlay'}`}>
            </div>

        </div>);
    }
    
}


const mapStateToProps=state=>{
    const {comman:{Overlay:{overLayState}={}}={}} = state;

    return {overLayState}

}
export default connect(mapStateToProps , null)(Overlay);