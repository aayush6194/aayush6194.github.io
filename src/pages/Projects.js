import React from 'react';
import Layout from '../components/layout';
import Header from '../components/Header.js';
import ProjectList from '../components/ProjectList';
import { graphql } from "gatsby"
import Img from "gatsby-image"


const projList = [
  {
    name:"image4",
    title: "Calender App",
    description: "A Calender App: IN PROGRESS",
    link:"calender.aayushh.com",
    align: "left",
    code: ["NodeJS","React", "Redux", "Styled-Components", "MongoDB"]
  },

  {
  name:"image1",
  title: "To-do List",
  description: "A to-do list application built on Materialize CSS; uses PHP as the serverside language for logins, signup and adding/deleting to the list with MySQL as the database.",
  link:"http://todolistphp.gearhostpreview.com/",
  align: "right",
  code: ["PHP", "Materialize", "MySQL", "Javascript"]
},
{
  name:"image2",
  title: "ParkStash",
  description: "A full responsive side created using css grid for ParkStash",
  link: "",
  align: "left",
  code: ["CSS"]
},
{
  name:"image3",
  title: "Auction Website",
  description: "A responsive ReactJs app to stimulate just the front end for an auction website.",
  link:"",
  align: "right",
  code: ["React"]
}
];

const Projects = ({data}) => (
  <Layout>
    <Header />
    <div className="container2">
          {console.log(projList[0].name)}
          {projList.map((item)=>(<ProjectList className="row main-grid" fluid={data[item.name].childImageSharp.fluid} data={item} />))}
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
}
`;
export default Projects;
