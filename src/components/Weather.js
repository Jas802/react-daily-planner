import React from 'react'

class Weather extends React.Component {
    constructor() {
        super();
        this.state = {
            city: undefined,
            icon: undefined,
            main: undefined,
            fahrenheit: undefined,
            temp_min: undefined,
            temp_max: undefined,
            description: '',
            error: false
        };
        this.getWeather();
    }

    getWeather = async () => {
        //e.preventDefault();
        const WEATHER_API_KEY = "570b7f928d8c50ad8439997bee3747d8"
        const weatherApiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=LONDON&appid=${WEATHER_API_KEY}`)

        const weatherResponse = await weatherApiCall.json();

        console.log(weatherResponse);
        this.setState({
            city: weatherResponse.name,
            fahrenheit: weatherResponse.main.temp
        })
    }
    render () {
        return (
            <div className="weather-app-container">
                <div className="cards">
                    <h2>Weather!</h2>
                    <h3>{this.props.city}</h3>
                    <h5 className="py-4">
                        <i className='wi wi-day-sunny display-1'  />
                    </h5>
                    <h1 className="py-2">{this.props.fahrenheit}&deg;</h1>
                    {/** show temparature range */}
                    {tempRange(this.props.temp_min, this.props.temp_max)}

                    <h4 className="py-3">{this.props.description}</h4>
                </div>
            </div>
        )
        }
}
function tempRange(min,max) {
    return (
        <h3>
            <span className="px-4">{min}&deg;</span>
            <span className="px-4">{max}&deg;</span>
        </h3>
    )
}

export default Weather