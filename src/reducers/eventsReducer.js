import { LOAD_EVENTS, ADD_EVENT, DELETE_EVENT } from '../actions/actionTypes';
//TOGGLE_EVENT,

function eventsReducer(state=[], action)
{
    switch(action.type) {
        case LOAD_EVENTS:
            return action.events;

        case ADD_EVENT:
            //debugger
            return [
                ...state,
                {
                    id: action.id,
                    notes: action.notes,
                }
            ];

        case DELETE_EVENT:
            return state.filter(event => event.id !== action.index);

        default:
            return state;
    }
}

export default eventsReducer