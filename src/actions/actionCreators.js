import { LOAD_EVENTS, ADD_EVENT, TOGGLE_EVENT, DELETE_EVENT } from '../actions/actionTypes';

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