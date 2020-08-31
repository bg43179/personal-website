import React from 'react';
import { graphql, Link } from 'gatsby';
import { FaChevronCircleLeft } from 'react-icons/fa';
import Base from '../containers/Base';
import { useSiteMetadata } from '../hooks';
import type { MarkdownRemark } from '../types';

type Props = {
  data: {
    markdownRemark: MarkdownRemark
  }
};

const NoteTemplate = ({ data }: Props) => {
  const { title: siteTitle } = useSiteMetadata();
  const { html: pageBody } = data.markdownRemark;
  const { frontmatter } = data.markdownRemark;
  const { title: pageTitle } = frontmatter;

  return (
    <Base title={`${pageTitle} - ${siteTitle}`} >
      <div className="d-flex align-items-center">
        <h1>{pageTitle}</h1>
        <Link to={'/notes'} className="ml-auto mt-5 btn btn-outline-dark rounded-pill">
          <FaChevronCircleLeft /><span className="mx-2" >Back</span>
        </Link>
      </div>
      <div dangerouslySetInnerHTML={{ __html: pageBody }} />
    </Base>
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
