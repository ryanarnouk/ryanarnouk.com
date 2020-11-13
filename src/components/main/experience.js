import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import moment from 'moment';

import '../../styles/sections.css';

export default function Experience() {
  return (
    <StaticQuery 
      query={graphql`
        query ExperienceQuery {
          allMarkdownRemark(sort: {order: ASC, fields: [frontmatter___order]}, filter: {frontmatter: {type: {eq: "experience"}}}) {
            edges {
              node {
                frontmatter {
                  title
                  employer
                  datestart
                  dateend
                  location
                  order
                }
                excerpt
              }
            }
          }
        }      
      `}
      render={data => (
        <div className="experience">
          <h1>EXPERIENCE</h1>
          {data.allMarkdownRemark.edges.map((a, i) => {
            return (
              <div key={i}>
                <h2>{a.node.frontmatter.title}</h2>
                <div style={{display: 'flex'}}>
                  <div className="line"></div>
                  <div style={{margin: 20}}>
                    <div>
                      <p>{a.node.frontmatter.employer}</p>
                      <p>{moment(a.node.frontmatter.datestart).format('MMMM DD, YYYY')} - {a.node.frontmatter.dateend ? moment(a.node.frontmatter.dateend).format('MMMM DD, YYYY'): "Present"}</p>
                      <p>{a.node.excerpt}</p>
                    </div>
                  </div>
                </div>
                <p>{Date.now()}</p>
              </div>
            )
          })}
        </div>
      )}
    />
  )
}