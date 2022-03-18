import React from 'react'


//the event handler is a function and not a function call, therefore if the handler function is called with () then it executes like a function and not a event handler
// in class comp, this scenarion is even worse. If the click handler constantly changes the state of the component, then the component re-renders and then there will be an infinite number of messages in console
//event handler is a function and not a function, do not use ()
function EventHandlingDemo() {
	const clickHandler = () => {
		console.log("hello, from event handler demmo");
	}
	
	return (
		<div>
			<button onClick={clickHandler}>event handling function</button>
			<p>look at the console for output</p>
		</div>
	)
}

export default EventHandlingDemo
