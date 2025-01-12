import React from "react";

function TextInput(props) {

  const textInputStyles = {
    padding: "1.1rem",
    border: "0.1rem solid lightgray",
    fontSize: "1.1rem",
    flex: 1,
    borderRadius: "0.9rem"
  }

  return (
    <input
      type="text"
      style={textInputStyles}
      name={props.name}
      id={props.id}  
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
}

export default TextInput;