import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import '../../styles/sections.css';

export default function About() {
  return (
    <StaticQuery
      query={graphql`
        query AboutQuery {
          markdownRemark(frontmatter: {title: {eq: "About"}}) {
            frontmatter {
              title
            }
            html
            excerpt
          }
        }
      `}
      render={data => (
        <div className="about">
          <h1>ABOUT ME</h1>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </div>
      )}
    />
  )
}