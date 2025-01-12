import React from "react";
import SelectOption from "./SelectOption";

function SelectInput(props) {

  const selectInputStyles = {
    padding: "1.1rem",
    border: "0.1rem solid lightgray",
    fontSize: "1.1rem",
    flex: 1,
    borderRadius: "0.9rem"
  }

  return (

    <select
      style={selectInputStyles}
      id={props.id}
      value={props.value}
      onChange={props.onChange}
    >
      <SelectOption
        value="top"
        textContent="Top Priority"
      />
      <SelectOption
          value="middle"
          textContent="Middle Priority"
      />
      <SelectOption
          value="low"
          textContent="Low Priority"
      />
    </select>
  );
}

export default SelectInput;