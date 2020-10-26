import React from 'react'
import moment from 'moment'

class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.width = props.width || "350px";
        this.style = props.style || {};
    }

    state = {
        dateContext: moment(),
        today: moment(),
        showMonthPopup: false,
        showYearPopup: false
    }

    weekdays = moment.weekdays(); // All weekdays
    weekdaysShort = moment.weekdaysShort(); //Abbreviated weekdays
    months = moment.months();

    year = () => {
        return this.state.dateContext.format("Y");
    }
    month = () => {
        return this.state.dateContext.format("MMMM");
    }
    daysInmonth = () => {
        return this.state.dateContext.daysInmonth();
    }
    currentDate = () => {
        return this.state.dateContext.get("date");
    }
    currentDay = () => {
        return this.state.dateContext.format("D")
    }
    firstDayOfMonth= () => {
        let dateContext = this.state.dateContext
        let firstDay = moment(dateContext).startOf('month').format('d'); //assigns numbers to weekdays
        return firstDay;
    }

    
    render() {
    return (
        <div className="calendar-container">
            <table className="calendar">
                
            </table>
        </div>
        )
    }
}

export default Calendar