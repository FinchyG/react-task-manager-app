import React from "react";

function SelectOption(props) {

  const styles = {

  }

  return (

    <option
      value={props.value}
    >
      {props.textContent}
    </option>
    
  
  );

}

export default SelectOption;