import React, { useEffect, useState, useRef } from 'react';
import Headers from '../dashboardComponents/headers';

import useChatroom from "./useChatroom";
import useTyping from "./useTyping";
import NewMessageForm from "./NewMessageForm";
import TypingMessage from "./TypingMessage";

import qs from 'qs';
import Moment from 'react-moment';

const Chatroom2 = ( props ) => {
  // get room ID from react router params
  const roomId = props.match.params.chatroomid;
  // get room name form current room object
  const roomName = qs.parse(props.location.search, { ignoreQueryPrefix: true }).room;
  const userDetails = JSON.parse(localStorage.getItem("loggedUserDetails"));
  const userId = userDetails.id;

  const {
    messages,
    user,
    users,
    typingUsers,
    sendMessage,
    startTypingMessage,
    stopTypingMessage,
  } = useChatroom(roomName, roomId);

  const [newMessage, setNewMessage] = useState("");
  const { isTyping, startTyping, stopTyping, cancelTyping } = useTyping();

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [messages]);

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = (event) => {
    event.preventDefault();
    cancelTyping();
    sendMessage(newMessage);
    setNewMessage("");
    scrollToBottom();
  };

  const backMenu = () => {
    return props.history.goBack;
  }

  useEffect(() => {
    if (isTyping) startTypingMessage();
      else stopTypingMessage();
    }, [isTyping]
  );
    
  return (
    <div className="chat-message" id="user-direct-chat">
      <Headers
        text =	{roomName}
        img = "../../../img/dummy-profile.jpg"
        display = "show"
        back = {backMenu()}
        leave = "Leave room" 
        view = "View details" 
        mute = {null}
        search = "Search messages"
        report = {null}
      />

      <div className="chat-body scrollbar" id="style-2">
        <div className="messages-container">
          <ol className="messages-list">
            {console.log(messages)}
            {messages.map((message,i) => (
              <li
                key={i}
                className = {`chat-new ${message.userID === userId ? "mchat-msg-self" : "mchat-msg-other"}`}
              >
                <span className= {`${message.userID === userId ? "hide": "msg-head"}`}>{message.username}</span>
                {message.message}
                <span className="msg-time"><Moment format="hh:mm">{message.timePosted}</Moment></span>
              </li>
            )) }

            {typingUsers.map((user, i) => (
              <li key={messages.length + i}>
                <TypingMessage user={user}></TypingMessage>
              </li>
            ))}
            <div ref={messagesEndRef}/>
          </ol>
        </div>
      </div>
      <NewMessageForm
        newMessage={newMessage}
        handleNewMessageChange={handleNewMessageChange}
        handleStartTyping={startTyping}
        handleStopTyping={stopTyping}
        handleSendMessage={handleSendMessage}
      ></NewMessageForm>
    </div>
  )
	
}

export default Chatroom2;