import React from "react";
import Home from "../components/Home";
import Header from "../components/header";
import Footer from "../components/Footer";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Projects from "./Projects";
import { safeGetLocalStorage, safeSetLocalStorage } from "../utils/localstorage";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { darkMode: false, firstVisit: true, loader: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
    console.log(errorInfo);
  }
  componentDidMount() {
    this.getDarkMode();
  }

  getDarkMode() {
    let mode =
    safeGetLocalStorage("dark-mode") !== true;
    this.setState({ darkMode: mode });
  }

  toggleDarkMode = (mode) => {
    safeSetLocalStorage("dark-mode", mode === "dark" ? true : false);
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
        <Projects data={this.props.data}/>
       
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query {
    image1: file(relativePath: { eq: "pj-1.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "pj-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image3: file(relativePath: { eq: "pj-3.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          base64
          tracedSVG
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
          originalImg
          originalName
        }
      }
    }
    image4: file(relativePath: { eq: "pj-4.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          base64
          tracedSVG
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
          originalImg
          originalName
        }
      }
    }
    image5: file(relativePath: { eq: "pj-5.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          base64
          tracedSVG
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
          originalImg
          originalName
        }
      }
    }

    image6: file(relativePath: { eq: "pj-6.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          base64
          tracedSVG
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
          originalImg
          originalName
        }
      }
    }

    image7: file(relativePath: { eq: "pj-7.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          base64
          tracedSVG
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
          originalImg
          originalName
        }
      }
    }

    image8: file(relativePath: { eq: "pj-8.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          base64
          tracedSVG
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
          originalImg
          originalName
        }
      }
    }

    image11: file(relativePath: { eq: "pj-11.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          base64
          tracedSVG
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
          originalImg
          originalName
        }
      }
    }

    image9: file(relativePath: { eq: "pj-9.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          base64
          tracedSVG
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
          originalImg
          originalName
        }
      }
    }
  }
`;
export default Index;
