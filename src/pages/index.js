import React from 'react';
import Home from '../components/Home';
import Header from '../components/Header.js';
import Footer from '../components/Footer';
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo";



class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {active: "home"};
   }

  componentDidMount() {
    window.addEventListener( "touchstart", function(e) {
    console.log(e.defaultPrevented);  // will be false
    e.preventDefault();   // does nothing since the listener is passive
    console.log(e.defaultPrevented);  // still false
  },  {passive: true} );
    }

  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <div className="container main-grid">

            <Header />
            <Home className="row"/>
            <Footer />
         </div>

      </Layout>
    );
  }
}
export default Index;
