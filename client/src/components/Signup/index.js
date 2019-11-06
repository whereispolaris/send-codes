import React, { Component } from 'react';
import axios from 'axios';
import './Signup.css';
import { Link } from 'react-router-dom';


class Signup extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',
			message: ''

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
		console.log('sign-up handleSubmit, username: ')
		console.log(this.state.username)
		event.preventDefault()

		axios.post('/user/', {
			username: this.state.username,
			password: this.state.password
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful signup')
					this.setState({ //redirect to login page
						message: 'Successful Signup!'
					})
					setTimeout(() => {
						window.location.href = "/login";
					}, 1000);
				} else {
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
	}


	render() {
		return (
			<div className="container sigup-container">

				<form className="form-horizontal">
					<div className="form-group">
						<h4 className="text-center">Sign up</h4>
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
							placeholder="Password"
							type="password"
							name="password"
							value={this.state.password}
							onChange={this.handleChange}
						/>
					</div>
					<div className="form-group text-center">
						<button
							className="btn btn-dark col-1 col-mr-auto"
							onClick={this.handleSubmit}
							type="submit"
						>Sign up</button>
						{this.state.message}
					</div>
					<div className="form-group text-center">
						Already a member ? <Link to="/login">Log in!</Link>
					</div>
				</form>
			</div>

		)
	}
}

export default Signup