
import PropTypes from "prop-types"
import React from "react"
import Navbar from './Navbar';
import Navbtn from './Navbtn';


const Header = ({ siteTitle , active}) => (
  <header>
  <div className="header">
    <Navbar active={active}/>
    <Navbtn />
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
