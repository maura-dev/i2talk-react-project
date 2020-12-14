import React from 'react';

export default function Button2({onClick,text}){

	return (
		<button onClick={onClick} className="button-two">{text}</button>

		)
	
}