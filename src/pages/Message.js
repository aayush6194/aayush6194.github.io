import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import Header from '../components/Header.js';
import SEO from "../components/seo";
import posed from 'react-pose';
import Sidebar from '../components/sidebar';
import DarkMode from '../components/dark-mode';
import api from '../api';

const Box = styled(posed.div({
  start: { scale: 0, opacity: 0.6},
  end: { scale: 1, opacity: 1},
  transition:{
    duration: 210,
    ease: 'linear'
  }

}))``;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 60px auto;
  color: black;
  font-weight: bold;
  width: 60%;
  max-width: 1000px;
  margin: auto;
  @media (max-width: 1600px){
    grid-template-columns: 85px auto;
  }
  @media (max-width: 720px){
    width: 95%;
    grid-template-columns: 100px auto;
  }
`;

class Message extends React.Component  {
  constructor(props){
    super(props);
    this.state ={ name : "", email: "", message: "", subject:"", file: null, fileNum: 0, stage: "start", darkMode: false};
  }
  
  getDarkMode(){
    let mode = (localStorage.getItem("dark-mode")? localStorage.getItem("dark-mode") : false) === "true"? true: false; 
    this.setState( { darkMode: mode});
  }

  toggleDarkMode = (mode)=>{  
    localStorage.setItem("dark-mode", mode === "dark"? true : false); 
      this.setState({ darkMode : mode === "dark"? true : false});
    }

  submit(){
  const {name, email, message, subject} = this.state;
  const messageObj = {name, email, subject, message};
   api.message(messageObj).then((res)=>{
     if(res.success) alert('submitted');
     else alert('Error')

     this.setState({ name : "", email: "", message: "", subject:""});
   }).catch((e)=>alert(e));
    }
// load (){
//   const API = "https://nodeapi12.herokuapp.com/files";
//   fetch(API, {mode: 'cors'})
//       .then(function(res){return res.json();})
//         .then((data)=>{
//           this.setState({fileNum : data.num});
//        })
//       .catch(function(err) {alert("Connecting to API. Sever Maybe Asleep. Try Again.");});
// }

 componentDidMount(){
  this.getDarkMode();
 //  this.load();
  this.setState({stage: "end"});
 }

 change= e =>{
   this.setState({ [e.target.name]: e.target.value});
 }
  render(){
    const {darkMode} = this.state;
return(
  <Layout darkMode={darkMode}>
    <SEO title="Message" keywords={[`gatsby`, `application`, `react`]} />
    <div className="container">
    <Sidebar active={"message"} darkMode={darkMode}/>
    <Header  active={"message"} darkMode={darkMode}/>
    <Box pose={this.state.stage}>
    <div>
    <Grid>
      <label htmlFor="name">Name:</label>
      <input type="text" className="input" id="name" name="name" onChange={this.change}/>
      <label htmlFor="email">Email: </label>
      <input type="email" className="input" id="email" name="email" onChange={this.change}/>
      <label htmlFor="subject">Subject: </label>
      <input type="text" className="input" id="text" name="message" onChange={this.change}/>
      <label htmlFor="email">Message: </label>
      <input type="text" className="input" id="text" name="subject" onChange={this.change}/>

      <input type="file" className="input row" id="file" name="file" onChange={this.change}/>
      <input type="submit" className={`input bt bt-custom row btt ${darkMode && "dark-btn"}`} id="submit" name="Submit" onClick={()=>this.submit()}/>
    </Grid>
    </div>
    <center>Number of files: {this.state.fileNum}</center>
     </Box>
     <DarkMode toggleDarkMode={this.toggleDarkMode} darkMode={darkMode} />
    </div>
  </Layout>
)
}
}
export default Message;
