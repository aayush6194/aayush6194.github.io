import React from 'react';
import Home from '../components/Home';
import Header from '../components/Header.js';
import Footer from '../components/Footer';
import Layout from "../components/layout"
import SEO from "../components/seo";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {darkMode: false};
   }

  componentDidMount() {
    }

  toggleDarkMode = (mode)=>{
   
      this.setState({ darkMode : mode === "dark"? true : false});
    }

  render() {
    return (
      <Layout darkMode={this.state.darkMode}>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <div className="container main-grid">
            <Header active={"home"} darkMode={this.state.darkMode} />
            <Home className="row" darkMode={this.state.darkMode} toggleDarkMode={this.toggleDarkMode}/>
            <Footer darkMode={this.state.darkMode}/>
         </div>
      </Layout>
    );
  }
}
export default Index;
