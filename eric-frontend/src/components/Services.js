import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class Services extends React.Component {
  handleClick = () => {
    this.props.services(this.props.booking);
  }

  render () {
    return (
      <Router>
    <Row>
      <Col sm="4">
        <Card body>
        <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>Duration</CardText>
          <CardText>Price</CardText>
          <button href="/booking" onClick={this.handleClick}> Book It </button>

        </Card>
      </Col>
    </Row>
    </Router>
    );
  };
};

export default Services;