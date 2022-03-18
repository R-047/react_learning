import React, { Component } from 'react'

export default class TestComp extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 a: "hello",
			 b: "world"
		}
	}

	setA = event => {
		this.setState({
			a: "hello set"
		})
		
	}

	setB = event => {
		this.setState({
			b: "world"
		})
	}

	logit = event => {
		console.log(this.state)
	}
	
	render() {
		console.log("rendered")
		return (
			<div>
				<button onClick={this.setA}>set a</button>
				<button onClick={this.setB}>set b</button>
				<button onClick={this.logit}>log states</button>
			</div>
		)
	}
}
