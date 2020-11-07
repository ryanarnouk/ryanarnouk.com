import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import '../styles/announcement.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

var renderComponent = false; 

export default function Announcement() {
  return (
    <StaticQuery
      query={graphql`
        query AnnouncementQuery {
          markdownRemark(frontmatter: {type: {eq: "announcement"}}) {
            frontmatter {
              title
              date
            }
            html
            excerpt
          }
        }
      `}
      render={(data, renderComponent = true) => (
        <div>
          {renderComponent ? 
            <div style={{
              height: '5vh', 
              width: '100%', 
              backgroundColor: '#9BC1BC', 
              color: 'black', 
              marginTop: '63px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
              }}>
              <div 
                style={{justifyContent: 'center'}}
                dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}
              ></div>
              <FontAwesomeIcon icon={faTimes} style={{cursor: 'pointer'}}/>
            </div>
          :false}
        </div>
      )}
    />
  )
}