import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import '../../styles/sections.css';

export default function Skills() {
  return (
    <StaticQuery
      query={graphql`
        query SkillsQuery {
          markdownRemark(frontmatter: {title: {eq: "Skills"}}) {
            frontmatter {
              title
            }
            html
            excerpt
          }
        }
      `}
      render={data => (
        <div className="skills">
          <h1>{data.markdownRemark.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </div>
      )}
    />
  )
}