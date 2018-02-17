import React from "react";
import "./Select.css";

export const Select = ({ options, onChange, value }) => (
  <select className="select" value={value} onChange={onChange}>
    {options.map((option, index) => (
      <option key={index} value={option.value}>
        {option.name}
      </option>
    ))}
  </select>
);
