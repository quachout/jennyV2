import './Header.css';
import './fonts/Migra/Migra-Extrabold.otf';
import './fonts/Malayalam/MalayalamMN.ttc';

// import hamburgerMenuPage from './Hamburger';
// import { HashLink as Link } from 'react-router-hash-link';
// import { Link } from 'react-router-dom';

import * as ReactBootStrap from 'react-bootstrap';

// import Container from 'react-bootstrap/Container';
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import './Experience.js';
function Header() {
  return (
    <div className="header">
      <Container className="d-sm-block d-none" style={{maxWidth:"1100px",paddingTop:"5em"}}>
          <Row>
            <Col className="logo" xs={1}><a href='index.html' >jho.</a></Col>
            <Col className=" d-flex align-items-center justify-content-end" xs={11} id="links">
              <Row className="">
                <Col className="experience"><a href='#experience'>experience.</a></Col>
                <Col className="projects"><a href='#projects'>projects.</a></Col>
                <Col className="resume" ><a href='https://drive.google.com/file/d/1NtTyxyTRO8X74f7C7cML7gzpLrqffYiZ/view' target="_blank">resume.</a></Col>
              </Row>
            </Col>
          </Row>
      </Container>

      <ReactBootStrap.Navbar className='d-sm-none hamburger-container'  expand="lg">
        <ReactBootStrap.Container>
          <ReactBootStrap.Navbar.Brand className='logo-hamburger' href="index.html">jho.</ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Navbar.Toggle className='hamburger-button' aria-controls="basic-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
            <ReactBootStrap.Nav className="text-center links-hamburger">
              <ReactBootStrap.Nav.Link href="#experience">experience.</ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link href="#projects">projects.</ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link href="https://drive.google.com/file/d/1NtTyxyTRO8X74f7C7cML7gzpLrqffYiZ/view" target="_blank">resume.</ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Container>
      </ReactBootStrap.Navbar>

    </div>
  );
}

export default Header;

