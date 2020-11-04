import React, { Component } from 'react'
import EventItem from './EventItem'

class EventList extends Component {
    render(){
        const events = this.props.events;
    return (
        <div className="listWrapper">
            <ul className="eventList">
                {events.map((event) => {
                    return (
                        <EventItem event={event} key={event.id} id={event.id}
                            updateEvent={this.props.updateEvent}
                            deleteEvent={this.props.deleteEvent}
                        />
                    )
                })}
            </ul>
        </div>
        );
    }
}

export default EventList;