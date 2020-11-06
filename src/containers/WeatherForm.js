import React, { Component } from 'react';
import  { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { fetchWeather } from '../actions/weatherActions';

class WeatherForm extends Component {
    constructor(props) {
    super(props)

    this.state = { term: '' }
    }

    onInputChange = (event) => {
        this.setState({ term: event.target.value});
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.fetchWeather(this.state.term)
        this.setState({ term: ''})
    }

    render() {
        return (
            <div className="container h-100">
                <form onSubmit={this.onFormSubmit} className="weather-input">
                    <input
                        type="text"
                        placeholder="Search a city"
                        value={this.state.term}
                        onChange={this.onInputChange} 
                    />
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-secondary">Search</button>
                    </span>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, {fetchWeather})(WeatherForm);