import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import '../../styles/sections.css';

export default function Projects() {
  return (
    <StaticQuery
      query={graphql`
        query ProjectsQuery {
          allMarkdownRemark(sort: {order: ASC, fields: [frontmatter___order]}, filter: {frontmatter: {type: {eq: "project"}}}) {
            edges {
              node {
                frontmatter {
                  title
                  image
                  link
                  order
                  tags
                }
                excerpt
              }
            }
          }
        }
      `}
      render={data => (
        <div className="projects">
          <h1>PROJECTS</h1>
          {data.allMarkdownRemark.edges.map((a, i) => {
            return (
              <div key={i}>
                <h2>{a.node.frontmatter.title}</h2>
                <img src={a.node.frontmatter.image} />
                <p>{a.node.excerpt}</p>
                <p><a href={a.node.frontmatter.link}>Link</a></p>
                <p>{a.node.frontmatter.tags}</p>
              </div>
            )
          })}
        </div>
      )}
    />
  )
}