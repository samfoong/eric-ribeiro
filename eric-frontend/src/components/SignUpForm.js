// import React, { Component } from "react";
// import { Form, Button, FormGroup, Input, Label, Container, Row, Col } from "reactstrap";
// export default class SignUpForm extends Component {
//   constructor() {
//     super();
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
    
//     handleSubmit(e) {
      
//       e.preventDefault();
//       const data = new FormData(this.handleSubmit);

//       fetch('http://localhost:8081/signup', {
//         method: 'POST',
//         body: data,
//       });
//     }
    
//     render() {
//       return (

//       <Container>
//         <Row>
//         <Col sm="12" md={{ size: 20 }}>
//         <h1>Register</h1>
//         <Form onSubmit={this.handleSubmit}>
//         <FormGroup>
//         <Label> Name </Label> 
//         <Input type="text" name="name"  />
//         </FormGroup>
        

//         <FormGroup>
//         <Label> Password </Label>
//         <Input type="password" name="password"  />
//         </FormGroup>
       
//         <FormGroup>
//         <Label> Email </Label>
//         <Input type="text" name="email"  />
//         </FormGroup>

//         <FormGroup>
//         <Label> Phone Number </Label>
//         <Input type="text" name="phnumber"  />
//         </FormGroup>
        
        
//         <Button type="submit">Submit </Button>

//         </Form>
//         </Col>
//         </Row>
        
//       </Container>
//       );
//     }
//   }


  
import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Board.css";
import axios from 'axios'
const url = 'https://calendar-booking-api.herokuapp.com'

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      
      email_s: "",
      password_s: "",

      email_f: "",
      
      token: String,
      tokenPresent: Boolean
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

validateFormSignup() {
    return this.state.email_s.length > 0 && this.state.password_s.length > 0;
  }


validateFormForgot() {
    return this.state.email_f.length > 0;
  }

validateLogout() {
    return this.state.token === true
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }


  handleLogout = event => {
      localStorage.removeItem('token');
     window.location.reload()

     const tk = Object.assign({}, this.state, {
        tokenPresent: false

      })
     return this.setState(tk)


   };

  handleSubmit = event => {

     const newValidation = Object.assign({}, this.state, {
        email: this.state.email,
        password: this.state.password

      });
    axios.post(url+'/user/login', newValidation )
    .then(res => {

      const tokenPresent = res.data.token
     
      this.setState({token: tokenPresent, tokenPresent: true})
      window.alert('LOGIN SUCCESSS YEAHHHHHHHHHH')
      window.location.reload()

       return localStorage.setItem('token', res.data.token);
      


      }).catch(Error)  
    
     }

   handleSubmitSignUp = event => {
    event.preventDefault();

     const newValidation = Object.assign({}, this.state, {
        email: this.state.email_s,
        password: this.state.password_s
        
      });

    axios.post(url+'/user/signup', newValidation )
    .then(res => {

     console.log('SIGNUP DATA description:', res)
      window.alert('LOGIN SUCCESSS YEAHHHHHHHHHH')

      })
    .catch(Error)
  }
   handleSubmitForgotPass = event => {
    event.preventDefault();


     const newValidation = Object.assign({}, this.state, {
        email_f: this.state.email_f

      });
              console.log('ForgotPass E:', newValidation)

    axios.post('http://localhost:4000/user/forgot', newValidation )
    .then(res => {
    

      })
    .catch(Error)
  }

  render() {
    return (
      <div className="board">
      
        <div className="SignUp">
      
        <form onSubmit={this.handleSubmitSignUp}>
          <FormGroup controlId="email_s" bsSize="large">
          <label>Signup</label>
          <br />
            <ControlLabel>Email</ControlLabel>
            <br />

            <FormControl
              autoFocus
              type="email"
              value={this.state.email_s}
              onChange={this.handleChange}
            />
            
          </FormGroup>
          <FormGroup controlId="password_s" bssize="large">
            <ControlLabel>Password</ControlLabel>
            <br />
            <FormControl
              value={this.state.password_s}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bssize="large"
            disabled={!this.validateFormSignup}
            type="button" onClick={this.handleSubmitSignUp}
          >
            SignUp
          </Button>
          </form>

       
       
      </div>
      </div>
    );
  }
}