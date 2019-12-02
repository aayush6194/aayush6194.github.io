import React from 'react';
import Img from "gatsby-image";
import styled from 'styled-components';
import posed from 'react-pose';
import Fade from 'react-reveal/Zoom';
import svg from '../images/step.svg';
import api from '../api';
const Lin = styled.a``;
const colors = ["#18A7EE", "#18EE42", "#EED018", "#F35F90", "#D45FF3","#0288D1","#FFEB3B", "#795548", "#FF5722", "#303F9F", "#303F9F", "#303F9F"];

const Box = styled.div`
  display: inline-block;
  margin: 2px;
  background: ${props=>props.colr};
  padding: 0.3em 0.5em;
  border-radius: 7px;`;

const ImageBox = styled.div`
  display: grid;
  background: #30ABE8;
  background: ${ props => props.background};
  height: 100%;`;

const Wrapper = styled(posed.div({
  start: {scale: 0},
  end: {scale: 1},
  transition:{
    duration: 210,
    ease: 'linear'
  }
}
))`
background: #30ABE8;
background: ${props => props.background}
`;

const Description = styled.div`
  background: #005A9C;
  background-image: linear-gradient( rgba(0,  90, 156, 0.8), rgba(0,  90, 156, 0.8) ), url(${svg});
  background: linear-gradient( ${ props => props.background} , ${ props => props.background} ), url(${svg});
  background-size: 100% 100%;
  opacity: 0.8;
  color: white;
  padding: 1em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: grid;
  grid-template-rows: 1fr auto;
  `;

class ProjectList extends React.Component  {
  constructor(props){
    super(props);
    this.state = {stage: "end"}
  }

render(){
  const {darkMode, index, fluid} = this.props;
  const {description, title, link} = this.props.data;

  const like = (pid)=>{
      let user = localStorage.getItem('user')? JSON.parse(localStorage.getItem('user')): undefined;
      if(user === undefined ) {
      alert('Login First'); 
      return false;}
      
      alert('Feature coming soon!')
      let {email, id} = user;
     // api.like({pid, id, email});
  };
  return (
  <Fade>
        <Wrapper pose={this.state.stage} className="home grid align-center dense project-container"  background={`${darkMode? "black": "#30ABE8"} `}>
              <div className={index % 2 === 0? "left" : "right" + " project-element "} >
                <ImageBox background={`${darkMode? "black": "#30ABE8"} `}><Img fluid={fluid} style={{background:"transparent"}}/></ImageBox>
              </div>
                <Description background={`rgba(0, ${darkMode? "0, 0": "90, 156"}, 0.8)`}>
                  <div>
                    <h2 className="center-text">{title}</h2>
                    <i className="material-icons md-icon">description</i> {description}<br/><br/>
                    <i className="material-icons md-icon">code</i>
                     {this.props.data.code.map(i => <Box key={i.toString()} colr={colors[Math.floor(Math.random()* colors.length)]} > {i} </Box>)}
                    <div><br/><i className="material-icons md-icon">link</i> <Lin href={link}>{link}</Lin></div>
                    </div>
                    <span onClick={()=>like(index)}>
                      <i className="fa fa-heart md-icon" aria-hidden="true"></i>
                    </span>
                </Description>
            </Wrapper>
    </Fade>
  );}
}
export default ProjectList;
