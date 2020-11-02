import React, { Component } from 'react'
import { Container, Row,Col,Card } from 'react-bootstrap'
import Post from '../components/Post'
// import {  Row, Col } from 'react-bootstrap';
export class Home extends Component {
    render() {
        return (
            <Row>
               
                <Container>
                <h3>Simple Post</h3>
                    <Row>
                        <Col lg={8}>

                        <Post />


                        </Col>
                        <Col lg={4}>2 of 2</Col>
                    </Row>
                    
                </Container>
            </Row>
        )
    }
}

export default Home
