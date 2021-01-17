import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//import Chatroom from '../chatroomPages/Chatroom'

class ChatroomItem extends Component {
  render() {
    const { 
			ID,
			chatRoomName,
			chatRoomDesc, 
			chatRoomIcon 
		} = this.props.chatroomsListItem;
		
		return (
			<Link to={`/dashboard/chatroomscont/chatroom/${ID}?room=${chatRoomName}`}>
				<div className="chatrooms-items">
					<span>
						<i className={chatRoomIcon}></i>
					</span>
					<div>
						<h3 id={chatRoomName}>{chatRoomName}</h3>
						<p>{chatRoomDesc}</p>
					</div>
				</div>
			</Link>
		)
	}
}

ChatroomItem.propTypes = {
	chatroomsListItem: PropTypes.object.isRequired
};

export default ChatroomItem;