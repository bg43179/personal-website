import React from 'react';
import { Link } from 'gatsby';
import { Row, Col } from 'react-bootstrap';
import { FaChevronCircleLeft } from 'react-icons/fa';
import styles from './Content.module.scss';

type Props = {
  body: string,
  title: string
};

const Content = ({ body, title }: Props) => (
    <Row>
      <Col xl={2} lg={1} md={1} sm={1} xs={1}/>
      <Col>
        <div className="px-5 pt-5">
          <Link className="d-inline-block mt-4 btn btn-outline-dark rounded-pill" to="/page">
            <FaChevronCircleLeft className="mx-2"/><span>Back</span>
          </Link>
          <h1 className="d-flex my-4 justify-content-center">{title}</h1>
          <div className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body }} />
        </div>
      </Col>
      <Col xl={2} lg={1} md={1} sm={1} xs={1}/>
    </Row>
);

export default Content;
