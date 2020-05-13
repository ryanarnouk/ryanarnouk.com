import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import NavMenu from '../components/navbar';

const Header = () => (
  <header>
    <NavMenu/>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
