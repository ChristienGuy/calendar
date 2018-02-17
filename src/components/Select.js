import React from "react";

export const Select = ({ options, onChange, value }) => (
  <select value={value} onChange={onChange}>
    {options.map((option, index) => (
      <option key={index} value={option.value}>
        {option.name}
      </option>
    ))}
  </select>
);
