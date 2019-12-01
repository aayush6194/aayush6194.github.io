import React from "react"
import "./layout.css"
import styled from 'styled-components';
import svg from './b.svg';
import darkSvg from './b-dark.svg';


const MyWrapper = styled.div`
background-attachment: fixed;
background-repeat: no-repeat;
background-position: bottom right;
min-height: 100vh;
background-image: url(${svg});
background-image: url(${props => props.background});
background-size: cover;`;

const Layout = ({ children,darkMode }) => (
        <MyWrapper
         background = {darkMode? darkSvg : svg}
          style={{margin: `0px auto `, paddingTop: 0}} >
          <main>{children}</main>
        </MyWrapper>
    );

export default Layout
