import {createStore , applyMiddleware , compose} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import combineReducer from './combineReducer';
import promise from 'redux-promise-middleware';

const middleware = applyMiddleware(promise() , thunk)    
const preloadedState = {};    
    const store = createStore(
        combineReducer , 
        preloadedState,
        compose(middleware)
    )

export default store;
