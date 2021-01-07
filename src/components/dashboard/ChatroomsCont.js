import React, { Component } from 'react';
import Headers from './dashboardComponents/headers';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ChatMenu from './ChatMenu';


/*import AllChatrooms from './chatroomPages/allChatrooms';
import Chatroom from './chatroomPages/Chatroom';*/
import AllChatrooms from './chatroomPages/allChatrooms';
import Chatroom from './chatroomPages/Chatroom';

class ChatroomsCont extends Component {


  render() {
    
    return (
      
      <Router>
        <div className="chat-container">
          <ChatMenu />


          <div className="chat-message-container" id="user-msg-container">
            <div className ="dashboard-feature-container" >
              <Headers text="Chatrooms" id="chatroom"/>

              <Switch>
                <Route exact path="/dashboard/chatroomscont/" component={AllChatrooms} />
                <Route exact path="/dashboard/chatroomscont/chatroom/:chatname" component={Chatroom} />                          
              </Switch> 
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default ChatroomsCont;