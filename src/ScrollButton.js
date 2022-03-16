import React, {useState, useEffect} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import upArrow from './images/chevrons-top.png';
import './App.css';
import { Container } from 'react-bootstrap';


const ScrollTopArrow = () =>{

  const [showScroll, setShowScroll] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll', checkScrollTop)
    return function cleanup() {
      window.removeEventListener('scroll', checkScrollTop)
    }
  })

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 300){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 300){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  // <button><img src="./images/chevrons-top.png" alt="up arrow" className="scrollTop" onClick={scrollTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}}/></button>
  return (
    // <img src="./images/chevrons-top.png" alt="up arrow" className="scrollTop" onClick={scrollTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}}/>
    <Container style={{maxWidth:"1100px"}}>
      <img src={upArrow} alt="up arrow" className="scrollTop" onClick={scrollTop} style={{right: '5em', height: 40, display: showScroll ? 'flex' : 'none'}}/>
    </Container>
  );
}

export default ScrollTopArrow;


