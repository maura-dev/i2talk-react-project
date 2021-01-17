import React, { useEffect, useState, useRef } from "react";
import ChatMenu from './ChatMenu';
import TextInput from './dashboardComponents/textArea';
import Headers from './dashboardComponents/headers';
//import "./ChatRoom.css";
import useChat from "./privateChat/useChat";
// import useTyping from "./charo/useTyping";
import NewMessageForm from "./chatroomPages/NewMessageForm";
// import TypingMessage from "./TypingMessage";
import Moment from 'react-moment';
import DummyDp from '../../img/users/male.jpg';

const PrivateChat = (props) => {

  const loggedUserDetails= JSON.parse(localStorage.getItem("loggedUserDetails"))
  const isender= loggedUserDetails.username
  const { receiver }= props.match.params
  // const userDetails = JSON.parse(localStorage.getItem("loggedUserDetails"));
  // const userId = userDetails.id;

  function getPrivateChatID(isender, receiver) {
    const chatOwner = [isender, receiver];
    chatOwner.sort((a, b) => a.localeCompare(b));
    return  `${chatOwner[0]}_${chatOwner[1]}`
}

const chatID= getPrivateChatID(isender,receiver)

const {
    messages,
    user,
/*    users,
    typingUsers,*/
    sendMessage,
    scheduleMessage,
    /*startTypingMessage,
    stopTypingMessage,*/
  } = useChat(chatID, isender, receiver);

  const [newMessage, setNewMessage] = useState("");
  // const { isTyping, startTyping, stopTyping, cancelTyping } = useTyping();


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
    // cancelTyping();
    sendMessage(newMessage);
    setNewMessage("");
    scrollToBottom();
  };

  const backMenu = () => {
    return props.history.goBack;
  }

  return (
   <div className="chat-container">
        <ChatMenu />
        <div className="chat-message-container" id="user-msg-container">
        <div className="chat-message" id="user-direct-chat">
      <Headers
        text =	{receiver}
        img = {DummyDp}
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
            {messages.map((message,i) => (
              <li
                key={i}
                className = {`chat-new ${message.sender === isender ? "mchat-msg-self" : "mchat-msg-other"}`}
              >
                {/* <span className= {`${message.sender === isender ? "hide": "msg-head"}`}>{message.sender}</span> */}
                {message.message}
                <span className="msg-time"><Moment format="hh:mm">{message.timePosted}</Moment></span>
              </li>
            )) }
{/* 
            {typingUsers.map((user, i) => (
              <li key={messages.length + i}>
                <TypingMessage user={user}></TypingMessage>
              </li>
            ))} */}
            <div ref={messagesEndRef}/>
          </ol>
        </div>
      </div>
      <NewMessageForm
        newMessage={newMessage}
        handleNewMessageChange={handleNewMessageChange}
        // handleStartTyping={startTyping}
        // handleStopTyping={stopTyping}
        handleSendMessage={handleSendMessage}
      ></NewMessageForm>
            
    </div>
    </div>
    </div>
      
  );
};

export default PrivateChat;
