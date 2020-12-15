import React, { Component } from 'react';
// import react router link 
import { Link } from 'react-router-dom';

class ChatMenu extends Component {
  render() {
    return (
      <div className="chat-menu">

        <div className="chat-menu-head">
          <div className="chat-menu-profile">
            <div className="chat-menu-open side-bar-profile"> 
              <Link to="/dashboard/profile" id="menu-profile"> </Link>
            </div>
            
            <Link to="/dashboard/isearch" className="tooltip"><i className="fas fa-search fa-1x"></i><span className="tooltiptext">iSearch</span></Link>
            
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
            <span className="chat-counter"></span>
          </div>
          
        </div>

        <div className="chat-contact-list scrollbar" id="user-chat-menu">
          <div id="chat-menu">
          </div>
        </div>
        
      </div>
    )
  }
}

export default ChatMenu;