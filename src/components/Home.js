import React from 'react';
import styled, { css, keyframes } from 'styled-components'

const li = Array.from(Array(30).keys());
const animate = keyframes`
0%{
    transform: translateY(0) rotate(0deg);
    opacity: 1;
}
100%{
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
}
`;

const bgColor = ["rgba(48, 171, 232 , 0.2)", "rgba(255 , 255, 255, 0.2)"]
const Particle = styled.li`
position: absolute;
display: block;
list-style: none;
width: 1em;
height: 1em;
background: ${props=>props.bg};
animation: ${animate} ${props=>props.time + "s"} linear infinite;
bottom: 0px;
top: ${props=>props.top + "%"};
left: ${props=>props.left + "%"};
border-radius: 0.1em;
animation-delay: 0s;
overflow: hidden !important;` ;

const Animation = styled.ul`
  `;


const Home = (props) => {
  return (
  <div className="home grid align-center">
  <Animation >
  {li.map((i)=>
    (<Particle
      key={i}
      top={Math.floor(Math.random() * 95)}
      left={Math.floor(Math.random() * 95)}
      bg={bgColor[Math.floor(Math.random() * 2)]}
      time={Math.floor(Math.random() * 24) + 12}>
    </Particle>))}
  </Animation>
        <div className="content-container align-left">
          Hello, I am <span className="highlight">Aayush!</span> I am a junior at the ULM pursuring a Computer Science degree.
          I am a web developer, focused on <span className="highlight-blue">MERN</span> stack development. I love building responsive, progressive web applications.<br/><br/>
          Check out some of my projects, my resume or send me an email.
        </div>
  </div>
  );
}
export default Home;
