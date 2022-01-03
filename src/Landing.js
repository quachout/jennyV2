import './Landing.css';
import './fonts/Migra/Migra-Extrabold.otf';
import './fonts/Malayalam/MalayalamMN.ttc';
import './fonts/PT_Sans/PTSans-Regular.ttf';
import jennyPic from './images/pic-of-me.gif';
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function Landing() {
  return (
    <Container style={{maxWidth:"1100px",paddingTop:"5em"}}>
      <Row>
            <Col><img src={jennyPic} alt="profile pic :)"  className="profilePic" /></Col>

            <Col >
              <Row className="hey">
                <div>hey there!</div>               
              </Row>
              <Row className="imJenny">
                <div>i'm jenny hofilena</div>            
              </Row>
              <Row className="intro">
              <div>I’m a fourth year <strong>mechanical engineering</strong> student with a <strong>design minor</strong> at <strong>uc san diego</strong>. I plan on graduating in june 2022! In the meantime, I’m looking for product design & mechanical engineering jobs as a new grad. Feel free to take a look around my website and connect!</div>  
              </Row>
              <Col className="d-flex align-items-center justify-content-center" id="socials">
                <Row >
                  <Col className='linkedin'>linkedin</Col>
                  <Col className='email'>email</Col>
                </Row>
              </Col>
            </Col>
          </Row>
    </Container>
  );
}

export default Landing;
