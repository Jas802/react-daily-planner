import React, { Component } from 'react'

class EventItem extends Component {
    constructor(props) {
        super(props);
    }

    updateEvent = (e, id) => {
        this.props.updateEvent({id: id, checked: e.target.checked})
    }

    deleteEvent = (id) => {
        this.props.deleteEvent(id)
    }

    render() {
        const event = this.props.event;
        return (
            <li className="event" key={event.id} id={event.id}>
                {/* <input className="eventCheckbox" type="checkbox"
                checked={event.done} onChange={(e) => this.updateEvent(e, event.id)} /> */}
                <label className="eventLabel">{event.note}</label>
                <span className="deleteEventBtn" onClick={(e) => this.deleteEvent(event.id)}>
                    x
                </span>
            </li>
        )
    }
}

export default EventItem;