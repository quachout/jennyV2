import './Header.css';
import './fonts/Migra/Migra-Extrabold.otf';
import './fonts/Malayalam/MalayalamMN.ttc';

// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
function Header() {
  return (
    <div className="header">
      <Container className="" style={{maxWidth:"1100px",paddingTop:"5em"}}>
          <Row>
            <Col className="logo">jho.</Col>

            <Col className="d-flex align-items-center justify-content-end" id="links">
              <Row className="">
                <Col className="experience">experience.</Col>
                <Col className="projects">projects.</Col>
                <Col className="resume">resume.</Col>
              </Row>
            </Col>
          </Row>
      </Container>


    </div>
  );
}

export default Header;
