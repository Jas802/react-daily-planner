import React from 'react'
import moment from 'moment'

class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.width = props.width || "350px";
        this.style = props.style || {};
        this.style.width = this.width
    }

    state = {
        dateContext: moment(),
        today: moment(),
        showMonthPopup: false,
        showYearPopup: false
    }

    style = {
        position: "relative",
        margin: "50px auto"
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
        return this.state.dateContext.daysInMonth();
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
        let weekdays = this.weekdaysShort.map((day) => {
            return(
                <td key={day} className="week-day">{day}</td> //creates table data for each day
            )
        })

        let blanks = [];
        for (let i = 0; i < this.firstDayOfMonth(); i++) { //loops through start of month to create empty day slots
            blanks.push(<td key={i * 80} className="emptySlot">
                {""}
            </td>
            )
        }

        let daysInmonth = []
        for (let d = 1; d < this.daysInmonth(); d++) {
            let className = (d === this.currentDay() ? "day current-day": "day");
            daysInmonth.push(
                <td key={d} className={className} >
                    <span>{d}</span>
                </td>
            )
        }

        var totalSlots = [...blanks, ...daysInmonth];
        let rows = []
        let cells = []

        totalSlots.forEach((row, i) => {
            if((i % 7) !== 0) { //if index is NOT divisible by 7 starts, new row
                cells.push(row);
            } else {
                let insertRow = cells.slice();
                rows.push(insertRow)
                cells = [];
                cells.push(row)
            }
            if (i === totalSlots.length - 1) {
                let insertRow = cells.slice();
                rows.push(insertRow);
            }
        });

        let trElements = rows.map((d, i) => {
            return(
                <tr key={i*100}>
                    {d}
                </tr>
            )
        });
    return (
        <div className="calendar-container" style={this.style}>
            <table className="calendar">
                <thead>
                    <tr className="calendar-header"></tr>
                </thead>
                <tbody>
                    <tr>
                        {weekdays}
                    </tr>
                    {trElements}
                </tbody>
            </table>
        </div>
        )
    }
}

export default Calendar