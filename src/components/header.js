import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Navbar from './Navbar';
import Navbtn from './Navbtn';


const Header = ({ siteTitle }) => (
  <header>
  <div className="header">
    <Navbar />
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
