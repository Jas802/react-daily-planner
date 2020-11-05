import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeatherForm from './WeatherForm';

class WeatherList extends Component {
    calcFahrenheit(temp) {
        let far = Math.floor(temp * 9/5 - 459.67)
        return far;
    }

    renderWeather (){
       return this.props.weather.map(cityData => {
            const city = cityData.name
            const temp = this.calcFahrenheit(cityData.main.temp)//convert to F
            const description = cityData.weather[0].description 

            return (
                <tr key={ cityData } >
                    <td> { city } </td>
                    <td> { temp } </td>
                    <td> { description } </td>
                </tr>
            )
        })
    }

    
    // K * 9/5 - 459.67

    render () {
        //debugger
        return (
            <div>
                <WeatherForm />
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Temperature °F</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.weather.length > 0 ? this.renderWeather() : null } 
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps ({ weather }) {
    return{ weather }
}

export default connect(mapStateToProps)(WeatherList)