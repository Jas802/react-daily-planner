import React, { Component } from 'react'

class EventForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            note: ''
        }
        this.handleChange = this.handleChange.bind(this);
        //  arrow function will make the bind: this.createEvent = this.createEvent.bind(this);
    }

    createEvent = (e) => {
        e.preventDefault();
        if (!(this.state.note === '')) {
            this.props.createEvent(this.state.note);
            this.setState({
                note: ''
            });
        }
    }
    handleChange(e){
        const note = e.target.value;   
        this.setState({
            note
        })
    }

    render() {
        return(
            <div>
                <div className="form-header">
                    <h1>Notes</h1>
                </div>
                <form className="input-container" onSubmit={this.createEvent}>
                    <input className="event-input" type="text" placeholder="Add a note" name="notes"
                     onChange={this.handleChange} />
                </form>
            </div>
        )
    }
}

export default EventForm;