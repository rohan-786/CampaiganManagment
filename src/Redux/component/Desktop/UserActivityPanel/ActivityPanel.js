import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getCurrentDateAndTime, getUserActivties, convertDateIntoRequiredFormat } from '../../../utility/utility';
import ZrpView from '../ZrpView/Zrp';
import CustomDialog from '../../core/CustomDialogBox/CustomDialog';
import "./userActivity.scss"
import ActivityCard from './ActivityCard';
import Calendar from '../../core/Calendar/Calendar';
import { setStore } from '../../../Actions/Action';


const ActivtiyPanel = (props) => {
    const {comman:{selectedDate , Overlay:{overLayState}={}}={} ,  userActivityInfo: { showActivityPanel, userActivityData } = {} } = props;
    if (!showActivityPanel) return null;
    const [showCalendar , handleCalendarClick] = useState(false);
    const activity = getUserActivties(convertDateIntoRequiredFormat(selectedDate) ||getCurrentDateAndTime(), userActivityData);
    if(!overLayState) props.setSelectedDate(null);
    return (
        <CustomDialog name="activityDialog" userRequestedAction={'SET_USER_ACTIVITY_VISIABLE_FLAG'}
            userRequestedActionData={false}>
                {activity.length > 0 ?
                    <div>
                        <ActivityCard data={activity}/>
                    </div> :
                    <ZrpView />}
                <span className="viewAll" onClick={()=>handleCalendarClick(!showCalendar)}>
                {!showCalendar ? 'View All Activities' : "hide Calendar"}</span>
                <div style={{marginTop:"27px"}}>
                { showCalendar && <Calendar/>} 
                </div>   
        </CustomDialog>
    )
}

const mstp = (state) => {
    const { userActivityInfo, comman } = state;
    return {
        userActivityInfo, comman
    }
}

const mdtp=(dispatch)=>({
    setSelectedDate(date){
        dispatch(setStore("SET_SELECTED_DATE" , date))
    }
})

export default connect(mstp, mdtp)(ActivtiyPanel)