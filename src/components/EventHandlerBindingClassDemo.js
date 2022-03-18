import React, { Component } from 'react'

//we bind the eventhandler because of the working of this keyword not because of react



//method 1:
//using bind() (performance implications for large appliactions)

// export default class EventHandlerBindingClassDemo extends Component {
// 	constructor(props) {
// 		super(props)
	
// 		this.state = {
// 			buttonState: "On" 
// 		}
// 	}

// 	clickHandler = () => {
// 		if(this.state.buttonState === "On"){
// 			this.setState({
// 				buttonState: "Off"
// 			})
// 		}else{
// 			this.setState({
// 				buttonState: "On"
// 			})
// 		}
		
// 	}
	
// 	render() {
// 		return (
// 			<div>
// 				<button onClick={this.clickHandler.bind(this)}> STATE: {this.state.buttonState} </button>
// 			</div>
// 		)
// 	}
// }




//method 2:
//calling the handler function within arrow function (some performance implications)
// export default class EventHandlerBindingClassDemo extends Component {
// 	constructor(props) {
// 		super(props)
	
// 		this.state = {
// 			buttonState: "On" 
// 		}
// 	}

// 	clickHandler = () => {
// 		if(this.state.buttonState === "On"){
// 			this.setState({
// 				buttonState: "Off"
// 			})
// 		}else{
// 			this.setState({
// 				buttonState: "On"
// 			})
// 		}
		
// 	}
	
// 	render() {
// 		return (
// 			<div>
// 				<button onClick={() => this.clickHandler()}> STATE: {this.state.buttonState} </button>
// 			</div>
// 		)
// 	}
// }


//method 3:
// binding the event handler within the constructor as suppose binding it in the render method
//this better than render method

// export default class EventHandlerBindingClassDemo extends Component {
// 	constructor(props) {
// 		super(props)
	
// 		this.state = {
// 			buttonState: "On" 
// 		}
// 		this.clickHandler = this.clickHandler.bind(this)
// 	}

// 	clickHandler = () => {
// 		if(this.state.buttonState === "On"){
// 			this.setState({
// 				buttonState: "Off"
// 			})
// 		}else{
// 			this.setState({
// 				buttonState: "On"
// 			})
// 		}
		
// 	}
	
// 	render() {
// 		return (
// 			<div>
// 				<button onClick={() => this.clickHandler()}> STATE: {this.state.buttonState} </button>
// 			</div>
// 		)
// 	}
// }



//method 4
//the final method is to use an arrow function as a class property
//just using an arrow function solves the problem
export default class EventHandlerBindingClassDemo extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			buttonState: "On" 
		}
	}

	clickHandler = () => {
		if(this.state.buttonState === "On"){
			this.setState({
				buttonState: "Off"
			})
		}else{
			this.setState({
				buttonState: "On"
			})
		}
		
	}
	
	render() {
		return (
			<div>
				<button onClick={() => this.clickHandler()}> STATE: {this.state.buttonState} </button>
			</div>
		)
	}
}
