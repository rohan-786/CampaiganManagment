import React, { useState } from 'react';
import Calendar from 'react-calendar';
import {connect} from "react-redux"
import { setStore } from '../../../Actions/Action';

const CustomCalendar=(props)=>{
    const [date , setSelectedDate] = useState(props.userDate || new Date());

    const onChange = date => {props.setSelectedDate(date); setSelectedDate(date);}
    return (
        <div>
          <Calendar
            onChange={onChange}
            value={date}
          />
        </div>
      );
}

const mdtp=(dispatch)=>({
    setSelectedDate(date){
        dispatch(setStore("SET_SELECTED_DATE" , date))
    }
})

export default connect(null,mdtp)(CustomCalendar);