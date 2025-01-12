import React  from "react";

const Header = (props) => {

  const headerStyle = {
    color: 'green',
    textAlign: 'center',
    padding: '1rem 0',
    boxShadow: '0 0.5rem 1.2rem grey'
  }

  return (
    <header 
      style={headerStyle}
    >
      <h1>
        {props.textContent}
      </h1>
    </header>
  )

}

export default Header;