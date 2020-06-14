import React from 'react'
import {Row, Col, Card} from 'react-bootstrap' 


export default (props) => {
    return (
        <React.Fragment>
            <Row>
                <Col xs={12} md={3}></Col>
                <Col xs={12} md={6} sm={6}>
                    <h4>About Us</h4>
                </Col>
                <Col xs={12} md={12} sm={12}>
                    <Card>
                        <Card.Header>This is about me</Card.Header>
                        <Card.Body>This is card body</Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}