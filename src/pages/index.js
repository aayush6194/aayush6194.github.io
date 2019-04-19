import React from 'react';
import Home from '../components/Home';
import Header from '../components/Header.js';
import Footer from '../components/Footer';
import Layout from "../components/layout"
import SEO from "../components/seo";
import Loader from "../components/Loader";
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {active: true};
   }

  componentDidMount() {
  //   window.addEventListener( "touchstart", function(e) {
  //   console.log(e.defaultPrevented);  // will be false
  //   e.preventDefault();   // does nothing since the listener is passive
  //   console.log(e.defaultPrevented);  // still false
  // },  {passive: true} );
  //  setTimeout(()=>{this.setState({active: true})}, 1000);
    }

  render() {
    if(this.state.active){
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <div className="container main-grid">
            <Header active/>
            <Home className="row" />
            <Footer />
         </div>
      </Layout>
    );
  } else{
    return<div><h1>Welcome</h1><Loader/></div>
  }
  }
}
export default Index;
