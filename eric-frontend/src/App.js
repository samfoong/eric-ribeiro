import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom' 
import './App.css';
import HomePage from './pages/HomePage';
import BookCal from './pages/BookCal';
import ServicesPage from './pages/ServicesPage';
import SignUpForm from './components/SignUpForm';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/services' component={ServicesPage} />
          <Route exact path='/booking' component= {BookCal} />
          <Route exact path='/SignUpForm' component= {SignUpForm} />

        </div>
      </Router>
    
    );
  }
}


export default App;

