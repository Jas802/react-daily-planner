import React, { Component } from 'react'
import EventItem from './EventItem'

class EventList extends Component {
    render(){
        const events = this.props.events;
        const eventUL = events.length ? events.map((event) => {
            return ( 
                <EventItem event={event} key={event.id} id={event.id}
                    deleteEvent={this.props.deleteEvent}
                />
            )
        }) :
        <h3>You have no notes</h3>;
    
        
    return (
        <div className="listWrapper">
            <ul className="eventList">
                {eventUL}
            </ul>
        </div>
        );
    }
}

export default EventList;