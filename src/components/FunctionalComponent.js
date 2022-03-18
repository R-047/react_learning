import React from 'react'

//commmon js
// function FunctionalComponent() {
// 	return (
// 		<div>
// 			<h2>this is a functional component</h2>
// 		</div>
// 	)
// }

//es6
const FunctionalComponent = () => <h2>this is a functional component</h2>

//default export allows us to import this using any name for the component in parent, if we use name export then we have to use the same name we used to export the comp
export default FunctionalComponent

