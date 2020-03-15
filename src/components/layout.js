import React, { useState, useEffect} from "react"
import "./layout.css"
import styled from 'styled-components';
import svg from './b.svg';
import darkSvg from './b-dark.svg';
import { ModalProvider } from '../context/modal-context';
import { UserProvider } from '../context/user-context'
import { Loader2 } from "./Loader";
import FirstSignup from "./first-time";
import MultiStepModal from "./multistep";

const MyWrapper = styled.div`
background-attachment: fixed;
background-repeat: no-repeat;
background-position: bottom right;
min-height: 100vh;
background-image: url(${svg});
background-image: url(${props => props.background});
background-size: cover;`;

const Layout = ({ children,darkMode }) => {
const ld = localStorage.getItem("loader") === 'false'? false  : true;
const ft = localStorage.getItem("firstTime") === 'false'? false  : true;

const [loader, setLoader] = useState(ld);
const [ firstTime, setFT ] = useState(ft);

useEffect(()=> {
if(loader){
  setTimeout(()=>setLoader(false), 1500);
  localStorage.setItem('loader', 'false')
}
}, []);

const finishSignup = ()=>{
  localStorage.setItem('firstTime', 'false');
  setFT(false);
}

return(
<>
  {loader?
  <Loader2 />
  :
  <UserProvider>
  <ModalProvider>
        <MyWrapper
         background = {darkMode? darkSvg : svg}
          style={{margin: `0px auto `, paddingTop: 0}} >
          <main>
            {firstTime && <FirstSignup finishSignup={finishSignup}/>}
            {children}
          </main>
        </MyWrapper>
    </ModalProvider>
  </UserProvider>
   }</> )};

export default Layout;
