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
        <Col xl={4} lg={4} md={3} sm={12} xs={12}>
          <Sidebar />
        </Col>
        <Col xl={6} lg={6} md={8}>
          <Page>
            {children}
          </Page>
        </Col>
        <Col xl={2} lg={2} md={1}/>
      </Row>
    </Layout>
  );
};

export default Base;
