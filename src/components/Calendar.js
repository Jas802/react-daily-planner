import React from 'react'
import moment from 'moment' // library spefically for days and dates

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

    setMonth = (month) => {
        let monthNo = this.months.indexOf(month);
        let dateContext = Object.assign({}, this.state.dateContext)
        dateContext = moment(dateContext).set("month", monthNo);
        this.setState({
            dateContext: dateContext
        })
    }

    onSelectChange = (e, data) => {
        this.setMonth(data);
        this.props.onMonthChange && this.props.onMonthChange();
    }

    SelectList = (props) => {
        let popup = props.data.map((data) => {
            return (
                <div key={data}>
                    <a href="#" onClick={(e) => {this.onSelectChange(e, data)}}>
                        {data}
                    </a>    
                </div>
            )
        })

        return (
            <div className="month-popup">
                {popup}
            </div>
        )
    }

    onChangeMonth = (e, month) => {
        this.setState({
            showMonthPopup: !this.state.showMonthPopup
        })
    }

    MonthNav = () => {
        return (
            <span className="label-month"
            onClick={(e) => {this.onChangeMonth(e, this.month())}}>
                {this.month()}
                {this.state.showMonthPopup &&
                    <this.SelectList data={this.months} />
                }
            </span>
        )
    }

    showYearEditor= () => {
        this.setState({
            showYearNav: true
        })
    }

    setYear = (year) => {
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).set("year", year);
        this.setState({
            dateContext: dateContext
        })
    }

    onYearChange = (e) => {
        this.setYear(e.target.value);
        this.props.onYearChange && this.props.onYearChange(e, e.target.value)
    }

    onKeyUpYear = (e) => {
        if (e.which === 13 || e.which === 27) { //if 'enter' or 'esc' was pressed
            this.setYear(e.target.value);
            this.setState({
                showYearNav: false
            })
        }
    }

    YearNav = () => {
        return (
            this.state.showYearNav ? 
            <input 
                defaultValue= {this.year()} 
                className="editor-year" 
                ref={(yearInput) => { this.yearInput = yearInput}}
                onKeyUp = {(e) => this.onKeyUpYear(e)} 
                onChange = {(e) => this.onYearChange(e)} 
                type="number"
                placeholder="year"
                />
            :
            <span 
                className="label-year"
                onDoubleClick={(e) => {this.showYearEditor()}}>
                {this.year()}
            </span>
        )
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
                    <tr className="calendar-header">
                        <td colSpan="5">
                            <this.MonthNav />
                            {" "}
                            <this.YearNav />
                        </td>
                    </tr>
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