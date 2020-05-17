import React from 'react'; 

import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeader from '../components/pageheader';

// about component
import About from '../components/main/about';

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <div>
      <PageHeader pageTitle="About"/>
      <About />
    </div>
  </Layout>
)

export default AboutPage;