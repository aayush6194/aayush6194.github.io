import React from 'react';
import Layout from '../components/layout';
import Header from '../components/Header.js';
import ProjectList from '../components/ProjectList';
import { graphql } from "gatsby"
import SEO from "../components/seo";

const projList = [
  {
    name:"image5",
    title: "Dreammy 2.0",
    description: "A social site with logged features with tokkens, content uploads, private chat, friend suggesstions",
    link:"https://dreammy.aayushh.com",
    align: "left",
    code: ["Express","ReactJs", "Redux", "Styled-Components", "Materialize", "MongoDB"]
  },
  {
    name:"image4",
    title: "Calender App",
    description: "A Calender App: IN PROGRESS",
    link:"https://calendar.aayushh.com",
    align: "right",
    code: ["NodeJs","ReactJs", "Redux", "Styled-Components", "MongoDB"]
  },

  {
  name:"image1",
  title: "To-do List",
  description: "A to-do list application built on Materialize CSS; uses PHP as the serverside language for logins, signup and adding/deleting to the list with MySQL as the database.",
  link:"http://todolistphp.gearhostpreview.com",
  align: "left",
  code: ["PHP", "Materialize", "MySQL", "Javascript"]
},
{
  name:"image2",
  title: "ParkStash",
  description: "A full responsive side created using css grid for ParkStash",
  link: "",
  align: "right",
  code: ["CSS GRID"]
},
{
  name:"image3",
  title: "Auction Website",
  description: "A responsive ReactJs app to stimulate just the front end for an auction website.",
  link:"",
  align: "left",
  code: ["ReactJs"]
}
];

const Projects = ({data}) => (
  <Layout>
    <SEO title="Projects" keywords={[`gatsby`, `application`, `react`]} />
    <Header active={"projects"}/>
        <div className="container2">
          {console.log(projList[0].name)}
          {projList.map((item)=>(<ProjectList key={Math.random()*9989 +"ds"} className="row main-grid" fluid={data[item.name].childImageSharp.fluid} data={item} />))}
    </div>
  </Layout>

)
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
