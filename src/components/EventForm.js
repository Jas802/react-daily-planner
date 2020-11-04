import React, { Component } from 'react'

class EventForm extends Component {
    constructor(props) {
        super(props)
    }

    createEvent = (e) => {
        if (e.key === 'Enter' && !(this.getNote.value === '')) {
            this.props.createEvent(this.getNote.value)
            this.getNote.value = '';
        }
    }

    render() {
        return(
            <div>
                <div className="form-header">
                    <h1>Event List</h1>
                </div>
                <div className="input-container">
                    <input className="event-input" type="text" placeholder="Add an event"
                    onKeyPress={this.createEvent} ref={(input)=>this.getNote = input} />
                </div>
            </div>
        )
    }
}

export default EventForm;