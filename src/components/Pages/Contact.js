import React, { Component } from "react";
import FormSec from '../Section/FormSec'
import {Container,Row,Col,Image} from 'react-bootstrap';
 
class Contact extends Component {
  render() {
    return (
      <>
      <Container className="newsletterwrapper">
        <Row className="justify-content-md-center">
        <h2 className="t-center">Contact Us</h2>
          <Col md={6}>
            
            <p>Cras facilisis urna ornare ex volutpat, et
              convallis erat elementum. Ut aliquam, ipsum vitae
              gravida suscipit, metus dui bibendum est, eget rhoncus nibh
              metus nec massa. Maecenas hendrerit laoreet augue
              nec molestie. Cum sociis natoque penatibus et magnis
              dis.</p>
              <Image src="/images/about6.jpg" fluid rounded></Image>
              </Col>

              <Col md={6}>
            <FormSec />
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
 
export default Contact;