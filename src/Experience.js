import './Experience.css';
import './fonts/Migra/Migra-Extrabold.otf';
import './fonts/Malayalam/MalayalamMN.ttc';
import './fonts/PT_Sans/PTSans-Regular.ttf';
import jennyPic from './images/pic-of-me.gif';
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import equinixPic from './images/equinix.png';
function Experience() {
  return (
    
    <Container style={{maxWidth:"1100px",paddingTop:"5em"}}>
      <div className="emptySpace"></div>
      <div className="sectionName">Experience</div>

      <Row style={{paddingTop:"5em"}}>
        <Col>
          <Row className="jobHeading">
            <Col className="companyName">
              Equinix
            </Col>
            <Col className="city">
              Redwood City, CA
            </Col>
          </Row>
          <Row className="jobPosition">
            <Col className="positionTitle">
              Product Design Engineer Intern
            </Col>
            <Col className="jobDate">
              Jun 2021 - Sep 2021
            </Col>
          </Row>
          <Row className="jodDescription">
            <ul>
              <li><span>Designed web application for electrical and mechanical engineers to check status of over 1000 IBX cabinets</span></li>
              <li><span>Collaborated with UI/UX Designers to design mock-ups and wireframes based on user-flow and empathy maps</span></li>
              <li><span>Utilized SCRUM method to update team on my progress throughout the human-centered design thinking process</span> </li>
              <li><span>Conducted user testing with 3 international regions by facilitating discussion and consolidating feedback </span></li>
            </ul>
          </Row>
        </Col>

        <Col ><img src={equinixPic} alt="equinix pic" className='justify-content-md-center' /> </Col>
      </Row>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </Container>
  );
}

export default Experience;
