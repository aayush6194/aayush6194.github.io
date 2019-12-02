import React, { useState , useEffect} from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import  svg  from '../images/google.png'
import { GoogleLogin } from 'react-google-login';
 import api from '../api';

const MyBtn = styled.button`
  background: transparent;
  border: 0;
  color: white;
  font-size: 1.2em;
`;

const MyImg = styled.img`
  width: 3em;
`;

const GoogleBtn = ({res})=> (<GoogleLogin
  clientId="432904370571-10sna4o5st6k2aee0q3p09bt05qjgbng.apps.googleusercontent.com"
  buttonText="Login"
  render={renderProps => (<MyBtn onClick={renderProps.onClick} disabled={renderProps.disabled}><MyImg  src={svg}/><div className="label">Login</div></MyBtn>)}
  onSuccess={res}
  onFailure={res}
  cookiePolicy={'single_host_origin'}
  />);
 
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
  const [loggedin, setLoggedin] = useState(false);
  const responseGoogle = (res) => {
    console.log(res.profileObj)
    let profile = fit(res.profileObj);
    setUser(profile);
    localStorage.setItem('user', JSON.stringify(profile));
    api.signin(profile);
  }

  let fit = (profile)=>{
    let { givenName: fname, familyName : lname, email, imageUrl : photo, googleId : id } = profile;
    return {id, fname, lname, email, photo};
  }

  useEffect(()=>{
  try{
    let user1 = window.localStorage.getItem('user')? JSON.parse(localStorage.getItem('user')) : undefined;
    if(user1 === undefined ) return false;
    api.signin(user1);
    setUser(user1); 
  } catch(e){
    setUser(null);
  }
  }, []);

  //useEffect(()=>{  api.signin() }, [loggedin]);
return (<div>
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