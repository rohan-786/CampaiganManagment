import {reducerLogger} from '../utility/utility';
const initialState = {
    Overlay:{
        overLayState:false
    },
    selectedDate : null
}
let previousState; 
let modifiedState;
const REDUCER_NAME = "COMMAN_REDUX";

const Reducer = (state = initialState , action) =>{
    previousState = state;
    let {type , data} = action;
    switch(type){
        case "SET_OVERLAY":{
            state = {...state , Overlay:{...state.Overlay , overLayState : data}}
            break;
        }   
        case "SET_SELECTED_DATE":{
            state ={...state , selectedDate:data}
            break;
        } 
        default :
            state = {...state}
    }
    modifiedState = state;
    reducerLogger(previousState ,action ,modifiedState,REDUCER_NAME)
    return state;
}

export default Reducer;