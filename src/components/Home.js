import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import Fade from 'react-reveal/Fade';
import Typing from 'react-typing-animation';

const Box = styled(posed.div({}))`
font-size: 1em;
font-family: 'Montserrat', sans-serif;

&:before {
 content: '';
 width: ${props=> props.width};
 height: 100%;
 position: absolute;
 background: #30ABE8;
 transition: 0.37s;
  transition-timing-function: cubic-bezier(2.0, 0.5, 0.1, 0.5);
}
`;

const Text = styled.div`
    font-size: 40px;
    font-weigt: bold;
`;

// const Text2 = styled.h1`
//   color:white;
//   display: flex;
//    justify-content:center;
//    align-content:center;
//    flex-direction:column;
//
// `;

class Home extends React.Component  {
  constructor(props){
    super(props);
    this.state = {stage : "end", width: "100%"};
  }

 componentDidMount(){this.setState({stage: "end"});

 setTimeout(()=>this.setState({ width: "0%"}), 50);

}
  render(){
    return (<div>

    <div className="home grid align-center" >
{  /*    <Text2>     <span>I am a</span>
          <Typing loop={true} >

          <span>Designer</span>
           <Typing.Backspace count={20} />
          <span>Web Developer</span>
           <Typing.Backspace count={20} />
           </Typing>
           </Text2> */}

          <div className="content-container align-left" style={{}}>
          <Fade left>
          <Box><h1 style={{margin: 0, marginBottom: "9px"}}>Hello, I am Aayush!</h1>
            I am a junior at the ULM pursuing a Computer Science degree. I am a web developer, focused on <span >MERN</span> stack development.
            I love building responsive, progressive web apps.<br/> Check out some of my projects, my resume or send me an email.
            <Text>

            </Text>
          </Box>
          </Fade>
          </div>
    </div>
    </div>
    );
  }
}
export default Home;
