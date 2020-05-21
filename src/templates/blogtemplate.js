import React from 'react'; 
import { Helmet } from 'react-helmet'; 
import { graphql } from 'gatsby';
import Navbar from '../components/navbar';

import '../styles/blog.css';

export default function BlogTemplate({ data }) {
  const { markdownRemark: post } = data
  return (
    <div>
      <Navbar />
      <div className="blog-post-container">
        <Helmet title={`Ryan Arnouk - ${post.frontmatter.title}`} />
        <div className="blog-post">
          <div className="blog-post-content">
            <img src={post.frontmatter.image} alt="Header Blog Image"/>
            <h1>{post.frontmatter.title}</h1>
            <h2>{post.frontmatter.date}</h2>
            <h2>{post.frontmatter.author}</h2>
            <div 
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>
          <div className="blog-post-end">
            <h2>Categories: {post.frontmatter.categories.join()}</h2>
            <h2>Tags: {post.frontmatter.tags.join()}</h2>
            {post.frontmatter.comments ? 
              <p>Comments (todo)</p>: 
              false
            } 
          </div>
        </div>
      </div>
    </div>
  )
}

export const blogQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title 
        author
        image
        categories
        tags
        comments
      }
    }
  }
`
