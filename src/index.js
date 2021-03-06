import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header';
import Landing from './Landing';
import Experience from './Experience';
import Popup from './Popup';

ReactDOM.render(
  // <React.StrictMode>
  //   <Header />
  //   <App />
  // </React.StrictMode>,
  <React.StrictMode>
    {/* <Popup /> */}
    <Header />
    <Landing />
    <Experience />
 
    <App />

  </React.StrictMode>,
  
    // <Header />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
