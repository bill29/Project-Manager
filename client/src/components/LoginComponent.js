import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import Axios from "axios";
import Header from "../components/header"


class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.validateForm = this.validateForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            username: '',
            password: ''
        };

    }
    componentWillMount (){
        Axios.get("http://localhost:5000/api/logged_in")
        .then(response => {
          this.setState({ loggedInStatus: response.data.status })
          this.setState({ user: response.data.user })
        })
        .catch(err => {
          throw err;
        });
        if (this.state.loggedInStatus === "LOGGED_IN"){
            this.props.history.push("/");
        }
    }

    setPassword(event) {
        this.setState({ password: event.target.value })
    }

    setUsername(event) {
        this.setState({ username: event.target.value })
    }

    validateForm() {
        return this.state.password.length > 0 && this.state.username.length > 0;
    }

    handleSubmit(event) {
        event.preventDefault();
        const user = {
            password: this.state.password,
            username: this.state.username,
        }
        Axios.post('http://localhost:5000/api/login', user)
            .then(response => {
                console.log(response);
                if (response.data.status === "success") {
                    console.log(response.data)
                    this.props.handleSuccessfulLogin(response.data);
                    this.props.history.push("/");
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        console.log('I was triggered during render')
        return (
            <div>
            <Header state={this.props.state}></Header>
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="username" bsSize="large">
                        <ControlLabel>Username</ControlLabel>
                        <FormControl
                            autoFocus
                            type="text"
                            value={this.state.username}
                            onChange={e => this.setUsername(e)}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={e => this.setPassword(e)}
                            type="password"
                        />
                    </FormGroup>
                    <Button block bsSize="large" disabled={!this.validateForm()} type="submit">
                        Login
                    </Button>
                </form>
            </div>
            </div>
        );
    }
}

export default LoginComponent;

