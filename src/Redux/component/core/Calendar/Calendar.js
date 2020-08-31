import React, { useState } from 'react';
import Calendar from 'react-calendar';
import {connect} from "react-redux"
import { setStore } from '../../../Actions/Action';
import './calendar.scss'

const CustomCalendar=(props)=>{
  const {closeCalenderClick,rescheduleHandler} = props;
    const [date , setSelectedDate] = useState(props.userDate || new Date());

    const onChange = date => {props.setSelectedDate(date); setSelectedDate(date);}
    return (
        <div>
          <Calendar
            onChange={onChange}
            value={date}
          />
          <div className="mkInline">
          <div className="schedule Btn" onClick={rescheduleHandler}><span>Reschedule Campaign</span></div>
          <div className="close Btn" onClick={closeCalenderClick}><span>Close</span></div>
          </div>
        </div>
      );
}

const mdtp=(dispatch)=>({
    setSelectedDate(date){
        dispatch(setStore("SET_SELECTED_DATE" , date))
    }
})

export default connect(null,mdtp)(CustomCalendar);