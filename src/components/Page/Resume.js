import React from 'react';
import { Document, Page as PdfPage } from 'react-pdf';
import Layout from '../Layout';
import Page from '../Page';
import Sidebar from '../Sidebar';
import FontAwesome from 'react-fontawesome';
import { Link } from 'gatsby';

const Spinner = () => {
  return (
  <div class="text-center">
    <div class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
  )
};

const Resume = () => {
  return (
    <Layout title="Reusme">
      <Sidebar />
      <Page>
        <React.Fragment>
          <Link to={'/about'} className="btn btn-outline-dark rounded-pill">
          <FontAwesome name="chevron-circle-left mx-2"/><span>Back</span>
          </Link>
          <Document file={"../../resume.pdf"} loading={Spinner} >
            <PdfPage width={'1000'} scale={1} renderMode={"canvas"} pageNumber={1}/>
          </Document>
        </React.Fragment>
      </Page>
    </Layout>
  );
};

export default Resume;
  