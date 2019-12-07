import React from 'react';
import styled from 'styled-components';

const FloatBtn = styled.div`
position: fixed;
bottom: 1em;
right: 10px;
display: grid;
grid-template-columns: auto auto;
border: 0.15em solid white;
border-radius: 50px;
background: #30ABE8;
background : ${props=> props.background};
color: white;
text-align: center;
@media( max-width: 860px){
  bottom: 5em;
}`;

const DarkMode = ({toggleDarkMode, darkMode})=>(
  <FloatBtn background={`${darkMode ? "black" : "#30ABE8"}`} >
    <div onClick={() => { toggleDarkMode("dark") }} style={{padding: ".5em 1em"}}  >
      <i className={`fas fa-moon white-txt ${darkMode && "active-nav"}`} ></i>
    </div>
    <div style={{ borderLeft: "2px solid white",padding: ".5em 1em"}} onClick={() => toggleDarkMode("notDark")}>
      <i className={`fas fa-sun white-txt ${!darkMode && "active-nav"}`} ></i>
    </div>
  </FloatBtn>
);

export default DarkMode;
