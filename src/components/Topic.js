import React from 'react'
import "./topicStyles.css"

function Topic(props) {
	return (
		<div>
			<h1 className="topic_Color">Topic: {props.topicName}</h1>
		</div>
	)
}



export default Topic