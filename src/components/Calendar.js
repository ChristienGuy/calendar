import React, { Component } from "react";
import * as moment from "moment";

import { Month } from "./Month";
import { DayHeaders } from "./DayHeaders";
import { CalendarControls } from "./CalendarControls";

import "./Calendar.css";

class Calendar extends Component {
  state = {
    activeDate: moment(),
    dayNames: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    monthNames: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ]
  };

  componentWillMount() {
    const { year, month } = this.props.match.params;
    this.updateActiveMonth(year, month);
  }

  componentWillReceiveProps = nextProps => {
    const { year, month } = nextProps.match.params;
    this.updateActiveMonth(year, month);
  };

  updateActiveMonth = (year, month) => {
    if (year && month) {
      const date = moment()
        .year(year)
        .month(month);

      this.setState({
        activeDate: date
      });
    }
  };

  onMonthSelect = e => {
    const date = moment(this.state.activeDate);
    const { history } = this.props;
    date.month(e.target.value);

    history.push(`/${date.year()}/${date.format("MMM")}`);
  };

  onYearSelect = e => {
    const date = moment(this.state.activeDate);
    const { history } = this.props;

    date.year(e.target.value);

    history.push(`/${date.year()}/${date.format("MMM")}`);
  };

  resetDate = () => {
    const { history } = this.props;
    const date = moment();
    history.push(`/${date.year()}/${date.format("MMM")}`);
  }

  render() {
    const { activeDate, dayNames, monthNames } = this.state;
    return (
      <div className="calendar">
        <CalendarControls
          onYearChange={this.onYearSelect}
          onMonthChange={this.onMonthSelect}
          monthNames={monthNames}
          onReset={this.resetDate}
          monthValue={activeDate.format("MMMM").toLowerCase()}
          yearValue={activeDate.year()}
          next={activeDate.clone().add(1, "M")}
          prev={activeDate.clone().subtract(1, "M")}
          currentDate={activeDate.format("MMM, YYYY")}
        />
        {[<DayHeaders days={dayNames} />, <Month activeMonth={activeDate} />]}
      </div>
    );
  }
}

export default Calendar;
