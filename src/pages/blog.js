import React from 'react'; 

import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import PageHeader from '../components/pageheader';
import Filter from '../components/blog/filter';

import '../styles/blog.css';

export default function BlogPage({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Layout>
      <SEO title="Blog" />        
      <PageHeader pageTitle="Blog" />
      <div className="blog-posts">
      <div>
        <p>My recent publications. I enjoy writing about everything from computer science and programming, learning, productivity, and many more interests.</p>
        <Filter />
          <div style={{width: '100%'}}>
            {posts
              .filter(post => post.node.frontmatter.title.length > 0)
              .map(({ node: post }) => {
                return (
                  <div className="blog-post-preview" key={post.id}>
                    <h1>
                      <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                    </h1>
                    <h2>{post.frontmatter.date}</h2>
                    <p>{post.excerpt}</p>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const blogQuery = graphql`
  query blogQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, filter: {frontmatter: {type: {eq: "post"}}}) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`
