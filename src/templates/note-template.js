// @flow strict
import React from 'react';
import { graphql, Link } from 'gatsby';
import { FaChevronCircleLeft } from 'react-icons/fa';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';
import { useSiteMetadata } from '../hooks';
import type { MarkdownRemark } from '../types';

type Props = {
  data: {
    markdownRemark: MarkdownRemark
  }
};

const NoteTemplate = ({ data }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const { html: pageBody } = data.markdownRemark;
  const { frontmatter } = data.markdownRemark;
  const { title: pageTitle } = frontmatter;

  return (
    <Layout title={`${pageTitle} - ${siteTitle}`} >
      <Sidebar />
      <Page>
        <div className="d-flex align-items-center">
          <h1>{pageTitle}</h1>
          <Link to={'/notes'} className="ml-auto mt-5 btn btn-outline-dark rounded-pill">
            <FaChevronCircleLeft /><span className="mx-2" >Back</span>
          </Link>
        </div>
        <div dangerouslySetInnerHTML={{ __html: pageBody }} />
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query NoteBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date
        description
        socialImage
      }
    }
  }
`;

export default NoteTemplate;