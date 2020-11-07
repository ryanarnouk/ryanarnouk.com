import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Navigation from '../components/navigation';
import Landing from '../components/main/landing';
import About from '../components/main/about';
//import Blog from '../components/main/blog';
//import Projects from '../components/main/projects';
import Skills from '../components/main/skills';
//import Projects from '../components/main/projects';

import Announcement from '../components/announcement';

const IndexPage = () => (
  <Layout>
    <SEO title="Main" />
    <div>
      <Announcement message={<p style={{margin: 0}}>I am available for hire, tutoring services and freelancing available <Link to="/">Learn More</Link></p>} />
      <Landing />
      <Navigation />
      <About />
      <Skills />
    </div>
  </Layout>
)

export default IndexPage