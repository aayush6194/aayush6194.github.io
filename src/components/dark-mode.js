import React from 'react';
import styled from 'styled-components';

const FloatBtn = styled.div`
position: fixed;
bottom: 1em;
right: 10px;
display: grid;
grid-template-columns: auto auto;

border: 0.15em solid white;
  padding: 0.58em 0.72em;
  border-radius: 50px;
  background: #30ABE8;
  background : ${props=> props.background}
  color: white;
  margin-right: 0.15em;
  width: 4.7em;
  text-align: center;

`;

const DarkMode = ({toggleDarkMode, darkMode})=>(
    <FloatBtn background={`${darkMode? "black": "#30ABE8"}`}>
        <div>
    <i className={`fas fa-moon ${darkMode && "active-nav"}`} onClick={()=>toggleDarkMode("dark")}></i>
    </div>
    <div  style={{borderLeft: "2px solid white" }}>
    <i className={`fas fa-sun ${!darkMode && "active-nav"}`} onClick={()=>toggleDarkMode("notDark")}></i>
    </div>
    </FloatBtn>
);

export default DarkMode;
