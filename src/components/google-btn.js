import React from 'react'
import  svg  from '../images/google.png'
import { GoogleLogin } from 'react-google-login';
import styled from 'styled-components';

const MyBtn = styled.button`
  background: transparent;
  border: 0;
  color: white;
  font-size: 1.2em;
  @media(max-width: 860px){
    font-size: 1em;
  }`;

const MyImg = styled.img`
  width: 3em;
  @media(max-width: 860px){
    width: 2.5em;
  }`;

const GoogleBtn = ({res})=> (<GoogleLogin
  clientId="432904370571-10sna4o5st6k2aee0q3p09bt05qjgbng.apps.googleusercontent.com"
  buttonText="Login"
  render={renderProps => (<MyBtn onClick={renderProps.onClick} disabled={renderProps.disabled}><MyImg  src={svg}/><div className="label">Login</div></MyBtn>)}
  onSuccess={res}
  onFailure={res}
  cookiePolicy={'single_host_origin'}
  />);

  export default GoogleBtn;