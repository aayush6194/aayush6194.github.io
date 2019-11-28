import React, {useState} from 'react';
import Layout from '../components/layout';
import Header from '../components/Header.js';
import ProjectList from '../components/ProjectList';
import { graphql } from "gatsby"
import SEO from "../components/seo";
import Sidebar from './../components/sidebar';
import ProjList from '../json/projList.json';
import DarkMode from '../components/dark-mode';

const projList = ProjList.proj;

const Projects = ({data}) => {
const [darkMode, setDarkMode ] = useState(false);
const toggleDarkMode = (mode)=> setDarkMode(mode === "dark"? true: false);
return (
  <Layout darkMode={darkMode}>
    <SEO title="Projects" keywords={[`gatsby`, `application`, `react`]} />
    <Header active={"project"} darkMode={darkMode}/>
    <Sidebar active={"project"} darkMode={darkMode} />
    <div className="container2">
      {projList.map((item) => (<ProjectList  darkMode={darkMode} key={Math.random() * 9989 + "ds"} className="row main-grid" fluid={data[item.name].childImageSharp.fluid} data={item} />))}
    </div>
    <DarkMode toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
  </Layout>
)};


export const pageQuery = graphql`
query {
  image1: file(relativePath: {eq: "pj-1.JPG"}) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  image2: file(relativePath: {eq: "pj-2.png"}) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  image3: file(relativePath: {eq: "pj-3.png"}) {
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
  image4: file(relativePath: {eq: "pj-4.png"}) {
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
  image5: file(relativePath: {eq: "pj-5.png"}) {
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
export default Projects;
