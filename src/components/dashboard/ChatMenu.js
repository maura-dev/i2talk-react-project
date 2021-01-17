import React from 'react';
// import react router link 
import { Link } from 'react-router-dom';
import useChat from "./privateChat/chatlist";
// import component images
import DummyDp from '../../img/users/male.png';
import Moment from 'react-moment';

const ChatMenu =() => {
  var loggedUserDetails= JSON.parse(localStorage.getItem("loggedUserDetails"));
  //var realSender = (loggedUserDetails.username).
  console.log(loggedUserDetails)
  const isender= loggedUserDetails.username;
    
  const { senderChats, senderUser } = useChat(isender);

  function ChatScreenName(user, option) {
    const a = user.replace(option, "");
    const result = a.replace("_", "");
    return result;
}

if (senderChats.length > 0) {
  return (
    <div className="chat-menu">

      <div className="chat-menu-head">
        <div className="chat-menu-profile">
          <div className="chat-menu-open side-bar-profile"> 
            <Link to="/dashboard/profile">
              <img src={DummyDp} alt=""/>
            </Link>
          </div>
          
          <Link to="/dashboard/isearch" className="tooltip">
            <i className="fas fa-search fa-1x"></i>
            <span className="tooltiptext">iSearch</span>
          </Link>
          
          <div className="tooltip">
            <Link to="#"><i className="far fa-comment-dots"></i></Link>
            <p className="tooltiptext">New Chat</p>
          </div>
          
          <div className="tooltip">
            <Link to="#"><i className="fas fa-ellipsis-v"></i></Link>
            <p className="tooltiptext">Menu</p>
          </div>
        </div>

        <div className="chat-header">
          <span>Chats</span>
          <span className="chat-counter">{senderChats.length}</span>
        </div>
        
      </div>

      <div className="chat-contact-list scrollbar" id="user-chat-menu">
        <div id="chat-menu">
        <br />
            {senderChats.map( chat => (

              <Link to={`/dashboard/directmsg/${ChatScreenName(chat.chatID, senderUser)}`}>  
              <div class="chat-box">
                <div class="chat-box-col1">
                <div class="chat-box-img">
                  <img src={DummyDp} alt="profile"/>
                </div>
                </div>
                <div class="chat-box-col2">
                <h4>{ChatScreenName(chat.chatID, senderUser)}</h4> 
                <span class="chat-counter">1</span>
                <p>{chat.lastMessage}</p>
                <h6>&nbsp; &nbsp;<Moment format="hh:mm A">{chat.updatedAt}</Moment></h6>
                </div>
                </div>
                </Link>
              ))}
        </div>
      </div>
      
    </div>
  )
  
} else {
  return (<div className="chat-menu">

  <div className="chat-menu-head">
    <div className="chat-menu-profile">
      <div className="chat-menu-open side-bar-profile"> 
        <Link to="/dashboard/profile">
          <img src={DummyDp} alt=""/>
        </Link>
      </div>
      
      <Link to="/dashboard/isearch" className="tooltip">
        <i className="fas fa-search fa-1x"></i>
        <span className="tooltiptext">iSearch</span>
      </Link>
      
      <div className="tooltip">
        <Link to="#"><i className="far fa-comment-dots"></i></Link>
        <p className="tooltiptext">New Chat</p>
      </div>
      
      <div className="tooltip">
        <Link to="#"><i className="fas fa-ellipsis-v"></i></Link>
        <p className="tooltiptext">Menu</p>
      </div>
    </div>

    <div className="chat-header">
      <span>Chats</span>
    </div>
    
  </div>

  <div className="chat-contact-list scrollbar" id="user-chat-menu">
    <div id="chat-menu">
    <div id="chat-center">
<h2>No Conversation yet!</h2>
 <h4>
  Click <Link to="/dashboard/isearch" className="">here</Link> to search for people and start chatting
  </h4>
</div>
    </div>
  </div>
  
</div>

)
      }
}

export default ChatMenu;