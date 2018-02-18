import React from "react";
import "./Select.css";
import chevron from "../icons/chevron-down.svg";

export const Select = ({ options, onChange, value }) => (
  <select style={{ backgroundImage: `url(${chevron})` }} className="select" value={value} onChange={onChange}>
    {options.map((option, index) => (
      <option key={index} value={option.value}>
        {option.name}
      </option>
    ))}
  </select>
);
