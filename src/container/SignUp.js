import React, { Component } from 'react'
import {Row,Col, Form, Button, Container } from 'react-bootstrap';
export class SignUp extends Component {
    render() {
        return (
            <Row>
                <Container>
                    <h4 style={{marginTop:"12px"}}>Create an Account</h4>
                    <p>Kindly Provide Details to Create your Account</p>
                <Col lg={5}>
                <Form>
                      
                <Form.Group controlId="formBasicEmail">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="email" placeholder="Full Name" />
                            {/* <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text> */}
                        </Form.Group>
                      
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            {/* <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text> */}
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" />
                        </Form.Group>


                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="I have Agree with Terms and Condition" />
                        </Form.Group>
                        <Button variant="success" type="submit">
                            Register Account 
                        </Button>
                    </Form>

                </Col>
                </Container>
            </Row>
        )
    }
}

export default SignUp
