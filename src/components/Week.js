import React from "react";
import * as moment from "moment";

import { Day } from "./Day";

import "./Week.css";

export const Week = ({ startDate, date }) => {
  let days = [];
  let currentDate = moment(startDate);

  for (let i = 0; i < 7; i++) {
    const day = {
      name: currentDate.format("dd"),
      date: currentDate.format("DD"),
      month: currentDate.format("MMM")
    };

    days.push(
      <Day
        otherMonth={date.month() !== currentDate.month()}
        key={i}
        day={day}
      />
    );
    currentDate.add(1, "d");
  }
  return <div className="week">{days}</div>;
};
