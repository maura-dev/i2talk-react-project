import React, { useEffect, useState } from "react";
import ChatMenu from './ChatMenu';
import TextInput from './dashboardComponents/textArea';
import Headers from './dashboardComponents/headers';
//import "./ChatRoom.css";
import useChat from "./privateChat/useChat";
//import ChatMessage from "../ChatMessage/ChatMessage";
/*import useTyping from "../useTyping";
import NewMessageForm from "../NewMessageForm/NewMessageForm";
import TypingMessage from "../TypingMessage/TypingMessage";
import Users from "../Users/Users";
import UserAvatar from "../UserAvatar/UserAvatar";
*/
const PrivateChat = (props) => {

  const loggedUserDetails= JSON.parse(localStorage.getItem("loggedUserDetails"))
  const isender= loggedUserDetails.username
  const { receiver }= props.match.params

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

const onChange=(e)=>{
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

    setNewMessage(e.target.value);
  }

  //const { roomId } = props.match.params;
 
  const [newMessage, setNewMessage] = useState("");

  //const { isTyping, startTyping, stopTyping, cancelTyping } = useTyping();

  /*const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };*/

  const handleSendMessage = (event) => {
    event.preventDefault();
    //cancelTyping();
    sendMessage(newMessage);
    setNewMessage("");
  };

  const showSchedule =(event)=>{
    event.preventDefault();
    //cancelTyping();
    scheduleMessage(newMessage);
    setNewMessage("");
  }

  /*useEffect(() => {
    if (isTyping) startTypingMessage();
    else stopTypingMessage();
  }, [isTyping]);*/

  return (
   <div className="chat-container">
        <ChatMenu />

        <div className="chat-message-container" id="user-msg-container">
          <div className="chat-message" id="user-direct-chat">
            <Headers
              
              display = "show"
              leave = {null} 
              view="View profile details" 
              mute={null} 
              search={null} 
              report="report user"
            />

            {/*<div className="chat-room-top-bar">
        <h1 className="room-name">Room: {roomId}</h1>
        {user && <UserAvatar user={user}></UserAvatar>}
      </div>
      <Users users={users}></Users>
      <div className="messages-container">
        <ol className="messages-list">
          {messages.map((message, i) => (
            <li key={i}>
              <ChatMessage message={message}></ChatMessage>
            </li>
          ))}
          {typingUsers.map((user, i) => (
            <li key={messages.length + i}>
              <TypingMessage user={user}></TypingMessage>
            </li>
          ))}
        </ol>
      </div>
      <NewMessageForm
        newMessage={newMessage}
        handleNewMessageChange={handleNewMessageChange}
        handleStartTyping={startTyping}
        handleStopTyping={stopTyping}
        handleSendMessage={handleSendMessage}
      ></NewMessageForm>*/}

            <div className="chat-body scrollbar" id="style-2">
              
              <div id="pmessages">

                {messages.map( message => (

                  
                    <li className="mchat-msg-self" key={message.ID}>
                                                <span id="chat-new">
                                                <p>{message.message}</p>
                                                </span>
                                                </li>
                ))}
              </div>
              <div id="messs">
                swal(
                  <div>
                    <h3> Select the time and date for the message to be sent</h3>
                  </div>

                )

              </div>

            </div>

            <div className="chat-form">

              <form id="pmessageForm">
                <TextInput id="pmsg-input" 
                placeholder="Type message here ..." 
                rows="1" 
                onChange={onChange} 
                className="textScrollbar"
                value={newMessage}
                />
                
                <button className="pmsg-btn" onClick={handleSendMessage}><i className="far fa-paper-plane"></i></button>
                <button className="pmsg-btn"  onClick={showSchedule}><i className="far fa-clock"></i></button>
              </form>

            </div>
          </div>
        </div>
      </div>
      
  );
};

export default PrivateChat;
