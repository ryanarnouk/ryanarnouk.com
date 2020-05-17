import PropTypes from 'prop-types';
import React from 'react'; 

const PageHeader = ({ pageTitle }) => (
  <div style={{width: '100%', height: '30vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#9BC1BC', paddingTop: 63}}>
    <h1>{pageTitle}</h1>
  </div>
)

PageHeader.propTypes = {
  pageTitle: PropTypes.string,
}

PageHeader.defaultProps = {
  pageTitle: ``
}

export default PageHeader; 