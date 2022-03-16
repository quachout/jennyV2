import React from "react";
import Card from 'react-bootstrap/Card'
import './Popup.css';
const Popup = props => {
  return (

    <Card  style={{ width: '30rem' ,backgroundColor:'#74959A',  position: 'fixed', left: '50%', top: '50%',
    transform: 'translate(-50%, -50%)',maxWidth:"1100px"}} className="overlay ">
      {/* <Card.Header>Header</Card.Header> */}
      <Card.Body>
        {/* <Card.Title>Primary Card Title</Card.Title> */}
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk
          of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

  );
};
 
export default Popup;