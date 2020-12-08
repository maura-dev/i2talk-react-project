import React, { Component } from 'react'

class ChatMenu extends Component {
  render() {
    return (
      <div className="chat-menu">

        <div className="chat-menu-head">
          <div className="chat-menu-profile">
            <div className="chat-menu-open side-bar-profile"> <a href="./profile.html" id="menu-profile"> </a></div>
            <div className="tooltip">
              <a href="./isearch.html"><i className="fas fa-search fa-1x"></i></a>
              <p className="tooltiptext">iSearch</p>
            </div>
            <div className="tooltip">
              <a href=""><i className="far fa-comment-dots"></i></a>
              <p className="tooltiptext">New Chat</p>
            </div>
            <div className="tooltip">
              <a onClick=""><i className="fas fa-ellipsis-v"></i></a>
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