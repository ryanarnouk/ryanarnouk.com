import PropTypes from 'prop-types';
import React from 'react'; 

const Top = ({ siteTitle }) => (
  <div style={{padding: 50}}>
    <h1>{siteTitle}</h1>
  </div>
)

Top.propTypes = {
  siteTitle: PropTypes.string,
}

Top.defaultProps = {
  siteTitle: ``
}

export default Top; 