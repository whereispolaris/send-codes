import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom';
import './Login.css';

class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            redirectTo: null,
            message: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        // console.log('handleSubmit')

        axios
            .post('/user/login', {
                username: this.state.username,
                password: this.state.password
            })
            .then(response => {
                // console.log('login response: ')
                // console.log(response)
                if (response.status === 200) {
                    window.location.href = "/";
                }
            }).catch(error => {
                this.setState({
                    message: "Login failed!"
                })
                console.log('login error: ')
                console.log(error);
            })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <div className="container login-container">
                    <form>
                        <div className="form-group">
                            <h4 className="text-center">Login</h4>
                            <input className="form-input"
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Username"
                                value={this.state.username}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <input className="form-input"
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                            <br />
                            <div className="form-group text-center">

                                <button
                                    className="btn btn-dark text-center"
                                    onClick={this.handleSubmit}
                                    type="submit">Login
                            </button>
                                {this.state.message}
                                Not a member yet ? <Link className="nav-link" to="/signup">Signup</Link>
                            </div>
                        </div>

                    </form>

                </div>
            )
        }
    }
}

export default LoginForm