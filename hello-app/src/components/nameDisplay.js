import React from 'react'

const DispalyName = props =>{
	console.log(props);
	return (
		<div>
		<h1> Welcome {props.name} and {props.lastName}</h1>
		{props.children}
		</div>
		)
}

export default DispalyName