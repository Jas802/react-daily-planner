import { combineReducers } from 'redux'
import eventsReducer from './eventsReducer'
import authReducer from './authReducer'
import weatherReducer from './weatherReducer';

const rootReducer = combineReducers({
    events: eventsReducer,
    auth: authReducer,
    weather: weatherReducer
});

export default rootReducer;