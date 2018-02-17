import React from "react";
import * as moment from "moment";

import { Link } from "react-router-dom";

import chevron from "../icons/chevron.svg";
import "./CalendarControls.css";

import { Select } from "./Select";
export const CalendarControls = ({
  activeDate,
  monthNames,
  onMonthChange,
  onYearChange
}) => {
  return (
    <div className="controls">
      <div className="controls__prev-next">
        <NavigationButton
          className="control  control--navigation"
          prev
          date={activeDate}
        >
          <img className="icon" src={chevron} alt="" />
          prev
        </NavigationButton>
        <NavigationButton
          className="control  control--navigation"
          next
          date={activeDate}
        >
          <img className="icon  icon-right" src={chevron} alt="" />
          next
        </NavigationButton>
        <span className="current-date">{activeDate.format("MMMM, YYYY")}</span>
      </div>
      <div className="controls__select">
        <MonthSelect
          value={activeDate.format("MMMM").toLowerCase()}
          monthNames={monthNames}
          onChange={onMonthChange}
        />
        <YearSelect value={activeDate.year()} onChange={onYearChange} />
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

const NavigationButton = ({ prev, next, date, children, className }) => {
  let currentDate = date.clone();
  if (prev) {
    currentDate.subtract(1, "M");
  } else {
    currentDate.add(1, "M");
  }
  return (
    <Link
      className={className}
      to={`/${currentDate.year()}/${currentDate.format("MMM")}`}
    >
      {children}
    </Link>
  );
};
