import './Header.css';
import './fonts/Migra/Migra-Extrabold.otf';
import './fonts/Malayalam/MalayalamMN.ttc';

// import { HashLink as Link } from 'react-router-hash-link';
// import { Link } from 'react-router-dom';

// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import './Experience.js';
function Header() {
  return (
    <div className="header">
      <Container className="" style={{maxWidth:"1100px",paddingTop:"5em"}}>
          <Row>
            <Col className="logo" ><a href='index.html' >jho.</a></Col>

            <Col className="d-flex align-items-center justify-content-end" id="links">
              <Row className="">
                <Col className="experience"><a href='#experience'>experience.</a></Col>
                <Col className="projects"><a href='#projects'>projects.</a></Col>
                <Col className="resume" ><a href='https://drive.google.com/file/d/1NtTyxyTRO8X74f7C7cML7gzpLrqffYiZ/view' target="_blank">resume.</a></Col>
              </Row>
            </Col>
          </Row>
      </Container>


    </div>
  );
}

export default Header;
