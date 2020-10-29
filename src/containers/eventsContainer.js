import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux'
import { loadEvents, addEvent, toggleEvent, deleteEvent } from '../actions/actionCreators';

class EventsContainer extends Component {

    getEvents() {
        axios.get('http://localhost:3001/api/events')
        .then(response => {
            this.props.dispatch(loadEvents(response.data));
        })
        .catch(error => console.log(error))
    }

    createEvent = (e) => {
        if (e.key ==='Enter' && !(this.getSnapshotBeforeUpdate.value === '')) {
            axios.post('http://localhost3001/api/events', {event: {notes: this.getNotes.value}})
            .then(reponse => {
                this.props.dispatch(addEvent(response.data.id, response.date.notes))
                TouchList.getNotes.value = '';
            })
            .catch(error => console.log(error))
        }
    }

    
}