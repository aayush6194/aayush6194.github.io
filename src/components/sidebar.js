import React, { useState , useEffect} from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { svg } from '../images/google.svg'
import { GoogleLogin } from 'react-google-login';
 
const GoogleBtn = ({res})=> (<GoogleLogin
  clientId="432904370571-10sna4o5st6k2aee0q3p09bt05qjgbng.apps.googleusercontent.com"
  buttonText="Login"
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
  const responseGoogle = (response) => {
    setUser(response.profileObj);
    localStorage.setItem('user', JSON.stringify(response.profileObj));
  }

  useEffect(()=>{
  try{
    let user1 = window.localStorage.getItem('user')? JSON.parse(localStorage.getItem('user')) : null;
    setUser(user1); 
  } catch(e){
    setUser(null);
  }
  }, [])
return (<div>
    <Nav background={darkMode? "black":"#156CEC"} >
      <NavLink className="nav-item txt-md center-items" to="/"><i className={`material-icons lg-icon ${active === "home"? "active-nav" : ""}`} >home</i><div>Home</div></NavLink>
      <NavLink className="nav-item txt-md center-items" to="/Projects"> <i className={`material-icons lg-icon ${active === "project"? "active-nav" : ""}`}>work</i><div>Projects</div></NavLink>
      <a className="nav-item txt-md center-items" href="https://github.com/aayush6194/aayush6194.github.io/raw/master/Resume.pdf"><i className="material-icons lg-icon ">account_circle</i><div>Resume</div></a>
      <span className="nav-item txt-md center-items">
        {!user? <GoogleBtn res={responseGoogle}/>: 
        <>
          <img class='md-icon' style={{borderRadius: '50%', width: '3em'}} src={user.imageUrl}/>
          <div style={{color: "white", textOverflow: "ellipsis",lineHeight: "100$"}}>{user.givenName} <br/> {user.familyName}</div>
        </>
        }
      </span>
    </Nav>
  </div>
  )};

export default Sidebar;