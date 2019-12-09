import React, {useState, useEffect} from 'react';
import Layout from '../components/layout';
import ProjectList from '../components/ProjectList';
import { graphql } from "gatsby"
import ProjList from '../json/projList.json';
import{ DarkMode, SEO, Sidebar, Header} from '../components';

const projList = ProjList.proj;

const Projects = ({data}) => {
const [darkMode, setDarkMode ] = useState(false);
const toggleDarkMode = (mode)=> {setDarkMode(mode === "dark"? true: false); 
                                localStorage.setItem("dark-mode", mode === "dark"? true : false);}
useEffect(() => {
  let mode = (localStorage.getItem("dark-mode")? localStorage.getItem("dark-mode") : false) === "true"? true: false; 
  setDarkMode(mode);
}, [])
return (
  <Layout darkMode={darkMode}>
    <SEO title="Projects" keywords={[`gatsby`, `application`, `react`]} />
    <Header active={"project"} darkMode={darkMode}/>
    <Sidebar active={"project"} darkMode={darkMode} />
    <div className="container2">
      {projList.map((item, i) => (<ProjectList  darkMode={darkMode} key={i} index={i} className="row main-grid" fluid={data[item.name].childImageSharp.fluid} data={item} />))}
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

image6: file(relativePath: {eq: "pj-6.png"}) {
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

image7: file(relativePath: {eq: "pj-7.png"}) {
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

image8: file(relativePath: {eq: "pj-8.png"}) {
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
