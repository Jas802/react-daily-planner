import React, { Component } from 'react'

class EventItem extends Component {
    // constructor(props) {
    //     super(props);
    // }

    deleteEvent = (id) => {
        this.props.deleteEvent(id)
    }

    render() {
        const event = this.props.event;
        
        return (
            <li className="event" key={event.id} id={event.id}>
                <label className="eventLabel">{event.notes}</label>
                <span className="deleteEventBtn" onClick={(e) => this.deleteEvent(event.id)}>
                    &times;
                </span>
            </li>
        )
    }
}

export default EventItem;