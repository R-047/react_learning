// life cycle methods for class comp
// methods are classified into 4 phases - Mounting, Updating, Unmounting, Error Handling
//remember always a comp is re rendered whenever there is a change in its state or props

import { render } from "@testing-library/react";
import React, { Component } from "react";

//during the mounting phase there 4 methods in action - constructor, static getDerivedStateFromProps(), render and componentDidMount()
//during the updating phase there are 5 methods in action - static getDerivedStateFromProps(), shouldComponentUpdate(), render, getSnapshotBeforeUpdate() and componentDidUpdate()
//during unmounting only 1 method - componentWillUnmount()
//during error 2 methods are in action - getDerivedStateFromError() and componentDidCatch()


//Mounting Lifecycle methods
//constructor - is used for event binding and initialsing state, not used for any effects like http request
//static getDerivedStateFromProps - is rarely used, can be used when the state is dependent on props, canot call this since static 
//render - do not change state or innteract with DOM here, just read props and state and return jsx, here the child comp lifecycle are executed
//componentDidMount() - invoked soon after comp is mounted to DOM, mostly used
//the order of execution when all the methods are used is the above discussed order
//when we have a child comp with all these methods, then after the render of parent comp then the child comps all methods are executed only then the parents componentDidMount() function is executed
export default class LifeCycleofCompDemo extends Component{
	constructor(props) {
		super(props)
	
		this.state = {
			 data: "hello"
		}
	}

	static getDerivedStateFromProps(props, state){
		console.log("getDerivedStateFromProps")
	}
	

	render(){
		console.log("render")
		return (
			<div>

			</div>
		)
	}

	
}


// Update lifescycle methods
// comps are re - rendered,  when there is a change in props or state
//there are 5 methods 3 are rarely used
//1) static getDerivedStateFromProps(props, state) - this method is called every time a comp is re-rendered, can be used to set state, bit no side effects
//2) shouldComponentUpdate(nextProps, nextState) - this method can be used to dictate if the comp should be re-rendered or not, usually all comps
//	re-renders whenver there is a change in state or props, therefore this method can prevent re-rendering based on uour condition by returning false, this can be achieved through comparing the existing state with next, good for performance optimization
//3)render() - dont change state here
//4)getSnapShotBeforeUpdate(prevProps, prevState) - this method is called just right before the changes in virtual dom are applied to DOM, rarely used, can be used to capture som info from the DOM, like users scroll postion
//	this method will return null or a value 
//5)componentDidUpdate(prevProps, prevState, snapshot) - called after the render of is finished in re-render cycles, the snap shot is returned by the 4th method, cause side effects after comparing the prev with curr state and props bcause of performance


//comp destroyed or unmounted lifecycle method
//componentWillUnmount()


//during error 2 methods are in action - getDerivedStateFromError() and componentDidCatch()
// 1) getDerivedStateFromError(error) - this method return null or obj, this obj can be used to further in the render method to conditionally render a comp
// 2) componentDidCatch(error, info) -get the error and info about the error  
