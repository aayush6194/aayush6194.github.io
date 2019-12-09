import React from 'react';

let Links =({darkMode})=> {
  return(
  <div className="grid-mobile align-left-on-lg">
    <a href="https://github.com/aayush6194">
      <button className={`bt bt-custom lift center-sm expand-sm ${darkMode? "dark-btn" : ""}`} >
      <i className="fab fa-github md-icon"></i>
      &nbsp; GitHub</button>
    </a>

    <a href="mailto:aayush6194@gmail.com">
     <button className={`bt bt-custom lift center-sm expand-sm ${darkMode? "dark-btn" : ""}`} > <i className="fa fa-envelope md-icon" aria-hidden="true"></i> &nbsp; Email</button>
    </a>

    <a href="https://www.linkedin.com/in/aayush-shrestha-b4b1b9158/">
   
      <button className={`bt bt-custom lift center-sm expand-sm ${darkMode? "dark-btn" : ""}`} >
      <i className="fab fa-linkedin-in md-icon"></i> &nbsp; LinkedIn </button>
     
    </a>
   </div>);
}

export default Links;
