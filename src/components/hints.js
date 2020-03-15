import React, { useState, useEffect } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styled from 'styled-components';
  
const Hints = ({msg} )=> {
  const [index, setIndex ]  = useState(0);

  const increasePointer = () =>{
    if(index < msg.length - 1) setIndex(index + 1);
    else setIndex(0);
  }

  return (<>
    {index <= msg.length ?
      <ReactCSSTransitionGroup
        transitionName="hints"
        transitionAppear={true}
        transitionAppearTimeout={550}
        transitionEnterTimeout={550}
        transitionLeaveTimeout={300}
        transitionEnter={true}
        transitionLeave={true}>
        <Float onClick={increasePointer} className="pointer">
          <Message>{msg[index]}</Message>
          <div>
            <Avatar src={"https://f0.pngfuel.com/png/136/22/profile-icon-illustration-user-profile-computer-icons-girl-customer-avatar-png-clip-art-thumbnail.png"} />
          </div>
        </Float>
      </ReactCSSTransitionGroup> : null}
  </>
  );
}

const Float = styled.div`
  position: fixed;
  bottom: 1em;
  right: 10px;

  display: grid;
  grid-template-columns: auto auto;
  @media (max-width: ${860}px) {
       display: none;
    }s`;

  const Message = styled.div`
    background: white;
    width: 9em;
    color: dodgerblue;
    border: 1px solid;
    padding: .3em .8em;
    border-radius: 1em;
    vertical-align: middle;
    display: grid;
    box-shadow: 0 .25em .5em rgba(0,0,0,.5);
    max-width: 15em;
    align-items: center;`;

  const Avatar = styled.img`
    border: .1em solid white;
    width: 4em;
    border-radius: 50%;
    margin-left: .2em;
    height: auto;`;

export default Hints;