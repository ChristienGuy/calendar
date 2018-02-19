import React from "react";
import * as moment from "moment";

import { Link } from "react-router-dom";

import chevron from "../icons/chevron.svg";
import "./CalendarControls.css";

import { Select } from "./Select";
export const CalendarControls = ({
  monthNames,
  onMonthChange,
  onYearChange,
  onReset,
  yearValue,
  monthValue,
  next,
  prev,
  currentDate
}) => {
  return (
    <div className="controls">
      <div className="controls__prev-next">
        <Navigation
          nextDate={next}
          prevDate={prev}
          className="control control--navigation"
        />
        <span className="current-date">{currentDate}</span>
        <button className="button  button--reset" onClick={onReset}>Today</button>
      </div>
      <div className="controls__select">
        <MonthSelect
          value={monthValue}
          monthNames={monthNames}
          onChange={onMonthChange}
        />
        <YearSelect value={yearValue} onChange={onYearChange} />
      </div>
    </div>
  );
};

const YearSelect = ({ onChange, value }) => {
  let years = [];

  const startYear = moment()
    .subtract(10, "Y")
    .year();

  for (let i = startYear; i < startYear + 20; i++) {
    years.push({ value: i, name: i });
  }
  return <Select value={value} options={years} onChange={onChange} />;
};

const MonthSelect = ({ onChange, monthNames, value }) => {
  const options = monthNames.map(month => ({
    name: month,
    value: month.toLowerCase()
  }));

  return <Select value={value} options={options} onChange={onChange} />;
};

const Navigation = ({ nextDate, prevDate, className }) => [
  <Link
    key={prevDate.toString()}
    to={`/${prevDate.year()}/${prevDate.format("MMM")}`}
    className={className}
  >
    <img className="icon" src={chevron} alt="" />
    prev
  </Link>,
  <Link
    key={nextDate.toString()}
    to={`/${nextDate.year()}/${nextDate.format("MMM")}`}
    className={className}
  >
    <img className="icon  icon-right" src={chevron} alt="" />
    next
  </Link>
];
