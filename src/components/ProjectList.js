import React from 'react';
import Img from "gatsby-image";
import styled from 'styled-components';
import posed from 'react-pose';
import Fade from 'react-reveal/Zoom';
const Lin = styled.a``;
const colors = ["#18A7EE", "#18EE42", "#EED018", "#F35F90", "#D45FF3","#0288D1","#FFEB3B",
                  "#795548", "#FF5722", "#303F9F", "#303F9F", "#303F9F"];

const Box = styled.div`
  display: inline-block;
  margin: 2px;
  background: ${props=>props.colr};
  padding: 0.3em 0.5em;
  border-radius: 7px;`;

const ImageBox = styled.div`
  display: grid;
  background: #30ABE8;
  height: 100%;`;

const Wrapper = styled(posed.div({
  start: {scale: 0},
  end: {scale: 1},
  transition:{
    duration: 210,
    ease: 'linear'
  }
}
))``;

const Description = styled.div`
  background: #005A9C;
  opacity: 0.8;
  color: white;
  padding: 1em;
  overflow: hidden;
  text-overflow: ellipsis;

`;


class ProjectList extends React.Component  {
  constructor(props){
    super(props);
  this.state = {stage : "startt"};
  }

 componentDidMount(){ //this.setState({stage: "end"});
}
render(){
  return (
  <Fade>
        <Wrapper pose={this.state.stage} className="home grid align-center dense project-container" >
              <div className={this.props.data.align + " project-element "} >
                <ImageBox ><Img fluid={this.props.fluid} style={{background:"transparent"}}/></ImageBox>
              </div>

                <Description>
                    <h2 className="center-text">{this.props.data.title}</h2>
                    <i className="material-icons md-icon">description</i> {this.props.data.description}<br/><br/>
                    <i className="material-icons md-icon">code</i>
                     {this.props.data.code.map(i => <Box key={i.toString()} colr={colors[Math.floor(Math.random()* colors.length)]} > {i} </Box>)}
                    <div><br/><i className="material-icons md-icon">link</i> <Lin href={this.props.data.link}>{this.props.data.link}</Lin></div>
                </Description>

            </Wrapper>
    </Fade>
  );

}
}
export default ProjectList;
