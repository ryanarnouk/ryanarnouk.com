import React from 'react'; 
import { StaticQuery, graphql } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

import '../styles/socialicons.css';

export default function SocialIcons() {
  return (
    <StaticQuery
      query={graphql`
        query SocialsQuery {
          markdownRemark(frontmatter: {title: {eq: "Socials"}}) {
            frontmatter {
              linkedin
              twitter
              instagram
              github
            }
          }
        }
      `}
      render={data => (
        <div className="social-icons">
          <a href={data.markdownRemark.frontmatter.linkedin} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
          <a href={data.markdownRemark.frontmatter.github} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="2x"/></a>
          <a href={data.markdownRemark.frontmatter.instagram} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} size="2x"/></a>
          <a href={data.markdownRemark.frontmatter.twitter} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} size="2x"/></a>
        </div>
      )}
    />
  )
}