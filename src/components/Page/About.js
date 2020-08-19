import React from 'react';
import Layout from '../Layout';
import Page from '../Page';
import Sidebar from '../Sidebar';
import { Link } from 'gatsby';
import { Card, Col, Row } from 'react-bootstrap'
import { 
  DiBootstrap,
  DiJavascript1,
  DiGitBranch,
  DiJava,
  DiMysql,
  DiPython,
  DiReact,
  DiRedis,
  DiRor, 
  DiRuby,
  DiLinux,
  DiSpark
} from "react-icons/di";
import { GrGraphQl } from "react-icons/Gr";
import { 
  FaDocker, 
  FaNodeJs,
  FaGraduationCap,
  FaIdCard,
  FaTools 
} from "react-icons/Fa";

const About = () => {
  return (
    <Layout>
      <Sidebar />
      <Page>
        <div className="d-flex align-items-center pb-4" >
          <h1 className="my-4">In a galaxy far away...</h1>
          <Link to={"resume"} className="mt-3 ml-auto btn-outline-dark btn btn-lg"> 
            <FaIdCard /><span className="mx-2">Resume</span>
          </Link>
        </div>
        <Card className="mb-4">
          <Card.Header>
            <FaGraduationCap />
            <span className="mx-3">Work</span>
          </Card.Header>
          <Card.Body>
            <Card.Text className="d-flex">
              <span className="mx-3">Software Engineer, Appfolio</span>
              <span className="ml-auto">July, 2019 - Now</span>
            </Card.Text>
            <Card.Text className="d-flex">
              <span className="mx-3">Teaching Assistent (CS300), UW-Madison</span>
              <span className="ml-auto">Jan, 2019 - May, 2019 </span>
            </Card.Text>
            <Card.Text className="d-flex">
              <span className="mx-3">Software Engineer Intern, Markable AI</span>
              <span className="ml-auto">July, 2018 - Sep, 2018 </span>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="mb-4">
          <Card.Header>
            <FaGraduationCap />
            <span className="mx-3">Education</span>
          </Card.Header>
          <Card.Body>
            <Card.Text className="d-flex">
              <span className="mx-3">M.S in Computer Science, UW-Madison</span>
              <span className="ml-auto">2016 - 2019</span>
            </Card.Text>
            <Card.Text className="d-flex">
              <span className="mx-3">M.S in Industrial Engineering, UW-Madison</span>
              <span className="ml-auto">2016 - 2019</span>
            </Card.Text>
            <Card.Text className="d-flex">
              <span className="mx-3">B.S in Bioenvironmental Systems Engineering, NTU</span>
              <span className="ml-auto">2011 - 2015</span>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <FaTools />
            <span className="mx-3">Skills</span>
          </Card.Header>
          <Card.Body>
            <Row className="mx-2 mb-3"><li>Web Developement</li></Row>
            <Row>
              <Col className="mx-2 d-flex flex-column align-middle">
                <DiReact size="4em" /> 
                <span className="mx-2">React</span>
              </Col>
              <Col className="mx-2 d-flex flex-column">
                <DiRor className="mx-2" size="4em" />
                <span className="mx-3">Rails</span>
              </Col>
              <Col className="mx-2 d-flex flex-column">
                <FaNodeJs className="mx-2" size="4em" />
                <span className="mx-2">Node.js</span>
              </Col>
              <Col className="mx-2 d-flex flex-column">
                <DiBootstrap className="mx-2" size="4em" />
                BootStrap
              </Col>
              <Col className="mx-2 d-flex flex-column">
                <GrGraphQl className="mx-2" size="4em" /> 
                GraphQl
              </Col>
            </Row>
            <Row className="mx-2 my-3"><li>Programming Languages</li></Row>
            <Row>
              <Col className="mx-2 d-flex flex-column align-middle">
                <DiPython size="4em" /> 
                <span className="mx-2">Python</span>
              </Col>
              <Col className="mx-2 d-flex flex-column">
                <DiJavascript1 size="4em" />
                Javascript
              </Col>
              <Col className="mx-2 d-flex flex-column">
                <DiRuby className="mx-2" size="4em" />
                <span className="mx-4">Ruby</span>
              </Col>
              <Col className="mx-2 d-flex flex-column">
                <DiJava size="4em" />
                <span className="mx-3">Java</span>
              </Col>
              <Col className="mx-2 d-flex flex-column">
                <DiMysql size="4em" />
                <span className="mx-3">SQL</span>
              </Col>
            </Row>
            <Row className="mx-2 my-3"><li>Tools</li></Row>
            <Row>
              <Col className="mx-2 d-flex flex-column">
                <DiRedis size="4em" />
                <span className="mx-2">Redis</span>
              </Col>
              <Col className="mx-2 d-flex flex-column align-middle">
                <DiSpark size="4em" /> 
                <span className="mx-2">Spark</span>
              </Col>
              <Col className="mx-2 d-flex flex-column">
                <FaDocker size="4em" />
                Docker
              </Col>
              <Col className="mx-2 d-flex flex-column">
                <DiGitBranch className="mx-2" size="4em" />
                <span className="mx-4">Git</span>
              </Col>
              <Col className="mx-2">
                <DiLinux className="mx-2" size="4em" />
                <span className="mx-4">Linux</span>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Page>
    </Layout>
  );
};

export default About;