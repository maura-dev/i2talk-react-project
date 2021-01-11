import React, { Component } from 'react';
import ChatMenu from './ChatMenu';
import TextInput from './dashboardComponents/textArea';
import Headers from './dashboardComponents/headers';

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
    console.log(this.props);
    const userDetails= JSON.parse(localStorage.getItem("userDetails"));
    console.log(userDetails.data);
    const loggedUserDetails = userDetails.data;

    return (
      <div className="chat-container">
        <ChatMenu />

        <div className="chat-message-container" id="user-msg-container">
          <div className="chat-message" id="user-direct-chat">
            <Headers
              text = {loggedUserDetails.username}
              img = {loggedUserDetails.dp}
              display = "show"
              leave = {null} 
              view="View profile details" 
              mute={null} 
              search={null} 
              report="report user"
            />

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
        </div>
      </div>
    )
  }
}


export default DirectMsg;