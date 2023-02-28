import React from 'react'

function Header({title}) {
    const headerStyle = {
        backgroundColor: "mediumblue",
        color: "#fff"
    };

  return (
    <header style={headerStyle}>
        <h1>{title}</h1>      
    </header>
  )
}

Header.defaultProps = {
  title: "Default List"
}

export default Header
