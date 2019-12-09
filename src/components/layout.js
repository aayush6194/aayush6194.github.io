import React, {createContext} from "react"
import "./layout.css"
import styled from 'styled-components';
import svg from './b.svg';
import darkSvg from './b-dark.svg';
import { ModalProvider } from '../context/modal-context';
import { UserProvider } from '../context/user-context'

const MyWrapper = styled.div`
background-attachment: fixed;
background-repeat: no-repeat;
background-position: bottom right;
min-height: 100vh;
background-image: url(${svg});
background-image: url(${props => props.background});
background-size: cover;`;

const Layout = ({ children,darkMode }) => (
  <UserProvider>
  <ModalProvider>
        <MyWrapper
         background = {darkMode? darkSvg : svg}
          style={{margin: `0px auto `, paddingTop: 0}} >
          <main>{children}</main>
        </MyWrapper>
    </ModalProvider>
  </UserProvider>
    );

export default Layout;
