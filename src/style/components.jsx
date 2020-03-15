import styled, { keyframes } from 'styled-components';
import React, { useContext } from 'react';
import { ThemeContext } from '../context/theme-context';
import { primaryColor, txtColor, txtColorDark,  cardColorDark, mobileWidth } from '../config';

export const Wrapper = styled.div`
    margin: auto;
    min-height: 100vh;
    width: 100%;
    background: url(${props => props.bg});
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position:  bottom left;
    display: grid;
    justify-items: center;
    align-items: center;`;

export const Main = ({ children, style }) => {
    const { darkMode } = useContext(ThemeContext);
    const Main = styled.div`
    background: ${darkMode ? cardColorDark : "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)"};
    color: ${!darkMode ? "black" : "white"};`;

    return (
        <Main style={style}>
            {children}
        </Main>);
};

export const Header = ({ children, style, size, placeItems, alignText, placeSelf, color, bold , className}) => {
    const { darkMode } = useContext(ThemeContext);
    const HeaderLayout = styled.div`
    text-align: ${alignText? alignText : 'center'};
    font-size: 1.9em;
    color: ${darkMode ? txtColorDark : color ? color : txtColor};
    ${size && `font-size: ${size};`}
    ${bold && `font-weight: bold;`}
    ${placeSelf && `place-self: ${placeSelf};`}
    `;
    return (
        <HeaderLayout className={className} style={style}> {children} </HeaderLayout>
    );
}

export const Grid = (props) => {
   const { children, max, gridGap, style, cols, customCols, customRows, width, height,  } = props
   const {placeItems, color, background, mobileLayout, className, onClick, mobileCols } = props;
    const Layout = styled.div`
    display: grid;
    width: ${width ? width : "auto"};
    height: ${height ? height : "auto"};
    place-items: center;
    grid-gap: ${gridGap ? gridGap : '1em'} ;
    max-width: 1500px;
    ${max === false && `max-width: 1500px;`}
    grid-template-columns: repeat(${cols ? cols : "1"}, 1fr);
    ${customCols && `grid-template-columns: ${customCols};`}
    ${customRows && `grid-template-rows: ${customRows};`}
    ${placeItems && `place-items: ${placeItems};`}
    ${color && `color: ${color};`}
    ${background && `background: ${background};`}
    @media(max-width: ${mobileWidth}){
        ${ mobileLayout !== false && `grid-template-columns: 1fr;`}
        ${mobileCols && `grid-template-columns: ${mobileCols};`}
      }
`;
    return (
        <Layout style={style} className={className} onClick={onClick}> {children} </Layout>);
};


export const GridItem = (props) => {
    const { children, style, gridRowStart, gridColumnStart } = props
    const { width, height, placeSelf, placeItems, background, color, hideOnMobile, onClick } = props;

    const Layout = styled.div`
     display: grid;
     place-items: center;
     grid-gap: 1em;
     max-width: 1300px;
     width: ${width ? width : "auto"};
     height: ${height ? height : "auto"};
     ${placeItems && `place-items: ${placeItems};`}
     ${placeSelf && `place-self: ${placeSelf};`}
     ${gridRowStart && `grid-row-start: ${gridRowStart};`}
     ${gridColumnStart && `grid-column-start: ${gridColumnStart};`}
     ${color && `color: ${color};`}
     ${background && `background: ${background};`}
     @media(min-width: 800px){
        ${gridRowStart && `grid-row-start: ${gridRowStart};`}
        ${gridColumnStart && `grid-column-start: ${gridColumnStart};`}
      }
     @media(max-width: ${mobileWidth}){
         grid-template-columns: 1fr;
         ${hideOnMobile && `display: none;`}
       }
 `;
    return (
        <Layout onClick={onClick} style={style}> {children} </Layout>);
};


export const Card = (props) => {
    const { children, style, margin, padding, color, className, border, normalBg, hideOnMobile } = props;
    const { background, height, width, invert, placeSelf, grid, onClick, bgReg, maxHeight } = props;
    const { darkMode } = useContext(ThemeContext);

    const Card = styled.div`
    width: ${width ? width : "auto"};
    height: ${height ? height : "auto"};
     ${maxHeight && `max-height: ${maxHeight};`}
    margin: ${margin ? margin : "1em 0.5em"};
    padding: ${padding ? padding : ".8em 1em"};
    background: ${darkMode ? cardColorDark : invert ? primaryColor : "white"}};
    color: ${darkMode ? txtColorDark : invert ? txtColorDark : txtColor};
    box-shadow: 0 .25em .5em rgba(0,0,0,.5);
    border-radius: .5em;
    ${border && `border: ${border} solid;`}
    ${color && `color: ${color};`}
    ${placeSelf && `place-self: ${placeSelf};`}
    ${background && `background: ${background};`}
    ${grid && `display: grid; place-items: center;`}
    ${bgReg && `background: ${darkMode ? cardColorDark : `url(${bgReg});`}
    
    background-repeat: no-repeat;
    ${!normalBg &&
        `background-size: cover;
    background-attachment: fixed;`}`}
    
    @media(max-width: ${mobileWidth}){
        ${hideOnMobile && `display: none;`}
      }`;

    return (
        <Card style={style} className={className} onClick={onClick}>
            {children}
        </Card>);
};

export const Button = ({ children, style, onClick, onSubmit, bg , invert, className}) => {
    const { darkMode } = useContext(ThemeContext);

    const Bt = styled.div`
    border: 0px;
    padding: 0.3em 0.4em;
    width: 6.5em;
    text-align: center;
    border-radius: 5px;

    ${!bg && `background:  ${darkMode ? "white" : primaryColor};
    color: ${ darkMode ? primaryColor : "white"};`}

    font-weight: 200;
    box-shadow: 0 2px 6px rgba(0,0,0,0.25), 0 3px 3px rgba(0,0,0,0.22);
    margin: 0.15em;
    border: 2px solid ${primaryColor}; 
    &:hover {
        background: ${!darkMode ? "white" : primaryColor};
        color: ${darkMode ? "white" : primaryColor};
        box-shadow: 0 0 0 0;
        transition: 350ms ease-out;
        cursor: pointer;
    }
    ${invert && 'background: white; color: teal;'}
    ${bg &&
    `background: ${bg};
     border-color: ${bg};
     color: ${bg === 'white'? 'teal' : 'white'};
     ${invert && `background: white; color: ${bg}`}
     &:hover {
        background: white;
        color: ${bg};
     }`} 
    
     `;
    return (
        <Bt style={style} onClick={onClick} onSubmit={onSubmit} className={className}>
            {children}
        </Bt>);

};

