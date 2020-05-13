/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../styles/layout.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Footer from './footer';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header />
      {/*data.site.siteMetadata.top ? <Top siteTitle={data.site.siteMetadata.title} />: false*/}
      <Container fluid style={{padding: 0}}>
        <main>{children}</main>
        <Footer />
      </Container>
    </>
  )
}
/*
class Layout extends React.Component {
  constructor (props) {
    super(props);
    this.state = children;
  }

  render() {
    const data = useStaticQuery(graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)

    return (
      <>
        <Header />
        {this.props.top ? <Top siteTitle={data.site.siteMetadata.title} />: false}
        <Container fluid style={{padding: 0}}>
          <main>{children}</main>
          <footer>
            © 2020 {new Date().getFullYear()} Ryan Arnouk
          </footer>
        </Container>
      </>
    )
  }
}*/

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.defaultProps  = {
  top: true
}

export default Layout
