import React, { Component } from 'react';
import {Container, Row, Badge, Col, Button, FormGroup, CardImg, CardBody, Card, Form, FormText, Label, Input} from 'reactstrap';

class SignUpForm extends React.Component {

    render () {
        return (
            <div>
                <h1>SignUp Page</h1>

            <Form>
                <FormGroup row>
                <Col xs="2"></Col>
                <Label for="exampleName" sm={2}>Name</Label>
                <Col sm={6}>
                <Input type="name" name="name" id="exampleName" placeholder="Enter Name Here" />
                </Col>
                <Col xs="2"></Col>
              </FormGroup>

              <FormGroup row>
              <Col xs="2"></Col>
                <Label for="exampleEmail" sm={2}>Email</Label>
                <Col sm={6}>
                <Input type="email" name="email" id="exampleEmail" placeholder="Enter Email Here" />
                </Col>
                <Col xs="2"></Col>
              </FormGroup>

              <FormGroup row>
              <Col xs="2"></Col>
                <Label for="examplePassword" sm={2}>Password</Label>
                <Col sm={6}>
                <Input type="password" name="password" id="examplePassword" placeholder="Enter Password" />
                </Col>
                <Col xs="2"></Col>
              </FormGroup>

              <FormGroup row>
              <Col xs="2"></Col>
                <Label for="examplePhoneNumber" sm={2}>Phone Number</Label>
                <Col sm={6}>
                <Input type="phonenumber" name="phoneNumber" id="examplePhonenumber" placeholder="Enter Phone Number" />
                </Col>
                <Col xs="2"></Col>
              </FormGroup>

              <FormGroup check row>
                <Col sm={{ size: 10, offset: 5 }}>
                <Button>Submit</Button>
                </Col>
            </FormGroup>

            </Form>
            </div>

        )
    }
}

export default SignUpForm;


//     constructor(props) {
//         super(props);
//         this.onSubmit = this.onSubmit.bind(this);
//       }

//       change(e){
//           this.setState({
//               [e.target.name]: e.target.value
//           })
//       }

    //   onSubmit(){
    //     this.setState({
    //         name: this.props.name,
    //         email: this.props.email,
    //         message: this.props.message,
            
    //     })
    //     // e.preventDefault();
    //     this.props.onSubmit(this.state);
    //   }
      
    // render(){

        

    //     const style = {
    //         background: "linear-gradient(rgba(120, 120, 120, 120) 1%, rgb(147, 147, 147) 0%, rgba(0, 0, 0, 0) 100%)",
    //     }

    //     let day = this.props.day;
    //     let month = this.props.month;
    //     let year = this.props.year;
    //     let duration = this.props.duration
    //     let timeslots = this.props.timeslots;

    //     return (
    //     <div>
        
    //     {/* forcing bootstrap in it... */}
    //       <div className="container-fluid">

    //                 <Col style={style}>
                        
    //                     <Form>
    //                         <Label for="day">Day</Label>
    //                         <Input onChange={e => this.change(e)} defaultValue={day} name="day"/>
    //                         <Label for="month">Month</Label>
    //                         <Input onChange={e => this.change(e)} defaultValue={month} name="month"/>
    //                         <Label for="year">Year</Label>
    //                         <Input onChange={e => this.change(e)} defaultValue={year} name="year"/>
    //                         <Label for="duration">Duration</Label>
    //                         <Input onChange={e => this.change(e)} defaultValue={duration} name="duration"/>
    //                         <Label for="timeslots">Timeslots</Label>
    //                         <Input onChange={e => this.change(e)} type="select" name="timeslots">
    //                                 {timeslots.map(x => <option value={x}>{x}</option>)}
    //                         </Input>
    //                         <Button color="info" onClick={e => this.onSubmit()}>Submit!</Button>
    //                     </Form>
    //                 </Col>

    //         </div>

    //     </div>

//         )
        
//     }
   
// }

