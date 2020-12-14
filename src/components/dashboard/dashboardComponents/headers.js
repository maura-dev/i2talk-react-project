import React from 'react'
//import './././styles/dashboard.css'

export default function Headers({text}){
		return (
			<nav className="title-bar">
				<a className="message-back-arrow" onClick="backToMenu('user-chat-menu', 'user-msg-container')">
				<i className="fas fa-long-arrow-alt-left"></i>
				</a>
				<h2>{text}</h2>
				
				<span>
					<i className="fas fa-ellipsis-v"></i>
					<i className="fas fa-cog"></i>
				</span>
					
			</nav>
		)
}
