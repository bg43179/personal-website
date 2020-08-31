import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Layout from '../components/Layout';
import Page from '../components/Page';
import Sidebar from '../components/Sidebar';

type Props = {
  title: String,
  children: React.Node
};

// eslint-disable-next-line arrow-body-style
const Base = ({ title, children } : Props) => {
  return (
    <Layout title={title}>
      <Row>
        <Col md={3} xs={12}>
          <Sidebar />
        </Col>
        <Col md={8}>
          <Page>
            {children}
          </Page>
        </Col>
        <Col md={2} />
      </Row>
    </Layout>
  );
};

export default Base;
