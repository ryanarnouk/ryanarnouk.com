import React from 'react'; 

import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeader from '../components/pageheader';

import Skills from '../components/main/skills';

const SkillsPage = () => (
  <Layout>
    <SEO title="Skills" />
    <div>
      <PageHeader pageTitle="Skills" />
      <Skills />
    </div>
  </Layout>
)

export default SkillsPage;