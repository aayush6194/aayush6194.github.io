import React from 'react';
import Img from "gatsby-image";
import styled from 'styled-components';
import Fade from 'react-reveal/Zoom';
import svg from '../images/step.svg';
import api from '../api';
import {  ModalConsumer } from '../context/modal-context';
import {  UserConsumer } from '../context/user-context';
import { primaryColor } from '../config';
const Lin = styled.a``;
const colors = ["#18A7EE", "#18EE42", "#EED018", "#F35F90", "#D45FF3","#0288D1","#FFEB3B", "#795548", "#FF5722", "#303F9F", "#303F9F", "#303F9F"];



class ProjectList extends React.Component  {
  constructor(props){
    super(props);   
    this.scrollRef = React.createRef();
    this.state = { likes: [], hasLiked: false, showSuccess: false, loading: true, activeItem: -1 }
  }

  componentDidCatch(error, errorInfo){ console(error); console(errorInfo)}
  componentDidMount(){
    api.getLikes(this.props.data.pid).then(res=>{
      if(res.success) {
        if(typeof res.likes !== undefined ){
          this.setState({ likes :  res.likes})
          let { user } = this.props.userContext;
          if(user && user !== undefined ) { 
          let { email : userEmail , id} = user;
          res.likes.forEach(({email})=>{
            if(userEmail === email) this.setState({ hasLiked : true});
          })
        } 
       
      }else {this.setState({ likes : [] })}
    }
    this.setState({loading : false})
    }).catch(e=>console.log(e))
    .finally(()=>this.setState({loading : false}));

  
  }
render(){
  const {darkMode, index, fluid} = this.props;
  const {description, title, link, pid} = this.props.data;
 const { likes, hasLiked, showSuccess, loading } = this.state;
  const like = (pid)=>{
      let { user } = this.props.userContext;
      if(user === undefined )  this.props.modalContext.displayModal('To Like Projects Please Login First.') 
      else{
      api.like({pid, user}).then((res)=>{
        if(res.success) this.setState({ hasLiked : true, likes : [...this.state.likes, user] , showSuccess: true});
        setTimeout(()=>this.setState({ showSuccess : false}), 3000);
      }).catch((e)=>console.log(e));
    }
  };

  if(this.props.active){
     this.scrollRef.current.scrollIntoView({
       behavior: 'smooth',
       block: 'start',
     });
   }
  return (
  <Fade>
        <Wrapper ref={this.scrollRef} pose={this.state.stage} className={`home grid align-center dense project-container ${this.props.active && 'svg-glow'}`}  background={`${darkMode? "black": "#30ABE8"} `}>
              <div className={index % 2 === 0? "left" : "right" + " project-element "} >
                <ImageBox background={`${darkMode? "black": primaryColor} `}><Img fluid={fluid} style={{background:"transparent"}}/></ImageBox>
              </div>
                <Description background={`rgba( ${darkMode? "0, 0, 0": "44,162,172"}, 0.8)`}>
                  <div>
                    <h2 className="center-text">{title}</h2>
                    <i className="material-icons md-icon">description</i> {description}<br/><br/>
                    <i className="material-icons md-icon">code</i>
                     {this.props.data.code.map(i => <Box key={i.toString()} colr={colors[Math.floor(Math.random()* colors.length)]} > {i} </Box>)}
                    <div><br/><i className="material-icons md-icon">link</i> <Lin target="_blank" href={link}>{link}</Lin></div>
                    </div>
                    <span onClick={()=>like(pid)} style={{padding: "1em .3em"}} >
                    <i className={`fa fa-heart md-icon hover-red ${hasLiked && 'red'}`} aria-hidden="true"></i> 
                      <span className="tooltip-container">
                        {likes? ` ${likes.length} ${likes.length === 1? 'person' : 'people' } liked this` : ' Be the first one to like this.'}
                        {showSuccess && <Message className="opacity-animation">Liked!</Message>}
                        <div className="tooltip">
                          {loading && likes.length > 0? "Loading": likes.map(({fname, lname, id})=><div key={id}>{`${fname} ${lname}`}</div>)}
                        </div>
                      </span>
                    </span>
                </Description>
            </Wrapper>
    </Fade>
  );}
}

let Props = (props) => (
  <ModalConsumer>
    {(modalContext) =>
      <UserConsumer>
        {(userContext) => <ProjectList {...{ modalContext }} {...{ userContext }}  {...props} />}
      </UserConsumer>
    }
  </ModalConsumer>
);

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

const Wrapper = styled.div`
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
const Message = styled.span`
 padding: .3em;
 color: #005A9C;
 margin-left: 1em;
 border-radius: 1em;
 border: 2px solid #005A9C;
 background: white;
`;
export default Props;

