import React from 'react' 
import '../../App.css'


export default function Card({source, text}) {

	return(
		<div className="user-box">
			<img 
			src={source} 
			alt="" 
			className="user-img"/>
			<h4>{text}</h4>
		</div>
		)
}

//this component refers to the card used in the user journey part of the index/home page