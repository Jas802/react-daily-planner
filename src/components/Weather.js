import React from 'react'

export default function Weather() {
    return (
        <div className="weather-app-container">
            <div className="cards">
                <h2>Weather!</h2>
                <h5 className="py-4">
                    <i className='wi wi-day-sunny display-1'  />
                </h5>
                <h1 className="py-2">25&deg;</h1>
                {/** show temparature range */}
                {tempRange(24,19)}

                <h4 className="py-3">Rain</h4>
            </div>
        </div>
    )
}

function tempRange(min,max) {
    return (
        <h3>
            <span className="px-4">{min}&deg;</span>
            <span className="px-4">{max}&deg;</span>
        </h3>
    )
}
