import React, { Component } from 'react'

//inorder to pass arg to the parent comp function
// export default class MethodAsProps extends Component {
// 	constructor(props) {
// 		super(props)
// 	}
	
// 	render() {
// 		return (
// 			<div>
// 				<button onClick={this.props.passedFunction}>method as props</button>	
// 			</div>
// 		)
// 	}
// }


function MethodAsProps(props) {
	return (
		<div>
			<button onClick={() => props.passedFunction(3, 5)}>method as props</button>
		</div>
	)
}

export default MethodAsProps

