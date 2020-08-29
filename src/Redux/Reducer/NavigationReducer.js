import {reducerLogger} from '../utility/utility';
const initialState = {
    selectedTab:{ id : 0,
        label : "Upcoming Campaigns",
        apiCall:"getUpcomingCampaignsData"
       }
}
let previousState; 
let modifiedState;
const REDUCER_NAME = "NAVIGATION_REDUX";

const Reducer = (state = initialState , action) =>{
    previousState = state;
    let {type , data} = action;
    switch(type){
        case "SET_SELETED_TAB":{
            state = {...state , selectedTab : data}
        }
        default :
            state = {...state}
    }
    modifiedState = state;
    reducerLogger(previousState ,action ,modifiedState,REDUCER_NAME)
    return state;
}

export default Reducer;