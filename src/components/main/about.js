import React from 'component';

const About = () => {
  const { markdownRemark } = data; 
  const { html } = markdownRemark;
  return (
    <div 
      dangerouslySetInnerHTML={{ __html: html }} />
  );
}

export const pageQuery = graphql`
  query pageQuery {
    allMarkdownRemark {
      nodes {
        excerpt
        html
        frontmatter {
          title
        }
      }
    }
  }
`

export default About; 