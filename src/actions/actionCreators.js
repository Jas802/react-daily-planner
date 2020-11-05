import * as actions from '../actions/actionTypes';

export function loadEvents(events) {
    return { type: actions.LOAD_EVENTS, events: events }
}

export function addEvent(id, notes) {
    return { type: actions.ADD_EVENT, id: id, notes: notes}
}

export function deleteEvent(index) {
    return { type: actions.DELETE_EVENT, index: index }
}

//