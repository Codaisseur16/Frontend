import React, {PureComponent} from 'react'

export default class SignupForm extends PureComponent {
	state = {}

	handleSubmit = (e) => {
		e.preventDefault()
		// console.log(this.state)
		this.props.onSubmit(this.state)
	}

	handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value,
			teacher: event.target.checked
    })
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
			<div>
				<label htmlFor="firstName">First Name</label>
				<input type="text" name="firstName" id="firstName" value={
					this.state.firstName || ''
				} onChange={ this.handleChange } />
			</div>

			<div>
				<label htmlFor="lastName">Last Name</label>
				<input type="text" name="lastName" id="lastName" value={
					this.state.lastName || ''
				} onChange={ this.handleChange } />
			</div>

				<div>
					<label htmlFor="email">Email</label>
					<input type="email" name="email" id="email" value={
						this.state.email || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="password">Password</label>
					<input type="password" name="password" id="password" value={
						this.state.password || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="confirmPassword">Confirm password</label>
					<input type="password" name="confirmPassword" id="confirmPassword" value={
						this.state.confirmPassword || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="teacher">Are you a teacher?</label>
					<input type="checkbox" name="teacher" id="teacher" value={
						this.state.teacher || ''
					} onChange={ this.handleChange } />
				</div>

				{
					this.state.teacher &&
					this.state.teacher === true ?
					<div>
						<p>enter code</p>
						<input type='text'/>
					</div> : <p></p>
				}

				{
					this.state.password &&
					this.state.confirmPassword &&
					this.state.password !== this.state.confirmPassword &&
					<p style={{color:'red'}}>The passwords do not match!</p>
				}

				<button type="submit">Sign up</button>
			</form>
		)
	}
}