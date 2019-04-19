import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';


const li = Array.from(Array(20).keys());
const Animation = styled.span`display: block;`;
const Box = styled.div`display: grid; grid-template-columns: 1fr 1fr;`;
const Name = styled.div`
color: white;
font-weight: bold;
font-size: 1.3em;
align-self: stretch

`;
let Navbar = ({active})=>{
  return (
    <div>
    <Animation className="hide">
    {li.map((i)=>
      (<span pose={"start"}
        key={i}
        style={{
          background : "rgba(255 , 255, 255, 0.2)",
          top: Math.floor(Math.random() * 95) + "%",
          left:Math.floor(Math.random() * 95) + "%",
          position: "absolute",
          display: "block",
          width: "1em",
          height: "1em",
          bottom: 0,
          borderRadius: "0.1em",
          animationDelay: "0s",
          overflow: "hidden",
          animationDuration: Math.floor(Math.random() * 24) + 18 +"s",
          animationIterationCount: "infinite"
        }}
        className="particle"
        time={Math.floor(Math.random() * 24) + 12}>
      </span>))}
    </Animation>
      <Box>
        <Name><span className="blue">&lt;</span>Aayush	<span className="blue">/&gt;</span></Name>
        <Link to="/Message"
        style={{filter: active === "message"? "drop-shadow(2px 3px 10px gray)" : '',
                color: active === "message"? "#30ABE8" : '',
                background:  active === "message"? "white" : '',
                justifySelf: "end"
              }}
                className="bt bt-round-white ">Say Hi!</Link>
      </Box>
      <div className="navbar nav-grid">
          <i className="logos material-icons">face</i>
          <ul  className="nav align-left-on-lg">
            <li className="option" >
            <Link to="/" >
              <center>
                <i style={{filter: active === "home"? "drop-shadow(2px 3px 10px gray)" : ''}} className= "material-icons lg-icon">home</i>
              </center>
              <div style={{borderBottom: active === "home"? "2px solid white" : "0"}} className="text">HOME</div>
              </Link>
            </li>

            <li className="option" >
              <Link to="/Projects" >
                <center>
                  <i style={{filter: active === "projects"? "drop-shadow(0 0 5px gray)" : '' }} className="material-icons lg-icon">work</i>
                </center>
                  <div style={{borderBottom: active === "projects"? "2px solid white" : "0"}} className="text">PROJECTS</div>
              </Link>
            </li>
            <li className="option">
              <a href="https://github.com/aayush6194/aayush6194.github.io/raw/master/Resume.pdf" >
              <center><i className="material-icons lg-icon">account_circle</i></center>
              <div className="text">RESUME</div></a>
            </li>
          </ul>
      </div>
    </div>
    );
}
export default Navbar;
