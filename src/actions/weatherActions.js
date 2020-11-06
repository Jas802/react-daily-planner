
const WEATHER_API_KEY = '570b7f928d8c50ad8439997bee3747d8'

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather =(city) => { 
    const WEATHER_URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}`
    const url = `${WEATHER_URL}&q=${city},us`;
    return (dispatch) => {
        fetch(url)
        .then(response => {
            return (response.json())
        }).then(data => {
            dispatch(setWeather(data))
        }).catch(error => {
            console.log("error!", error);
        })
    }
}

const setWeather =(data) => {
    return {
        type: 'FETCH_WEATHER',
        payload: data
    }
}