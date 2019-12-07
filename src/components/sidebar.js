import React, { useState , useEffect, useContext} from 'react';
import styled from 'styled-components';
import { Link }  from 'gatsby';
import api from '../api';
import GoogleBtn from './google-btn';
import { ModalContext } from '../context/modal-context'
import { Modal }from './';
const NavLink = Link;
const Nav = styled.div`
  top: 0em;
  left:0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  
  font-size: .8em;
  height: 100vh;
  display: grid;
  padding: .3em;
  position: fixed;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  place-items: center;
  background: ${props => props.background};
  z-index: 10;
  @media (max-width: 860px) {
    height: 70px;
     width: 100vw;
     top: calc(100% - 70px);
     grid-template-columns: 1fr 1fr 1fr 1fr;
     grid-template-rows: 1fr;
}`;

const Sidebar = ({active, darkMode}) => { 
  const [user, setUser] = useState(null);
  const { modal, text, closeModal} = useContext(ModalContext);
  const responseGoogle = (res) => {
    let profile = fit(res.profileObj);
    setUser(profile);
    localStorage.setItem('user', JSON.stringify(profile));
    api.signin(profile).catch((e)=>console.log('Error Connecting to the server!'));
  }

  let fit = (profile)=>{
    console.log(profile)
    let { givenName: fname, familyName : lname, email, imageUrl : photo, googleId : id } = profile;
    return {id, fname, lname, email, photo};
  }

  useEffect(()=>{
  try{
    let user1 = localStorage.getItem('user') && localStorage.getItem('user') != undefined? JSON.parse(localStorage.getItem('user')) : null;
    if(user1 === null ) return false;
    api.signin(user1).catch((e)=>console.log('Error Connecting to the server!'));
    setUser(user1); 

  } catch(e){
    setUser(null);
  }
  }, []);


return (<div>
  <Modal modal={modal} close={closeModal} text={text} />
    <Nav background={darkMode? "black":"#156CEC"} >
      <NavLink className="nav-item txt-md center-items" to="/"><i className={`material-icons lg-icon ${active === "home"? "active-nav" : ""}`} >home</i><div>Home</div></NavLink>
      <NavLink className="nav-item txt-md center-items" to="/Projects"> <i className={`material-icons lg-icon ${active === "project"? "active-nav" : ""}`}>work</i><div>Projects</div></NavLink>
      <a className="nav-item txt-md center-items" href="https://github.com/aayush6194/aayush6194.github.io/raw/master/Resume.pdf"><i className="material-icons lg-icon ">account_circle</i><div>Resume</div></a>
      <span className="nav-item txt-md center-items">
        {!user? <GoogleBtn res={responseGoogle}/>: 
        <div style={{display: "grid", placeItems: "center", textAlign: 'center'}}>
          <img style={{borderRadius: '50%', width: '3.5em'}} src={user.photo}/>
          <div style={{color: "white", textOverflow: "ellipsis", textSize: "1.5em", lineHeight: "100$"}}>{user.fname}</div>
        </div>
        }
      </span>
    </Nav>
  </div>
  )};

export default Sidebar;