import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Navigation from '../components/navigation';
import Landing from '../components/main/landing';
import About from '../components/main/about';
import Skills from '../components/main/skills';

const IndexPage = () => (
  <Layout>
    <SEO title="Main" />
    <div>
      <Landing />
      <Navigation />
      <About />
      <Skills />
    </div>
  </Layout>
)

export default IndexPage