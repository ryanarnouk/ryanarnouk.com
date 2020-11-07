import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeader from '../components/pageheader';

// services component
import Services from '../components/services';

const ServicesPage = () => (
  <Layout>
    <SEO title="Services" />
    <div>
      <PageHeader pageTitle="Services" />
      <Services />
    </div>
  </Layout>
)

export default ServicesPage;