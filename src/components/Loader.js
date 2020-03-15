import React from 'react';
import mySvg from '../images/loader.svg'
import mySvg2 from '../images/logo.png'
import styled, {keyframes} from 'styled-components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Loader = styled.div`
  position: absolute;
  z-index: 20;
  left: calc(50% - 40px);
  top: calc(50% - 40px);
  display: inline-block;`;

const Loader1 = ()=> (
  <Loader className="blue-txt">
    <img width="70" src={mySvg} alt="A Loader" />
  </Loader>);

  
const NewLoader = styled.div`
 display: grid;
 width: 100v%;
 height: 100vh;
 background: white;
 z-index: 10;
 place-items: center`;

const glow = keyframes`
0% { 
  transform: scale(0.9);
  filter: drop-shadow(3px 4px 6px teal); 
}
100% {
  transform: scale(1);
  filter: drop-shadow(0px 0px 0px white); 
}`;
 
const Img = styled.img`
width: 200px;
min-width: 10vw;
max-width: 60vw;
animation: ${glow} 600ms ease-out infinite;`;

export const Loader2 = () => (
  <NewLoader>
    <ReactCSSTransitionGroup
        transitionName="hints"
        transitionAppear={true}
        transitionAppearTimeout={300}
        transitionEnterTimeout={550}
        transitionLeaveTimeout={300}
        transitionEnter={true}
        transitionLeave={true}>
    <Img src={mySvg2} alt="A Loader" />
    </ReactCSSTransitionGroup>
    </NewLoader>);

export default Loader1;