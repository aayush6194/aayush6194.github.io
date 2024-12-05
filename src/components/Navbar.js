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
align-self: stretch`;

let Navbar = ({ darkMode, active }) => {
  return (
    <div>
      <Animation className="hide">
        {li.map((i) =>
        (<span pose={"start"}
          key={i}
          style={{
            background: "rgba(0 , 0, 0, 0.1)",
            top: Math.floor(Math.random() * 95) + "%",
            left: Math.floor(Math.random() * 95) + "%",
            position: "absolute",
            display: "block",
            width: "1em",
            height: "1em",
            bottom: 0,
            borderRadius: "0.1em",
            animationDelay: "0s",
            overflow: "hidden",
            animationDuration: Math.floor(Math.random() * 24) + 18 + "s",
            animationIterationCount: "infinite"
          }}
          className="particle"
          time={Math.floor(Math.random() * 24) + 12}>
        </span>))}
      </Animation>
      <Box>
        <Name><span className="white" style={{fontSize: '2em'}}>&lt;Aayush	/&gt;</span></Name>
        <Link to="/Message"
          style={{
            position: 'fixed', zIndex: 1000,
            filter: active === "message" ? "drop-shadow(2px 3px 10px gray)" : '',
            color: active === "message" ? "#30ABE8" : '',
            background: active === "message" ? "white" : '',
            justifySelf: "end"
          }}
          className={`bt bt-round-white ${darkMode && "dark-btn"}`}>Say Hi!</Link>
      </Box>
      <div></div>
    </div>
  );
}
export default Navbar;
