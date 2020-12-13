import React from 'react';

export default function ChatroomItem({name,chatname,text}){
	
	return (
		<div className="chatrooms-items">
        	<span>
          		<i className={name}></i>
        	</span>
        	<div>
          		<h3 onClick="enterChatroom(this)" id={chatname} data-chatroom-name={chatname}>{chatname}</h3>
         		 <p>{text}</p>
       		 </div>
      	</div>

	)

}