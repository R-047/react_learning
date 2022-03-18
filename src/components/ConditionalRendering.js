import React from 'react'

// function ConditionalRendering() {

// 	if(false){
// 		return (
// 			<div>
// 				<h1>something for conditional rendering if true</h1>
// 			</div>
// 		)
// 	}else{
// 		return (
// 			<div>
// 				<h1>something for conditional rendering if false</h1>
// 			</div>
// 		)
// 	}
	
// }

// export default ConditionalRendering


//the 2nd approach
// function ConditionalRendering() {

// 	let returnEle
// 	if(false){
// 		returnEle =  (
// 			<div>
// 				<h1>something for conditional rendering if true</h1>
// 			</div>
// 		)
// 	}else{
// 		returnEle = (
// 			<div>
// 				<h1>something for conditional rendering if false</h1>
// 			</div>
// 		)
// 	}
// 	return returnEle
	
// }

// export default ConditionalRendering



//the ternary operator way this way we could include if else condition within jsx
function ConditionalRendering() {

	return(
		true ? <h1>for conditional rendering if true</h1> : <h1>for conditional rendering if false</h1>
	)
	
}

export default ConditionalRendering


//this can also be done using short circuit operator
