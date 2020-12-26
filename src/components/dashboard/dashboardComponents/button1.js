import React from 'react';

export default function Button1({onClick, text}){

	const button1Style={
			display:"inline-block",
			marginLeft:"10px",
			marginRight:"10px",
			backgroundColor:"var(--primary-color)",
			color:"white",
			padding:"10px",
			border:"2px solid var(--primary-color)",
			borderRadius:"10px"

	}

	return (
		<button style={button1Style} 
		onClick={onClick} 
		className="button-one"><i className="fas fa-plus-circle"></i>&nbsp;{text}</button>
	)
	
}