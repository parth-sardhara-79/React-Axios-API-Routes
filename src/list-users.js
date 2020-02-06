import React from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class ListUsers extends React.Component {
    state = {
        reload: true,
        user: [],
        page: 1
    }
    componentDidMount() {
        if (this.state.reload) {
            console.log("vc");
            axios.get(`https://reqres.in/api/users?page=${this.state.page}`)
                .then(res => {
                    this.setState({
                        user: res.data.data,
                        reload: false
                    });
                })
                .catch(err => console.log("Error" + err));
        }
    }
    handlePagination = event => {
        this.setState({
            page: event.target.id,
            reload: !this.state.reload
        })
    }

    componentDidUpdate() {
        if (this.state.reload) {
            console.log("svsv");
            axios.get(`https://reqres.in/api/users?page=${this.state.page}`)
                .then(res => {
                    this.setState({
                        user: res.data.data,
                        reload: false
                    });
                })
                .catch(err => console.log("Error" + err));
        }
    }
    render() {
        var { user } = this.state;
        return (<div>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Avatar</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {
                    user.map(u => {
                        return (
                            <tr>
                                <td>{u.first_name}</td>
                                <td>{u.last_name}</td>
                                <td>{u.email}</td>
                                <td><img src={u.avatar} /></td>
                                <td><Button id={u.id} variant="success" onClick={() =>
                                    this.props.history.push(`/list/${u.id}`)
                                }>Edit</Button> <Button id={u.id} variant="danger">Delete</Button></td>
                            </tr>
                        )
                    })
                }
            </Table>
 <br />
            <div>
                <Button className="pageBtn" id="1" onClick={e => this.handlePagination(e)} variant="dark">1</Button>
                <Button className="pageBtn" id="2" onClick={e => this.handlePagination(e)} variant="dark">2</Button>
                <Button className="pageBtn" id="3" onClick={e => this.handlePagination(e)} variant="dark">3</Button>
                <Button className="pageBtn" id="4" onClick={e => this.handlePagination(e)} variant="dark">4</Button>
            </div>
        </div>);
    }
}
export default ListUsers;