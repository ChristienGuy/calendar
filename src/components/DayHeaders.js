import React from "react";

import "./DayHeaders.css";

export const DayHeaders = ({ days }) => (
  <div className="day-headers">
    {days.map((day, index) => (
      <span className="day-header__day" key={index}>
        {day}
      </span>
    ))}
  </div>
);
