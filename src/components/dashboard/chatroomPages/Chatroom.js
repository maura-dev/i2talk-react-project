import React, { Component } from 'react';
import Headers from '../dashboardComponents/headers';
import TextInput from '../dashboardComponents/textArea';
import axios from 'axios';
import qs from 'qs';
// import io from 'socket.io-client';
import { socket } from '../socket'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

class Chatroom extends Component {
	state = {
		chatroomMsgs: [],
		chatroomBot: []
	}

	// state = {
	// 	viewMenu: false
	// }

	// componentDidMount(){
	// 	document.getElementById("chatroom").style.display="none"
	// }

	/* onChange=(e)=>{
     	var autoExpand = function (field) {

	    // Reset field height
	    field.style.height = 'inherit';

	    // Calculate the height
	    var height = field.scrollHeight + 5
	                 
	    field.style.height = height + 'px';

	    };

	    document.addEventListener('input', function (event) {
	      if (event.target.tagName.toLowerCase() !== 'textarea') return;
	      autoExpand(event.target);
	    }, false);
	}*/

	componentDidMount () {
		// get user details from local storage
		const userDetails = JSON.parse(localStorage.getItem("loggedUserDetails"));
		const accessToken = localStorage.getItem("bearerToken")
		const username = userDetails.username;
		const userId = userDetails.userID;
		
		// get room ID from react router params
		const roomId = this.props.match.params.chatroomid;
		// get room name form current room object
		const roomName = qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).room;

		// declare configuration variable for getting chatroom messages
		var config = {
			method: 'get',
			url: `https://i2talk.live/api/chatrooms/messages/${roomId}`,
			headers: { 
				'Authorization': `Bearer ${accessToken}`
			}
		};
		// get chatroom messages and set state
		axios(config).then(response => {
			this.setState({chatroomMsgs: response.data.data})
		})
		.catch(function (error) {
			console.log(error);
		});	
		// declare socket connection variable
		// const socket = io("https://i2talk.live"
		// , {
		// 		withCredentials: true,
		// 		extraHeaders: {
		// 			"my-custom-header": "abcd"
		// 		}
		// 	}
		// );
		
		// emit joinroom method
		socket.emit ('joinRoom', {username, userId, roomName, roomId});
		// activate welcome bot message
		// socket.on('message', message => {
		// 	console.log(message);
		// 	this.setState({...this.state, chatroomBot: message})
		// })
	}
	
	render () {
		const { chatroomMsgs,  chatroomBot } = this.state;

		// user details
		const userDetails = JSON.parse(localStorage.getItem("loggedUserDetails"));
		//const accessToken = localStorage.getItem("bearerToken")
		const username = userDetails.username;
		const userId = userDetails.userID;

		// chatroom details
		const roomName = qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).room;		;

		// activate welcome bot message
		socket.on('message', message => {
			console.log(message);
			// this.setState({...this.state, chatroomBot: message})
		})

		return (
			<div className="chat-message" id="user-direct-chat">
				<Headers
					text =	{roomName}
					img = "../../../img/dummy-profile.jpg"
					display = "show"
					leave = "Leave room" 
					view = "View details" 
					mute = {null} 
					search = "Search messages"
					report = {null}
				/>

				<div className="chat-body scrollbar" id="style-2">
					<div className="messages-container">
						<ol className="messages-list">
							{chatroomMsgs.map(chatroomMsg => (
								<li
									key={chatroomMsg.ID}
									className = {`chat-new ${chatroomMsg.userID === userId ? "mchat-msg-self" : "mchat-msg-other"}`}
								>
									{chatroomMsg.message}
								</li>
							)) }
							<li>
								{chatroomBot.text}
							</li>
						</ol>
					</div>

				</div>

				<div className="chat-form">

					<Formik

						initialValues={{ msg: '' }}

						validationSchema = {Yup.object({
							msg: Yup
								.string()
								.required()
						})}

						onSubmit = {(values, { setSubmitting, resetForm }) => {
							setTimeout(() => {
								alert(JSON.stringify(values, null, 2));
								setSubmitting(false);
							}, 400);
							const message = values.msg;
							console.log(message);
							socket.emit ('chatMessage', message);

							resetForm();
						}}
						>

						{({ isSubmitting }) => (
							<Form>
								
								<Field type="textarea" 
								name="msg" 
								as="textarea" 
								className= "textScrollbar" 
								id="chatroom-textarea" />

								<button type="submit" disabled={isSubmitting} className="pmsg-btn">
									<i className="far fa-paper-plane"></i>
								</button>
							</Form>
						)}

						</Formik>

						{/* <TextInput 
						value=""
						// value={newMessage} 
						id="pmsg-input" 
						placeholder="Type message here ..." 
						rows="1" 
						// onChange={handleNewMessageChange} 
						onChange 
						className="textScrollbar"/>
						
						{/*<textarea id="pmsg-input" autoCapitalize= "sentences" autoComplete="on" placeholder="Type message here ..." rows="1" required></textarea>*/}
						
						{/* <button 
						// onClick={handleSendMessage} 
						onClick 
						><i className="far fa-paper-plane"></i></button> */}

				</div>
			</div>
		)
	}
	
	
}

export default Chatroom;