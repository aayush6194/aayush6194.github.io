import React from 'react'
import { Link } from 'gatsby'

let Navbar = (props)=>{
  return (
    <div >
      <div className="rightt">
        <Link to="/" className="bt bt-round-white ">Say Hi!</Link>
      </div>
      <div className="navbar nav-grid">
          <i className="logos material-icons">face</i>
          <ul  className="nav align-left-on-lg">
            <li className="option" ><Link to="/" ><center><i className="material-icons lg-icon">home</i></center><div className="text">HOME</div></Link></li>
            <li className="option" ><Link to="/Projects" ><center> <i className="material-icons lg-icon">work</i></center><div className="text">PROJECTS</div> </Link></li>
            <li className="option"><a href="https://github.com/aayush6194/aayush6194.github.io/raw/master/Resume.pdf" >
              <center><i className="material-icons lg-icon">account_circle</i></center>
              <div className="text">RESUME</div></a>
            </li>
          </ul>
      </div>
    </div>
    );
}

export default Navbar;
