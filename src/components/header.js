
import PropTypes from "prop-types"
import React from "react"
import Navbar from './Navbar';
import Navbtn from './Navbtn';


const Header = ({ siteTitle , active, darkMode}) => (
  <header>
  <div className="header">
    <Navbar active={active} darkMode={darkMode}/>
  </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
