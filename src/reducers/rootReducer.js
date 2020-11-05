import { combineReducers } from 'redux'
import eventsReducer from './eventsReducer'
import weatherReducer from './weatherReducer';

const rootReducer = combineReducers({
    events: eventsReducer,
    weather: weatherReducer
});

export default rootReducer;