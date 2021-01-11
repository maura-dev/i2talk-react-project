import React from 'react';
import EllipsisMenu from './EllipsisMenu';
//import './././styles/dashboard.css'

export default function Headers({text, id, img, display, leave, view, mute, search, report }){
		return (
			<nav className="title-bar" id={id}>

				<a className="message-back-arrow" onClick="backToMenu('user-chat-menu', 'user-msg-container')">
					<i className="fas fa-long-arrow-alt-left"></i>
				</a>

				<div className={`chat-head-img ${img===null? "hide":"show"}`}>
					<img src={img} alt="Profile" />
				</div>

				<h2>{text}</h2>

				<span>
					<EllipsisMenu 
						display ={display}
						leave={leave} 
						view={view} 
						mute={mute} 
						search={search} 
						report={report}
					/>
				</span>
					
			</nav>
		)
}
