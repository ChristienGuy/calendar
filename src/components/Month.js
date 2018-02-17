import React from 'react';
import * as moment from "moment";

import {Week} from "./Week";

import "./Month.css";

export const Month = ({ activeMonth }) => {
  let weeks = [];
  // Find start of the month
  // Go back a week
  // Find Monday from that week
  const currentDate = moment(activeMonth)
    .startOf("month")
    .subtract(1, "d")
    .day("Monday");
  let monthIndex = currentDate.month();

  // Render out weeks one week at a time until we are no longer in the current month
  do {
    weeks.push(
      <Week
        style={{ padding: "20px" }}
        key={currentDate.toString()}
        startDate={moment(currentDate)}
        date={activeMonth}
      />
    );
    currentDate.add(1, "w");
    monthIndex = currentDate.month();
  } while (monthIndex === activeMonth.month());

  return <div className="month">{weeks}</div>;
};