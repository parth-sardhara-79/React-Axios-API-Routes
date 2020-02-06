import React from 'react';
import axios from 'axios';
import { Button, Row, Col, Form, Container } from 'react-bootstrap';
import loading from './loading.gif';
class EditUser extends React.Component {
    state = {
        loading: true,
        editFirstName: "",
        editLastName: "",
        editEmail: "",
        reload: true
    }
    componentDidMount() {
        var { id } = this.props.match.params;
        var { reload } = this.state;

        if (reload) {

            console.log("Called fff");
            axios.get(`https://reqres.in/api/users/${id}`)
                .then(res => {
                    this.setState({
                        editFirstName: res.data.data.first_name,
                        editLastName: res.data.data.last_name,
                        editEmail: res.data.data.email,
                        reload: false,
                        loading: false
                    });
                })
                .catch(err => console.log("Error" + err));
        }
    }
    firstNameHandler = event => {
        this.setState({
            editFirstName: event.target.value
        })
    }
    lastNameHandler = event => {
        this.setState({
            editLastName: event.target.value
        })
    }
    emailHandler = event => {
        this.setState({
            editEmail: event.target.value
        })
    }
    render() {
        let { editFirstName, editLastName, editEmail } = this.state;
        return (<>
            {this.state.loading ? <div className="centerLogin"><img src={loading} /></div> :<Container>
                <Form>
                    <Form.Group>
                        <Row>
                            <Col md={4}>
                                <Form.Control type="text" placeholder="First name" value={editFirstName} onChange={e => this.firstNameHandler(e)} />
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Row>
                            <Col md={4}>
                                <Form.Control type="text" placeholder="Last name" value={editLastName} onChange={e => this.lastNameHandler(e)} />
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Row>
                            <Col md={4}>
                                <Form.Control type="text" placeholder="email" value={editEmail} onChage={e => this.emailHandler(e)} />
                            </Col>
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
            </Container>}
        </>)
    }
}

export default EditUser;