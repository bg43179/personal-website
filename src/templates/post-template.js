import React from 'react';
import { graphql } from 'gatsby';
import { Nav, Navbar } from 'react-bootstrap';
import Layout from '../components/Layout';
import Post from '../components/Post';
import Copyright from '../components/Sidebar/Copyright';
import { useSiteMetadata } from '../hooks';
import type { MarkdownRemark } from '../types';

type Props = {
  data: {
    markdownRemark: MarkdownRemark
  }
};

const PostTemplate = ({ data }: Props) => {
  const { title: siteTitle, author, copyright } = useSiteMetadata();
  const { frontmatter } = data.markdownRemark;
  const { title: postTitle, description: postDescription, socialImage } = frontmatter;
  const metaDescription = postDescription !== null ? postDescription : '';

  return (
    <Layout title={`${postTitle} - ${siteTitle}`} description={metaDescription} socialImage={socialImage} >
      <Navbar
        bg="light"
        variant="light"
        expand="md"
        className='py-2 sticky-top'
      >
        <Navbar.Brand href="/" className="mx-4 my-1">
          <img
            src={author.photo}
            width="70"
            className="rounded-circle"
            height="70"
            style={{
              opacity: 0.9
            }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/page" className="mx-2">Articles</Nav.Link>
            <Nav.Link href="/about" className="mx-2">About</Nav.Link>
            <Nav.Link href="/notes" className="mx-2">Notes</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Post post={data.markdownRemark} />
      <div className="d-flex mx-4 my-4 justify-content-center">
        <Copyright copyright={copyright} isContent/>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
        tagSlugs
      }
      frontmatter {
        date
        description
        tags
        title
        socialImage
      }
    }
  }
`;

export default PostTemplate;
