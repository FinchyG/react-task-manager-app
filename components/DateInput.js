import React from "react";

function DateInput(props) {

  const styles = {
    display: "inline",
    width: "10%"
  }

  return (

    <input
    type="date"
    id={props.id}
    value={props.value}
    onChange={props.onChange}
  />
  
  );

}

export default DateInput;