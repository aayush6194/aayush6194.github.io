import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import ProjectList from "../components/ProjectList";
import { graphql } from "gatsby";
import ProjList from "../json/projList.json";
import { DarkMode, SEO, Sidebar, Header } from "../components";
import { safeSetLocalStorage, safeGetLocalStorage } from "../utils/localstorage";

const projList = ProjList.proj;

const Projects = ({ data }) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = (mode) => {
    setDarkMode(mode === "dark" ? true : false);
    safeSetLocalStorage("dark-mode", mode === "dark" ? true : false);
  };
  const [activeItem, setActiveItem] = useState(-1);
  useEffect(() => {
    let mode =
    safeGetLocalStorage("dark-mode") !== true;
    setDarkMode(mode);
    const [, query] = window.location.href.split("?");
    const [, id] = query ? query.split("=") : [-1, -1];
    setActiveItem(id);
  }, []);
  return (
    
      <div className="container2" id="projects">
        {projList.map((item, i) => (
          <ProjectList
            darkMode={darkMode}
            active={i == activeItem}
            key={i}
            index={i}
            fluid={data? data[item.name].childImageSharp.fluid: ''}
            data={item}
          />
        ))}
      </div>
  );
};

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
export default Projects;