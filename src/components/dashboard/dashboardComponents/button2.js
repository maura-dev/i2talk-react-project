import React from 'react';

export default function Button2({onClick,text}){
	const button2Style={
			display:"inline-block",
			marginLeft:"10px",
			marginRight:"10px",
			backgroundColor:"var(--secondary-color)",
			color:"white",
			padding:"10px",
			border:"2px solid var(--secondary-color)",
			borderRadius:"10px"
	}

	return (
		<button style={button2Style}
		onClick={onClick} 
		className="button-two">{text}</button>

		)
	
}