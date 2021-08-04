import React, { Component } from "react";
import {Button,Form} from 'react-bootstrap';
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const FormSec = (props) => {

  const clickHandler = () => {
    console.log('you click submit button');
    alert('submitted')
  }
  

const submitHandler = (event) => {
  event.preventDefault();

};

    return (
        <div>
            <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" />
                
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={6} placeholder="Enter your message" />
              </Form.Group>

              <Button variant="primary" type="button" onClick={clickHandler}>
                Submit
              </Button>
            </Form>
			
			      
			
        </div>
    )
}

export default FormSec;
