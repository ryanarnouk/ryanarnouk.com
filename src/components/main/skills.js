import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

export default function Skills() {
  return (
    <StaticQuery
      query={graphql`
        query SkillsQuery {
          markdownRemark(frontmatter: {title: {eq: "Skills"}}) {
            html
            excerpt
          }
        }
      `}
      render={data => (
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      )}
    />
  )
}