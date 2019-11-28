import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavLink = Link;
const Nav = styled.div`
  top: 0em;
  left:0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  font-size: .8em;
  height: 100vh;
  display: grid;
  padding: .3em;
  position: fixed;
  grid-template-rows: 1fr 1fr 1fr;
  place-items: center;
  background: ${props => props.background};
  z-index: 10;
  @media (max-width: 860px) {
    height: 65px;
     width: 100vw;
     top: calc(100% - 65px);
     grid-template-columns: 1fr 1fr 1fr;
     grid-template-rows: 1fr;
  }`;

const active = {textShadow: "2px 2px 4px #000000" , color: "white"};

const Sidebar = ({active, darkMode}) => { 
return (<div>
    <Nav background={darkMode? "black":"#156CEC"}>
      <NavLink className="nav-item txt-md center-items" to="/"><i className={`material-icons lg-icon ${active === "home"? "active-nav" : ""}`} >home</i><div>Home</div></NavLink>
      <NavLink className="nav-item txt-md center-items" to="/Projects"> <i className={`material-icons lg-icon ${active === "project"? "active-nav" : ""}`}>work</i><div>Projects</div></NavLink>
      <a className="nav-item txt-md center-items" href="https://github.com/aayush6194/aayush6194.github.io/raw/master/Resume.pdf"><i className="material-icons lg-icon ">account_circle</i><div>Resume</div></a>
    </Nav>
  </div>
  )};

export default Sidebar;