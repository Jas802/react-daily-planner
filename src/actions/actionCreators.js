import * as actions from '../actions/actionTypes';

export function loadEvents(events) {
    return { type: actions.LOAD_EVENTS, events: events }
}

export function addEvent(id, notes) {
    return { type: actions.ADD_EVENT, id: id, notes: notes}
}

// export function toggleEvent(index) {
//     return { type: actions.TOGGLE_EVENT, index: index }
// }

export function deleteEvent(index) {
    return { type: actions.DELETE_EVENT, index: index }
}

//

export function authenticated() {
    return { type: actions.AUTHENTICATED }
}

export function unauthenticated (error) {
    return { type: actions.UNAUTHENTICATED, error: error }
}