import React, { useState, useEffect, useContext } from 'react';
import styled, {keyframes} from 'styled-components'
import {  Grid } from '../style/components'
import { ThemeContext } from '../context/theme-context';

const MultiStepModal = ({ components, finishSignup , darkMode} ) => {
    const [step, setStep] = useState(0);
    const nextStep = () => {
        if (components.length - 1 > step) setStep(step + 1);
        else finishSignup()
    }

const previousStep = () =>{
    if( step > 0) setStep(step -1);
}

    return (
        components && step < components.length ?
            <Modal2 component={components[step]} nextStep={nextStep} previousStep = {previousStep} step={step} total={components.length || 0}/> : null);
};

const Modal2 = ({ component, nextStep, step,  total, previousStep}) => {
    const [animate, setAnimate] = useState(false);
    const { darkMode } = useContext(ThemeContext);
    const Body = styled.div`
        color: ${!darkMode? "black" : "white"};
        min-height: 15em;
        max-height: 60vh;
        display: grid;
        place-items: center;
        grid-template-rows: 1fr auto;
        font-weight: bolder;
        background: ${darkMode? "black" : "white"};
        padding: 0 0 .3em 0;
        border-radius: .75em;`;

    useEffect(() => {
        if (animate === true) {
            setAnimate(false)
        } else {
            setAnimate(true);
            setTimeout(() => setAnimate(false), 1000)
        }
        if(step === total - 1) setTimeout(()=> nextStep(), 4000)

    }, [nextStep])
    return (
        <Wrapper>
            <Modall style={{ border: 0, padding: 0 }} className={animate ? "slide-in" : ""}>
                <Body>
                    {component}             
                    <Grid customCols="1fr 1fr 1fr" placeSelf="center end" placeItems="end" width="100%" mobileLayout={false}>
                 
                    <div style={{ display: "grid", placeItems: "start", padding: "1em",width: "100%" }}>
                    <i className="fas fa-chevron-left left"  onClick={() => previousStep()}   style = {{display: step === 0 ? "none": ""}}></i>
                     </div>
                        <span className="grid">
                            <span>
                            {[...Array(total)].map((e, i) =><><span className={`round ${i !== step? 'white': 'gray'}`}></span>&nbsp;</>)}
                            </span>
                  
                        </span>    
                    <div style={{ display: "grid", placeItems: "end", padding: "1em" }}>
                    <i className="fas fa-chevron-right left"   onClick={() => nextStep()} ></i>
                
                    </div>
                    </Grid>
              
                </Body>
            </Modall>
        </Wrapper>)
};

export const opacityAnimation = keyframes`
  0% { opacity: 0;}
  100% {opacity: 1; }`

const Wrapper = styled.div`
position: fixed;
z-index: 20;
left: 0;
top: 0;
width: 100%;
height: 100%;
background-color: rgb(0,0,0);
background-color: rgba(0,0,0,0.4);
animation : ${opacityAnimation} 0.5s ease-out;`;

const Modall = styled.div`
margin: 7% auto;
border: .25em solid dodgerblue;
box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
border-radius: 1em;
width: 80%;
display: grid;
place-items: stretch;
grid-template-rows: auto 1fr;
text-align: center;
font-size: 1.5em;
padding: 0;
min-height: 260px;
max-width: 800px;
color: black;
@media(max-width: 860px){
  position: absolute;
  bottom: 90px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%)
}`;

export default MultiStepModal;