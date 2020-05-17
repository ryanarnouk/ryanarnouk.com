import React from "react"
import { useStaticQuery, graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

function renderImage(file) {
  return (
    <Img fluid={file.node.childImageSharp.fluid} style={{color: "white", width: '100px'}}/>
  )
}

const Image = function ({file}) {
  return <StaticQuery
    query={graphql`
      query ImageQuery {
        allFile(filter: {sourceInstanceName: {eq: "images"}}) {
          edges {
            node {
              id
              name
              relativePath
              childImageSharp {
                fluid(maxWidth: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      try {
        const image = data.allFile.edges.find((i) => {
          if (i.node.relativePath === file) {
            return i;
          }
        });
  
        return(renderImage(image))
      } catch {
        console.error("Image does not exist")
      }
    }}
  />
}

export default Image