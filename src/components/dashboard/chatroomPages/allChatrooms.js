import React, {Component } from 'react';
import ChatroomItem from '../dashboardComponents/ChatroomItem';
import axios from 'axios';

export default class AllChatrooms extends Component {
  
  state= {
    chatroomsList: []
  }

  componentDidMount(){
    //const userDetails = JSON.parse(localStorage.getItem("userDetails"));
    //console.log(userDetails.data)

    //const accessToken = userDetails.data.accessToken;
   // console.log(accessToken);
   const accessToken=localStorage.getItem("bearerToken")//i changed the user details in the local storage to bearer token in the login form

    var config = {
      method: 'get',
      url: 'https://i2talk.live/api/chatrooms',
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    };
    axios(config).then(
      response =>
        this.setState({
          chatroomsList: response.data.data
        }),
    )
    .catch(function (error) {
      console.log(error);
    });
  }

  render(){
    const { chatroomsList } = this.state;
    console.log(chatroomsList)

    return(
      <React.Fragment>
        <div className="chatrooms-heading">
          <h3 id="chatrooms-btn" onClick="showChatroomsPage()">Chat Rooms</h3>
          <h3 id="active-btn" onClick="showActivePage()">Active (3)</h3>
        </div>
    
        <div className="chatroom-page-body scrollbar" id="chatrooms-page">
          {console.log(chatroomsList)}
          {chatroomsList.map (chatroomsListItem => 
            <ChatroomItem
              key = {chatroomsListItem.ID}
              chatroomsListItem = {chatroomsListItem}
            />
          )}

        </div>
    
        <div id="active-page">
          

        </div>
      </React.Fragment>

    )
  }
    
}