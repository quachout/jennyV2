import './Experience.css';
import './fonts/Migra/Migra-Extrabold.otf';
import './fonts/Malayalam/MalayalamMN.ttc';
import './fonts/PT_Sans/PTSans-Regular.ttf';
import jennyPic from './images/pic-of-me.gif';
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import equinixPic from './images/equinix.png';
import globalTies from './images/global-ties.png';
import orion from './images/orion.png';
import hcsw from './images/hcsw.png';
import threePillar from './images/3d.png';
import clock from './images/clock.png';
import robot from './images/robot.png';

function Experience() {
  return (
    
    <Container style={{maxWidth:"1100px",paddingTop:"5em"}}>
      <div className="emptySpace"></div>
      <div className="sectionName" id="experience">Experience</div>

      {/* equinix */}
      <Row style={{paddingTop:"5em"}}>
      <Col className="d-md-none d-flex align-items-center justify-content-center" xs={12} sm={12} md={6}><img src={equinixPic} alt="equinix pic" id="equinixPic" /> </Col>

        <Col xs={12} sm={12} md={6}>
          <Row className="jobHeading">
            <Col className="companyName">
              Equinix Inc
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

        <Col className="d-md-block d-none d-flex align-items-center justify-content-center" xs={12} sm={12} md={6}><img src={equinixPic} alt="equinix pic" id="equinixPic" /> </Col>
        
      </Row>

      {/* global ties */}
      <Row style={{paddingTop:"5em"}}>
        
        <Col className="d-flex align-items-center justify-content-center" xs={12} sm={12} md={6}id="globaleTies"><img src={globalTies} alt="globalTies" id=""  /> </Col>
      
        <Col xs={12} sm={12} md={6}>
          <Row className="jobHeading">
            <Col className="companyName">
              Global TIES Program — UCSD 
            </Col>
            <Col className="city">
              La Jolla, CA
            </Col>
          </Row>
          <Row className="jobPosition">
            <Col className="positionTitle">
              Product Marketing Manager	
            </Col>
            <Col className="jobDate">
              Mar 2021 - Present
            </Col>
          </Row>
          <Row className="jodDescription">
            <ul>
              <li><span>Created Instagram and Facebook posts to 300+ followers and designed flyers to increase class enrollment</span></li>
              <li><span>Updated the UCSD website to inform 35,000+ students of our current projects’ progress and advisors</span></li>
              <li><span>Provided Product Design insight to solve real world engineering problems through 8 social impact projects</span> </li>
              <li><span>Reached out to NGOs and paired each with 50+ students to apply design-thinking to their ongoing projects </span></li>
            </ul>
          </Row>
        </Col>
      </Row>

      {/* lockheed martin space */}
      <Row style={{paddingTop:"5em"}}>
        <Col className="d-md-none d-flex align-items-center justify-content-center" xs={12} sm={12} md={6} id="orion"><img src={orion} alt="globalTies" id="orionPic"  /> </Col>

        <Col xs={12} sm={12} md={6}>
          <Row className="jobHeading">
            <Col className="companyName" >
            Lockheed Martin Space
            </Col>
            <Col className="city" >
              Littleton, CO
            </Col>
          </Row>
          <Row className="jobPosition">
            <Col className="positionTitle">
              Propulsion and Ordanance Engineer Intern
            </Col>
            <Col className="jobDate">
              Jun 2020 - Sep 2020
            </Col>
          </Row>
          <Row className="jodDescription">
            <ul>
              <li><span>Analyzed spring-force constraints for NASA’s Orion Artemis-2 side hatch, lanyard pull, and t-handle</span></li>
              <li><span>Created a cross-referencing platform for the Avionics and Pyrotechnics teams’ mechanical drawings to deliver creative, strategic initiatives relating to new products and services</span></li>
            </ul>
          </Row>
        </Col>

        <Col className="d-md-block d-none d-flex align-items-center justify-content-center" xs={12} sm={12} md={6} id="orion"><img src={orion} alt="globalTies" id="orionPic"  /> </Col>
       
      </Row>

      {/* lockheed martin space */}
      <Row style={{paddingTop:"5em"}}>
        <Col className="d-flex align-items-center justify-content-center" xs={12} sm={12} md={6} id=""><img src={hcsw} alt="globalTies" id=""  /> </Col>

        <Col xs={12} sm={12} md={6}>
          <Row className="jobHeading">
            <Col className="companyName">
            Lockheed Martin
            </Col>
            <Col className="city">
              Littleton, CO
            </Col>
          </Row>
          <Row className="jobPosition">
            <Col className="positionTitle">
              Mechanical Engineer Intern
            </Col>
            <Col className="jobDate">
              Jun 2019 - Sep 2019
            </Col>
          </Row>
          <Row className="jodDescription">
            <ul>
              <li><span>Analyzed pay-load effects to calculate composite materials’ properties using strain gauges and accelerometers to measure strain, stress, and deformation using Arduino data acquisition and MATLAB script for reliability testing</span></li>
              <li><span>Designed missile body parts for HCSW using Creo Parametric 4.0 for additive manufacturing and assembling</span></li>
            </ul>
          </Row>
        </Col>
      </Row>

      <div className="sectionName" id="projects" style={{marginTop:"5em"}}>Projects</div>
    
      {/* l3-pillar Holder */}
      <Row style={{paddingTop:"5em"}}>
          <Col className="d-md-none d-flex align-items-center justify-content-center" xs={12} sm={12} md={6} id=""><img src={threePillar} alt="3-d pillar" id=""  /> </Col>
          
          <Col xs={12} sm={12} md={6}>
          <Row className="jobHeading">
            <Col className="companyName">
              3-Pillar Holder
            </Col>
            <Col className="city">
              San Diego, CA
            </Col>
          </Row>
          <Row className="jobPosition">
            <Col className="positionTitle">
              Individual Project
            </Col>
            <Col className="jobDate">
              Dec 2021
            </Col>
          </Row>
          <Row className="jodDescription">
            <ul>
              <li><span>Designed 3-Pillar structure to hold 60kg weight using Solidworks</span></li>
              <li><span>Analyzed Von Mises and Deflection Simulation studies to optimize structure and maximize factor of safety using Finite Element Analysis (FEA)</span></li>
            </ul>
          </Row>
        </Col>
        
        <Col className="d-md-block d-none d-flex align-items-center justify-content-center" xs={12} sm={12} md={6} id=""><img src={threePillar} alt="3-d pillar" id=""  /> </Col>
        
      </Row>     

      {/* alarm clock */}
        <Row style={{paddingTop:"5em"}}>
          <Col className="d-flex align-items-center justify-content-center" xs={12} sm={12} md={6} id=""><img src={clock} alt="3-d pillar" id="clock"  /> </Col>
          
          <Col xs={12} sm={12} md={6}>
            <Row className="jobHeading">
              <Col className="companyName">
                Activity Alarm Clock
              </Col>
              <Col className="city">
                San Diego, CA
              </Col>
            </Row>
            <Row className="jobPosition">
              <Col className="positionTitle">
                Project Manager
              </Col>
              <Col className="jobDate">
                Jan 2020
              </Col>
            </Row>
            <Row className="jodDescription">
              <ul>
                <li><span>Built user touch-keypad that displays pattern of various difficulty levels required to deactivate alarm’s sound </span></li>
                <li><span>Soldered 5x5 LED lights and input connections to Raspberry Pi that chooses certain patterns to help user wake up</span></li>
              </ul>
            </Row>
          </Col>
        </Row>     

      {/* driving robot */}
      <Row style={{paddingTop:"5em"}}>
          <Col className="d-md-none align-items-center justify-content-center" xs={12} sm={12} md={6} ><img src={robot} alt="robot" id="drivingRobotPic"  /> </Col>
          
          <Col xs={12} sm={12} md={6}>
          <Row className="jobHeading">
            <Col className="companyName">
              Driving Robot
            </Col>
            <Col className="city">
              San Diego, CA
            </Col>
          </Row>
          <Row className="jobPosition">
            <Col className="positionTitle">
              Design Lead
            </Col>
            <Col className="jobDate">
              Jun 2019
            </Col>
          </Row>
          <Row className="jodDescription">
            <ul>
              <li><span>3D-CAD’d vehicle gears and pulleys with Autodesk Inventor and AutoCAD to laser-cut acrylic and assemble</span></li>
              <li><span>3D-Printed remaining claws with Solidworks and Makerbot Studio to successfully retrieve items from pockets</span></li>
            </ul>
          </Row>
        </Col>
        
        <Col className="d-md-block d-none align-items-center justify-content-center" xs={12} sm={12} md={6} id=""><img src={robot} alt="robot" id=""  /> </Col>
        
      </Row>     

      <div className="text-center" id="thanks">thanks for stopping by!</div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

   
    </Container>
  );
}

export default Experience;
