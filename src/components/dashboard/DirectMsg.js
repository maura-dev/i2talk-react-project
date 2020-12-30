import React, { Component } from 'react';
import TextInput from './dashboardComponents/textArea';

class DirectMsg extends Component {

  onChange=(e)=>{
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
  }

  render() {
    return (
      <div className="chat-message" id="user-direct-chat">
        <div className="chat-header">

          <a className="message-back-arrow" onClick="showSideBar('user-chat-menu', 'user-direct-chat')"><i className="fas fa-long-arrow-alt-left"></i></a>
          
          <div className="chat-head-img">
            <img src="/users/deven.jpg" />
          </div>

          <div className="chat-head-username">
            <span id="Chatsheader"></span>
          </div>

          <div className="chat-head-menu">
            <a onClick="reveal('chat-menu-list')"><i className="fas fa-ellipsis-v"></i></a>
          </div>

          {/*<ul className="" id="chat-menu-list">
            <li>View Members</li>
            <li>Mute notifications</li>
            <li>Search</li>
            <li>Report</li>
          </ul>
*/}
        </div>

        <div className="chat-body scrollbar" id="style-2">
          
          <div id="pmessages"></div>

          <div id="messs"></div>

        </div>

        <div className="chat-form">

          <form id="pmessageForm">
            <TextInput id="pmsg-input" placeholder="Type message here ..." rows="1" onChange={this.onChange} className="textScrollbar"/>
            {/*<textarea id="pmsg-input" autoCapitalize= "sentences" autoComplete="on" placeholder="Type message here ..." rows="1" required></textarea>*/}
            <button className="pmsg-btn"><i className="far fa-paper-plane"></i></button>
            <button className="pmsg-btn"><i className="far fa-clock"></i></button>
          </form>

        </div>
      </div>
    )
  }
}


export default DirectMsg;