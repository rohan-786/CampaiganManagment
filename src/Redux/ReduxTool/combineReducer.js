import { combineReducers} from 'redux';
import CommanReducer from '../Reducer/CommanReducer';
import NavigationReducer from "../Reducer/NavigationReducer";

export default combineReducers({
    comman : CommanReducer,
    navigation : NavigationReducer
})