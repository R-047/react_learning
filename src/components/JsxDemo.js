import React from 'react'

function JsxDemo() {
	return (
		React.createElement('div', null, React.createElement('h1', {className: "h1tag"}, "this is a component rendered without using jsx"))
	)
}

export default JsxDemo
