import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';
import posed from 'react-pose';
import Fade from 'react-reveal/Fade';
import { Sidebar, DarkMode, Modal }from './';
import svg from './../images/step2.svg';
import svgDark from './../images/step2-dark.svg';
import { ModalConsumer, ModalContext } from '../context/modal-context';
import Hints from './hints';

const Box = styled(posed.div({}))`
font-size: 1.18em;
font-family: 'Montserrat', sans-serif;
padding-right: 1em;
line-height: 165%;
&:before {
 content: '';
 width: ${props=> props.width};
 height: 100%;
 position: absolute;
 background: #30ABE8;
 transition: 0.37s;
  transition-timing-function: cubic-bezier(2.0, 0.5, 0.1, 0.5);
}`;

const Text = styled.div`
    font-size: 40px;
    font-weigt: bold;`;

  
class Home extends React.Component  {
  static Modal = ModalContext;
  constructor(props){
    super(props);
    this.state = {stage : "end", width: "100%"};
  }

 componentDidMount(){this.setState({stage: "end"});

 setTimeout(()=>this.setState({ width: "0%"}), 50);

}
componentDidCatch(error, errorInfo){ console.log(error); console.log(errorInfo)}
  render(){
    let { darkMode, toggleDarkMode } = this.props;
    return (
        <div className="home grid align-center" >
          {/* <Modal close={()=>alert()} text={"Error Submiting the form"} /> */}
          <div style={{ display: "grid", placeItems: "center" }}><Sidebar active={"home"} darkMode={darkMode} />
            <img src={darkMode ? svgDark : svg} className="svg-glow" style={{ height: "60vh", maxHeight: "50vw" }} /></div>
          <div className="content-container align-left" >
            <Fade left>
              <Box>
                <h1 style={{ margin: 0, marginBottom: "9px" }}>Hello, I am Aayush!</h1>
                I am a Senior at the ULM pursuing a <b>Computer Science </b> degree, and I am also a <b>FullStack Web Developer</b> at LSBDC. I love learning and I build web apps.<br /><br /> Check out some of my projects, my resume or send me an email.
            <div>
                  <Link to="/Projects" style={{ float: "right" }}><span className="bold-white">Check My Projects!</span>
                    <i className="material-icons shine">details</i></Link>
                </div>
                <Text></Text>
              </Box>
            </Fade>
          </div>
          <Hints msg={["Hello"]} />
          <DarkMode toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        </div>
    );
  }
}
export default Home;
