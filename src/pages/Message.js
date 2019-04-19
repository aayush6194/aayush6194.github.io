import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import Header from '../components/Header.js';
import SEO from "../components/seo";
import posed from 'react-pose';

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
    this.state ={ name : "", email: "", message: "", file: null, fileNum: 0, stage: "start"};

  }
  submit(){
    const API = "http://localhost:5000/upload";
    fetch(API, {
        method: 'POST',
        headers: { 'Access-Control-Allow-Origin':'*'},
        mode: 'cors',
        body: this.state.file
      })
        .then(function(res){return res.json();})
          .then((data)=>{

         })
        .catch(function(err) {alert(err);});
    }
load (){
  const API = "https://nodeapi12.herokuapp.com/files";
  fetch(API, {mode: 'cors'})
      .then(function(res){return res.json();})
        .then((data)=>{
          this.setState({fileNum : data.num});
       })
      .catch(function(err) {alert("Connecting to API. Sever Maybe Asleep. Try Again.");});

}

 componentDidMount(){
   this.load();
  this.setState({stage: "end"});
 }

  render(){
  // return(
    // <Layout>
    //   <SEO title="Message" keywords={[`gatsby`, `application`, `react`]} />
    //   <Header  active={"message"}/>
    //   <Grid>
    //     <label htmlFor="name">Name:</label>
    //     <input onChange={(e)=>{this.setState({name : e.target.value})}} type="text" className="input" id="name" name="name"/>
    //     <label htmlFor="email">Email: </label>
    //     <input onChange={(e)=>{this.setState({email : e.target.value})}} type="email" className="input" id="email" name="email"/>
    //     <label htmlFor="email">Message: </label>
    //     <input onChange={(e)=>{this.setState({message : e.target.value})}} type="text" className="input" id="text" name="message"/>
    //     <input onChange={(e)=>{this.setState({file : e.target.files[0]}); console.log(e.target.files[0])}} type="file" className="input row bt" id="file" name="file"/>
    //     <input onClick={()=>this.submit()} type="submit" className="input bt bt-custom row" id="submit" name="Submit"/>
    //   </Grid>
    // </Layout>
  // );

return(
  <Layout>
    <SEO title="Message" keywords={[`gatsby`, `application`, `react`]} />
    <div className="container">
    <Header  active={"message"}/>
    <Box pose={this.state.stage}>
    <form action="https://nodeapi12.herokuapp.com/upload" encType="multipart/form-data" method="POST">
    <Grid>
      <label htmlFor="name">Name:</label>
      <input type="text" className="input" id="name" name="name"/>
      <label htmlFor="email">Email: </label>
      <input type="email" className="input" id="email" name="email"/>
      <label htmlFor="email">Message: </label>
      <input type="text" className="input" id="text" name="message"/>

      <input type="file" className="input row" id="file" name="file"/>
      <input type="submit" className="input bt bt-custom row btt" id="submit" name="Submit"/>
    </Grid>
    </form>
    <center>Number of files: {this.state.fileNum}</center>
     </Box>
    </div>
  </Layout>
)
}
}
export default Message;
