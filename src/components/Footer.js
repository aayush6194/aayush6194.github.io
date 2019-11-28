import React from 'react';
import { Link } from 'gatsby';
import Links from './Links.js';
let Footer =({darkMode})=> {
  return(
    <div className="grid link-grid">
    <Links className="align-left align-center" darkMode={darkMode}/>
    <div className="align-left align-end">
   
    </div>
    </div>
);
}

export default Footer;
