import { Component } from "react";
import "./DateAndDay.css";

class DateAndDay extends Component {
  render() {
    return (
      <div className="date-and-day">
        <div className="date-container">
          <div className="left">
            <p className="date">12</p>
          </div>
          <div className="right">
            <p className="month">JAN</p>
            <p className="year">2016</p>
          </div>
        </div>
        <div className="day-container">
          <p className="day">Tuesday</p>
        </div>
      </div>
    );
  }
}
export default DateAndDay;
