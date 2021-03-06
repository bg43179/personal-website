import React from 'react';
import { Link } from 'gatsby';
import { FaChevronCircleLeft } from 'react-icons/fa';
import { Document, Page as PdfPage } from 'react-pdf';
import Base from '../../containers/Base';

const Spinner = () => { //eslint-disable-line arrow-body-style, spaced-comment
  return (
    <div class="text-center">
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
};

const Resume = () => { //eslint-disable-line arrow-body-style, spaced-comment
  return (
      <Base>
        <React.Fragment>
          <Link to='/about' className="btn btn-outline-dark rounded-pill">
            <FaChevronCircleLeft/><span className="mx-2" >Back</span>
          </Link>
          <Document file='/resume.pdf' loading={Spinner} >
            <PdfPage width='1000' scale={1} renderMode='canvas' pageNumber={1}/>
          </Document>
        </React.Fragment>
      </Base>
  );
};

export default Resume;
