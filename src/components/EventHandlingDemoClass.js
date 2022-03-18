import React, { Component } from 'react'

export default class EventHandlingDemoClass extends Component {
	clickHandler(){
		console.log("clcik event handled in class comp");
	}
	render() {
		return (
			<div>
				<button onClick={this.clickHandler}>event handling class comp</button>
				<p>look at the console for output</p>
			</div>
		)
	}
}
