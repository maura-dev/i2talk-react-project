import React, { Component } from 'react';
import ChatMenu from './ChatMenu';
//import TextInput from './dashboardComponents/textArea';
import Headers from './dashboardComponents/headers';

class DirectMsg extends Component {

  

  render() {

    return (
      <div className="chat-container">
        <ChatMenu />

        <div className="chat-message-container" id="user-msg-container">
          <div className="chat-message" id="user-direct-chat">
            <Headers
              
              display = "show"
              leave = {null} 
              view={null} 
              mute={null} 
              search={null} 
              report={null}
            />

           
            <div class="chat-message-container" id="user-msg-container" style={{width:"100%"}}>
              <div class="chat-message">
                <div id="main-container">
                  
                    <h1 style={{textAlign:"center", marginTop:"25%"}}>Welcome to i2talk</h1>
                    <p style={{textAlign:"center"}}>No conversation in sync. Please, search for users and start chat.</p>
                
                </div>    
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default DirectMsg;