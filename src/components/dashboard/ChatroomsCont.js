import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import ChatMenu from './ChatMenu';
import axios from 'axios';
import AllChatrooms from './chatroomPages/allChatrooms';
import Chatroom from './chatroomPages/Chatroom';

class ChatroomsCont extends Component {
  state= {
    chatroomsList: []
  }
  componentDidMount(){
    // const userDetails = JSON.parse(localStorage.getItem("loggedUserDetails"));

    // const accessToken = userDetails.data.accessToken;
    // console.log(accessToken);

    var config = {
      method: 'get',
      url: 'https://i2talk.live/api/chatrooms',
      // headers: {
      //   'Authorization': `Bearer ${accessToken}`
      // }
    };
    axios(config)
    .then((response) =>{
      this.setState({chatroomsList: response.data.data})
    })

    .catch((error) => {
      console.log(error);
    });

  }

  render() {
    const { chatroomsList } = this.state;

    return (
      
      <Router>
       {/* <div className="chat-container">
          <ChatMenu />*/}


          <div className="chat-message-container" id="user-msg-container">
            <div className ="dashboard-feature-container" >

              <Switch>
                <Route exact path="/dashboard/chatroomscont/" render={(props) => (
                  <AllChatrooms {...props} chatroomsList={chatroomsList} />)} 
                />

                <Route exact path="/dashboard/chatroomscont/chatroom/:chatroomid" render = {(props) => (
                  <Chatroom {...props} chatroomsList = {chatroomsList} />
                )}/>
                
              </Switch> 
            </div>
          </div>
      </Router>
    )
  }
}

export default ChatroomsCont;