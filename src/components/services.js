import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import '../styles/sections.css';

export default function Services() {
  return (
    <StaticQuery 
      query={graphql`
        query ServicesQuery {
          markdownRemark(frontmatter: {title: {eq: "Services"}}) {
            frontmatter {
              title
            }
            excerpt
            html
          }
        }
      `}
      render={data => (
        <div className="services">
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </div>
      )}
    />
  )
}