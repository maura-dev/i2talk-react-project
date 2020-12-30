import React from 'react';

export default function Button1({onClick, text}){

	return (
		<button
		onClick={onClick} 
		className="button-one"><i className="fas fa-plus-circle"></i>&nbsp;{text}</button>
	)
	
}