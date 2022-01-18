import React from "react";
import Home from "../components/Home";
import Header from "../components/Header.js";
import Footer from "../components/Footer";
import Layout from "../components/layout";
import SEO from "../components/seo";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { darkMode: false, firstVisit: true, loader: true };
  }

  componentDidCatch(error, errorInfo) {
    console(error);
    console(errorInfo);
  }
  componentDidMount() {
    this.getDarkMode();
  }

  getDarkMode() {
    let mode =
      (localStorage.getItem("dark-mode")
        ? localStorage.getItem("dark-mode")
        : false) === "true"
        ? true
        : false;
    this.setState({ darkMode: mode });
  }

  toggleDarkMode = (mode) => {
    localStorage.setItem("dark-mode", mode === "dark" ? true : false);
    this.setState({ darkMode: mode === "dark" ? true : false });
  };

  render() {
    return (
      <Layout darkMode={this.state.darkMode}>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <div className="container main-grid">
          <Header active={"home"} darkMode={this.state.darkMode} />
          <Home
            className="row"
            darkMode={this.state.darkMode}
            toggleDarkMode={this.toggleDarkMode}
          />
          <Footer darkMode={this.state.darkMode} />
        </div>
      </Layout>
    );
  }
}
export default Index;
