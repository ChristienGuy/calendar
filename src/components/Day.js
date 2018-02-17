import React from "react";

import "./Day.css";

export const Day = ({ day, otherMonth }) => {
  const className = otherMonth ? "day otherMonth" : "day";
  return (
    <span className={className}>
      {day.date}
    </span>
  );
};
