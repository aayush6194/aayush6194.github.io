import React from 'react';
import Img from "gatsby-image";
import styled from 'styled-components';

const Lin = styled.a`
`;

const colors = ["#18A7EE", "#18EE42", "#EED018", "#F35F90", "#D45FF3"];


const Box = styled.div`
  display: inline-block;
  margin: 2px;
  background: ${props=>props.colr};
  padding: 0.3em 0.5em;
  border-radius: 7px;
`;

const ImageBox = styled.div`
  display: grid;
  background: #30ABE8;
  height: 100%;
`;

const ProjectList= (props) => {
  return (
  <div className="home grid align-center dense" >
        <div className={props.data.align + " project-element "} >
        <ImageBox ><Img fluid={props.fluid} /></ImageBox>
        </div>
        <div className= " project-desc">
            <h2 className="center-text">{props.data.title}</h2>
            <i className="material-icons md-icon">description</i> {props.data.description}<br/><br/>
            <i className="material-icons md-icon">code</i>
             {props.data.code.map(i => <Box colr={colors[Math.floor(Math.random()* colors.length)]} key={i.toString()}> {i} </Box>)}
            <div><br/><i className="material-icons md-icon">link</i> <Lin href={props.data.link}>{props.data.link}</Lin></div>
        </div>
  </div>
  );
}

export default ProjectList;
