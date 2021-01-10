import React from 'react';
import TextInput from '../dashboardComponents/textArea';
import useChatroom from "./useChatroom";

const Chatroom = (props) => {
	// state={
	// 	viewMenu: false
	// }

	// componentDidMount(){
	// 	document.getElementById("chatroom").style.display="none"
	// }

	// onChange=(e)=>{
  //   var autoExpand = function (field) {

  //   // Reset field height
  //   field.style.height = 'inherit';

  //   // Calculate the height
  //   var height = field.scrollHeight + 5
                 
  //   field.style.height = height + 'px';

  //   };

  //   document.addEventListener('input', function (event) {
  //     if (event.target.tagName.toLowerCase() !== 'textarea') return;
  //     autoExpand(event.target);
  //   }, false);
  // }

	const { chatroomId } = props.match.params;
	const { messages, sendMessage } = useChatroom(chatroomId); // Creates a websocket and manages messaging
	const [newMessage, setNewMessage] = React.useState(""); // Message to be sent
	// const { viewMenu }= this.state	

	const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    sendMessage(newMessage);
    setNewMessage("");
	};
	
	return (
		<div className="chat-message" id="user-direct-chat">
			<div className="chat-header">

				<a className="message-back-arrow" onClick="showSideBar('user-chat-menu', 'user-direct-chat')"><i className="fas fa-long-arrow-alt-left"></i></a>
				
				<div className="chat-head-img">
					<img src="/users/deven.jpg" />
				</div>

				<div className="chat-head-username">
					<span id="Chatsheader"><h3>{chatroomId}</h3></span>
				</div>

				<div className="chat-head-menu">
					<a>
					<i className="fas fa-ellipsis-v">
					</i></a>
				</div>

				<ul className="" id="chat-menu-list">
					<li onClick={()=>{
						this.props.history.goBack();
						document.getElementById("chatroom").style.display="flex"
					}}>Leave Room</li>
					<li>View Members</li>
					<li>Mute notifications</li>
					<li>Search</li>
					<li>Report</li>
				</ul>

			</div>

			<div className="chat-body scrollbar" id="style-2">
				<div className="messages-container">
					<ol className="messages-list">
						{messages.map((message, i) => (
							<li
								key={i}
								className={`message-item ${
									message.ownedByCurrentUser ? "my-message" : "received-message"
								}`}
							>
								{message.body}
							</li>
						))}
					</ol>
				</div>
				{/* <div id="pmessages"></div>

				<div id="messs"></div> */}

			</div>

			<div className="chat-form">

				<form id="pmessageForm">
					<TextInput value={newMessage} id="pmsg-input" placeholder="Type message here ..." rows="1" onChange={handleNewMessageChange} className="textScrollbar"/>
					
					{/*<textarea id="pmsg-input" autoCapitalize= "sentences" autoComplete="on" placeholder="Type message here ..." rows="1" required></textarea>*/}
					
					<button onChlick={handleSendMessage} className="pmsg-btn"><i className="far fa-paper-plane"></i></button>
				</form>

			</div>
		</div>
	)
}

export default Chatroom;