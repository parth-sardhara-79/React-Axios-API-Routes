import React from 'react';
import './style.scss';
import { Button, Row, Col, Form, Container } from 'react-bootstrap';
class AddUser extends React.Component {
 
    render() {

        return (
            <Container>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Row>
                            <Col md={4}><Form.Control type="text" placeholder="First name" /></Col>
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Row>
                            <Col md={4}><Form.Control type="text" placeholder="Last name" /></Col>
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Row>
                            <Col md={2}><Button variant="success" onClick={() => {
                                this.props.history.push("/list");
                            }}>Submit</Button></Col>
                            <Col md={2}><Button variant="danger" style={{ float: "right" }}>Cancel</Button></Col>
                        </Row>
                    </Form.Group>
                </Form>
            </Container>);
    }
}
export default AddUser;