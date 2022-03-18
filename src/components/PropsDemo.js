import React from 'react'

//props is a object of all attribute passed by the component
//curly braces is feature of jsx
//reusablity is achieved through props
//to render the child comp passed to PropsDemo use props.children property
const PropsDemo = (props) => {
	return (
		<div>
			<h3>this a test comp for props {props.name}</h3>
			{props.children}
		</div>
	)
}

export default PropsDemo
