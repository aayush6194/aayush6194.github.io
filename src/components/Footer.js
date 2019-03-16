import React from 'react';
import { Link } from 'gatsby';
import Links from './Links.js';
let Footer =()=> {
  return(
    <div className="grid ">
    <Links className="align-left align-center"/>
    <div className="align-left align-end">
    <Link to="/Projects" ><span className="bold-white">Check My Projects!</span>
      <i className="material-icons shine">details</i></Link>
    </div>
    </div>
);
}

export default Footer;
