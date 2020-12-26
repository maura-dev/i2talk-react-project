import React from 'react';
import { Link } from 'react-router-dom';
//import Chatroom from '../chatroomPages/Chatroom'

export default function ChatroomItem({name,chatname,text}){	
	return (
		<Link to={`/dashboard/chatroomscont/chatroom/${chatname}`}>
      <div className="chatrooms-items">
      	<span>
        		<i className={name}></i>
      	</span>
      	<div>
        		<h3 id={chatname}>{chatname}</h3>
       		 <p>{text}</p>
     		 </div>
    	</div>
    </Link>

	)

}