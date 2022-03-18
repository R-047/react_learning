import React, { Component } from 'react'

//in class comp, the props are available through this.props which is reserved in class comp
export default class PropsClassCompDemo extends Component {
	render() {
		return (
			<div>
				<h3>props demo using class comp {this.props.name}</h3>
			</div>
		)
	}
}
