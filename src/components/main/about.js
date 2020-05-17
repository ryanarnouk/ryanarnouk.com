import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

export default function About() {
  return (
    <StaticQuery
      query={graphql`
        query AboutQuery {
          markdownRemark(frontmatter: {title: {eq: "About"}}) {
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