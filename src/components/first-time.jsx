import React, { useState, useContext, useEffect } from 'react';
import MultiStepModal from './multistep';
import started from '../images/started.svg';
import welcome from '../images/welcomee.svg';
import styled from 'styled-components';
import { ThemeContext } from '../context/theme-context';
import { Header } from '../style/components';
 import { Switch, Select, Progress } from 'antd';

// const { Option } = Select;
const Welcome = () => {
    return (
        <Main>
            <BorderRadiusTop style={{ background: "dodgerblue", height: "100%"}}>
                <img src={welcome} style={{ height: "100%", maxWidth: "80%", width: "auto" }} />
            </BorderRadiusTop>
            <div style={{ height: "20%", display: 'grid', placeItems: 'center', gridGap: '.5em'}}>
                <Header size={"1em"}>Welcome to my portfolio site!</Header>
                <Header size={".85em"}>Signup for for my news letter.</Header>
                <input style={{ height: 30, width: 350}} placeholder='john.doe@google.com'/>
                
        
            </div>
        </Main>
    )
}

const ThankYou = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
    if(progress < 100)
        setTimeout(() => setProgress(progress + 8), 200);

    }, [progress])
    return (
        <Main>
            <BorderRadiusTop style={{ background: "dodgerblue" }}>
                <img src={started} style={{ height: "100%", maxWidth: "80vw" }} />
            </BorderRadiusTop>

            <div style={{ height: "30%", width: "100%", display: "grid", placeItems: "center", color: "teal" }}>
              <div> Setting up your profile. <i className="fa fa-futbol-o spin"></i></div> 
                                <div style={{ width: "50%" }}>
                    <Progress percent={progress} size="small" />
                </div>
            </div>
        </Main>
    )
}

export const DownloadResume = ()=>  {
    return (
        <Main>
            <BorderRadiusTop style={{ background: "dodgerblue", height: "100%"}}>
                <img src={welcome} style={{ height: "100%", maxWidth: "80%", width: "auto" }} />
            </BorderRadiusTop>
            <div style={{ height: "20%" }}>
                <Header size={"1em"}>Thank You For Downloading my Resume</Header>
            </div>
        </Main>
    )
}

const BorderRadiusTop = styled.div`
border-top-right-radius: .75em;
border-top-left-radius: .75em;
height: 70%;
maxHeight: 10em`;

const Main = styled(BorderRadiusTop)`
height: 100%;
color: inherit;
place-self: start stretch;
max-height: 15em;
width: 100%;`;

const FirstSignup = ({ finishSignup }) => (<MultiStepModal components={[<Welcome />]} finishSignup={finishSignup} />)

export default FirstSignup;