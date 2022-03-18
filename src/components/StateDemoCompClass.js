import React, { Component } from 'react'

export default class StateDemoComp extends Component {

	
	constructor() {
		super()//call the base class or the super class constructor
		this.state = {buttonState: "On"}//state is reserved in class comp
	}

	toggle = () => {
		//we are setting a new state or object itself, its not that we are re assigning the value of buttonState
		if(this.state.buttonState === "On"){
			this.setState({
				buttonState: "OFF"
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
				<button onClick={this.toggle}>{this.state.buttonState}</button>
			</div>
		)
	}
}

//props get passed to the comp, they are like function params
//state is managed within the comp, they are like local variables inside a function
//props are immutale, state can be changed
//props in func comp can be used through 'props' and in clas comp through 'this.props'
//state in func comp can be used with the help of useState Hook and this.State in class comp


//to change the state of the comp call setState function inside the comp
//we can lift state up to share the state among different comp instance
//lifting state up means, moving the state to the parent component and inorder to update the state we might have to pass the respective handlers as props
