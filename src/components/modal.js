  
import React from 'react';
import styled from 'styled-components'
import svg from '../images/message3.svg';
import Zoom from 'react-reveal/Zoom';
import { OpacityAimation, opacityAnimation } from '../style/animation';
const Wrapper = styled.div`
position: fixed;
z-index: 1;
left: 0;
top: 0;
width: 100%;
height: 100%;
background-color: rgb(0,0,0);
background-color: rgba(0,0,0,0.4);
animation : ${opacityAnimation} 1s ease-in-out;`;

const Modall = styled.div`
background: white;
margin: 2% auto;
border: .25em solid dodgerblue;
box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
border-radius: 1em;
width: 80%;
text-align: center;
font-size: 1.5em;
padding: 0;
max-width: 800px;
color: black;
@media(max-width: 600px){
  position: absolute;
  bottom: 90px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%)
}`;

const Btn = styled.button`
color: white;
border-radius: 50%;
background: dodgerblue;
border: 0;
font-size: 1em;
width: 2em;
height: 2em;
margin: 0.2em;

&:hover{
  background: red;
}`;

const Header = styled.div`
color: white;
background-image: linear-gradient( rgba(12, 38, 92, 0.7), rgba(12, 38, 92, 0.9));
border-top-right-radius: .75em;
border-top-left-radius: .75em;
border: 0;
margin: 0;
height: 2.5em;`;

const Body = styled.div`
color: white;
font-weight: bolder;
background-image: linear-gradient( rgba(32, 43, 78 , 0.7), rgba(32, 43, 78 , 0.6)), url(${svg});
border-bottom-right-radius: .75em;
border-bottom-left-radius: .75em;
`;
const Modal = ({modal, text, close })=>(
    <>{modal? 
      <Wrapper>
        <Zoom>
            <Modall>
                <Header>
                    <Btn style={{ float: "right" }} onClick={close}> &nbsp;X&nbsp; </Btn>
                </Header>
                <Body>
                    <div style={{ minHeight: "5em", padding: ".2em" }} className="">
                        <h5>{text? text : "Caught an Error. Please Refresh the page!"}</h5>
                        {/* <img src={svg} style={{  height: "10em"}} alt=""/> */}
                    </div>
                    <div>
                        <button className="bt bt-custom" style={{padding: ".2em", fontSize:".9em", background:" "}} onClick={close}>Cancel</button>
                    </div>
                </Body>
            </Modall></Zoom>
        </Wrapper>: null}</>);

const InfoModal = ({ text, close, img }) =>
  (
    <Wrapper>
      <Modall>
        <Header>
          <Btn style={{ float: "right" }} className="bt right-corner" onClick={close}> &nbsp;X&nbsp; </Btn>
        </Header>
        <div >
          <div style={{ minHeight: "5em", padding: "2em" }} className="blue-txt bold txt-md">
            <img src={img} className="img-lg" alt=""/>
            <h5>{text}</h5>
          </div>
          <div>
            <button className="btn hoverr full" onClick={close}>Okay, Got it!</button>
          </div>

        </div>
      </Modall>
    </Wrapper>);
export { Modal, InfoModal };