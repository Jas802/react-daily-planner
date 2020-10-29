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

    updateEvent = (e, id) => {
        axios.put(`http://localhost3001/api/events/${id}`, {event: {done: e.target.checked}})
        .then(response => {
            this.props.dispatch(toggleEvent(id))
        })
        .catch(error => console.log(error))
    }

    deleteEvent = (id) => {
        axios.delete(`http://localhost3001/api/events/${id}`)
        .then(response => {
            this.props.dispatch(deleteEvent(id))
        })
        .catch(error => console.log(error))
    }

    componentDidMount() {
        this.getEvents();
    }

    render () {
        return (
            <div>
                
            </div>
        )
    }


}