
import moment from 'moment';
export function reducerLogger(previousState, action, finalState, ReducerName) {
    let executedActions = [];
    executedActions = [
        { "Reducer": ReducerName },
        { "PreviousState": previousState },
        { "Action": action.type },
        { "CurrentActionData": action.data },
        { "ModifiedState": finalState },
    ]
    console.log("Reducer Name ===", ReducerName, "==Action==", action.type, "====>", executedActions);
}

export const isEmpty = (value) => {
    if (typeof value == 'undefined' || value == null) {
        return true;
    }
    else if (typeof value === "object") {
        if (Array.isArray(value)) {
            return value.length > 0 ? false : true;
        } else {
            return Object.keys(value).length > 0 ? false : true;
        }
    }
    else if (typeof value == "string") {
        return value.length > 0 ? false : true;
    }
    else if (typeof value == 'function') {
        return false;
    }
    return false;
}


export const getDateInDMY =(dateInput)=>{
    if(!dateInput) return null;
    let date = {};
    let dateParms = dateInput.split(" ");
    dateParms = `${dateParms[1]} ${dateParms[0]} ${dateParms[2]}`;
    date['D'] = moment(dateParms).format('D');
    date['M'] = moment(dateParms).format('MMM');
    date['Y'] = moment(dateParms).format('YYYY');
    return date;
}
export const getCurrentDateAndTime = () =>{
  return moment().format('MMM D YYYY  h:mmA');
}

export const getUserActivties=(date , activities = [])=>{
    return activities.filter(activity => {
        const date1 =  getDateInDMY(activity.start_time);
        const date2 =  getDateInDMY(date);
        if(date1['D'] == date2['D'] && date1['M'] == date2['M'] && date1['Y'] == date2['Y']){
            return activity;
        }
    });
}

export const convertDateIntoRequiredFormat=(date)=>{
    if(!date) return null;

    const d = moment(date).format('D');
    const m = moment(date).format('MMM');
    const y = moment(date).format('YYYY');
    return `${d} ${m} ${y}`;
}


