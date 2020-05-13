import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Navigation from '../components/navigation';
import Landing from '../components/main/landing';

const IndexPage = () => (
  <Layout>
    <SEO title="Main" />
    <div>
      <Landing />
      <Navigation />
    </div>
  </Layout>
)

export default IndexPage