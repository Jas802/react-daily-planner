import * as actions from '../actions/actionTypes';

export function loadEvents(events) {
    return { type: LOAD_EVENTS, events: events }
}

export function addEvent(id, notes) {
    return { type: ADD_EVENT, id: id, notes: notes}
}

export function toggleEvent(index) {
    return { type: TOGGLE_EVENT, index: index }
}

export function deleteEvent(index) {
    return { type: DELETE_TODO, index: index }
}

//

export function authenticated() {
    return { type: actions.AUTHENTICATED }
}

export function unauthenticated (error) {
    return { type: actions.UNAUTHENTICATED, error: error }
}