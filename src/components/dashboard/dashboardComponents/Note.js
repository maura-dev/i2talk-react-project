import React from 'react'
import { Link } from 'react-router-dom';

export default function Note({time, message, key}){
	
	return(
  		<div id="messageContainer" key={key}>
			<sup>{time}</sup><br/>
			<p>{message}</p>
			<div id="buttons">
				<Link to="./idiary/editnote"><span style={{fontSize:"20px", color:"var(--primary-color)"}} id="edit-icon" align="right">
					 <i className="far fa-edit icon"></i>
				</span></Link>
				<span style={{fontSize:"20px", color: "var(--primary-color)"}} id="delete-icon" onClick={"#"}>
					<i className="far fa-trash-alt icon"></i>
				</span>
			</div>
		</div>
	)
	
}