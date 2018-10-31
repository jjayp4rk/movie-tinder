import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";
import "./Footer.scss";

class FooterPage extends React.Component {
  render() {
    return (
      <Footer className="font-small">
        <Container fluid className="text-center text-md-left">
          <Row>
            <Col md="6" />
            <Col md="6" />
          </Row>
        </Container>
        <div className="footer-copyright text-center py-3">
          <Container fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https://jjayp4rk.github.io/"> Jayp4rkworld.com </a>
          </Container>
        </div>
      </Footer>
    );
  }
}

export default FooterPage;
