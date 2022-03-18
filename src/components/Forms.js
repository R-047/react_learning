import React, { Component } from 'react'

//in react, the comps in which the values are controlled by react is called controlled components
//the input of the form itself as a whole is the state of the component, 
//the state object is the data that has to be submitted
export default class Forms extends Component {
	constructor(){
		super()
		this.state = {
			name: "",
			pwd: ""
		}
	}

	handleOnNameChange = (e) => {
		this.setState({
			name: e.target.value

		})
	}

	handleOnPwdChanged = (e) => {
		this.setState({
			pwd: e.target.value
		})
	}
	render() {
		return (
			<div>
				<input type="text" placeholder="enter input" value={this.state.name} onChange={this.handleOnNameChange}/>
				<br />
				<input type="password" placeholder="enter password" value={this.state.pwd} onChange={this.handleOnPwdChanged}/>
				<br />
				<input type="button" value="submit"/>
			</div>
		)
	}
}
