import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom' 
import NavComponent from '../components/NavComponent';
import FooterComponent from '../components/FooterComponent';
import Services from '../components/Services';
//import './App.css';

class ServicesPage extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavComponent />
          <Services />
          <FooterComponent />
        </div>
      </Router>
    
    );
  }
}


export default ServicesPage;
