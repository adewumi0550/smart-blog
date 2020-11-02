import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container,Row } from 'react-bootstrap'
export class NotFound extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Container style={{marginTop:"40px"}}>
                    <h1>Not Found Contact the Administrator</h1>
                    <Link to="/" className="btn  btn-primary">Back to HomePage</Link>   &nbsp; &nbsp; &nbsp; &nbsp;
                    <Link to="/contact" className="btn  btn-primary">Contact Us</Link>
                    </Container>
                </Row>
            </div>
        )
    }
}

export default NotFound
