import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { loadEvents, addEvent, deleteEvent } from '../actions/actionCreators';
import EventForm from '../components/EventForm';
import EventList from '../components/EventList';

class EventsContainer extends Component {

    getEvents() {
        axios.get('http://localhost:3001/api/events')
        .then(response => {
            this.props.dispatch(loadEvents(response.data.data));
        })
        .catch(error => console.log(error))
    }

    createEvent = (value) => {
        axios.post('http://localhost:3001/api/events',  
                {notes: value}
            )
            .then(response => {
                this.props.dispatch(addEvent(response.data.data.id, response.data.data.notes))
            })
            .catch(error => console.log(error))
    }

    deleteEvent = (id) => {
        axios.delete(`http://localhost:3001/api/events/${id}`)
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
            <div className="events-container">
                <EventForm createEvent={this.createEvent} />
                <EventList 
                    events={this.props.events}
                    deleteEvent={this.deleteEvent}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        events: state.events
    }
}

export default connect(mapStateToProps)(EventsContainer)