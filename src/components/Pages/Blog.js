import React, { Component } from "react";
import {Container,Row, Col,Button} from 'react-bootstrap';
 
class Blog extends Component {

  render() { 
    return (
      <>
      <Container>
        
        <Row>
          <Col className="blog-Card">
            <h1>Post One</h1>
            <p>Cras facilisis urna ornare ex volutpat, et
            convallis erat elementum. Ut aliquam, ipsum vitae
            gravida suscipit, metus dui bibendum est Cras facilisis urna ornare ex volutpat, et
            convallis erat elementum. Ut aliquam, ipsum vitae
            gravida suscipit, metus dui bibendum est</p>
            <Button>View</Button>
            </Col>
          <Col className="blog-Card">
            <h1>Post Two</h1>
            <p>Cras facilisis urna ornare ex volutpat, et
            convallis erat elementum. Ut aliquam, ipsum vitae
            gravida suscipit, metus dui bibendum est Cras facilisis urna ornare ex volutpat, et
            convallis erat elementum. Ut aliquam, ipsum vitae
            gravida suscipit, metus dui bibendum est</p>
            <Button>View</Button>
          </Col>
        </Row>
        <Row>
          <Col className="blog-Card">
            <h1>Post Three</h1>
            <p>Cras facilisis urna ornare ex volutpat, et
            convallis erat elementum. Ut aliquam, ipsum vitae
            gravida suscipit, metus dui bibendum est Cras facilisis urna ornare ex volutpat, et
            convallis erat elementum. Ut aliquam, ipsum vitae
            gravida suscipit, metus dui bibendum est</p>
            <Button>View</Button>
            </Col>
          <Col className="blog-Card">
            <h1>Post Four</h1>
            <p>Cras facilisis urna ornare ex volutpat, et
            convallis erat elementum. Ut aliquam, ipsum vitae
            gravida suscipit, metus dui bibendum est Cras facilisis urna ornare ex volutpat, et
            convallis erat elementum. Ut aliquam, ipsum vitae
            gravida suscipit, metus dui bibendum est</p>
            <Button>View</Button>
          </Col>
        </Row>
        
      </Container>
      <hr/>
      <Container className="top-der btm-der">
                <p className="t-center">© 2021 All Rights Reserved. NorWeb</p>
            </Container>
      </>
    );
  }
}
 
export default Blog;