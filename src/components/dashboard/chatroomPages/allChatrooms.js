import React, {Component } from 'react';
import ChatroomItem from '../dashboardComponents/ChatroomItem';
import Headers from '../dashboardComponents/headers';
import axios from 'axios';
// import ReactDOM from "react-dom";

export default class AllChatrooms extends Component {
  
  state= {
    chatroomsList: [],
    isLoading:true
  }

  componentDidMount(){
    //const userDetails = JSON.parse(localStorage.getItem("loggedUserDetails"));
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
          chatroomsList: response.data.data,
          isLoading:false
        }),
    )
    .catch(function (error) {
      console.log(error);
    });
  }

  render(){
    const { chatroomsList, isLoading } = this.state;
    console.log(chatroomsList)

    return(
      <React.Fragment>
        
        <Headers 
          text="Chatrooms" 
          id="chatroom"
          img = {null}
          display="hide"
          leave={null} 
          view={null} 
          mute={null} 
          search={null} 
          report={null}
        />

        <div className="chatrooms-heading">
          <h3 id="chatrooms-btn" onClick="showChatroomsPage()">Chat Rooms</h3>
          <h3 id="active-btn" onClick="showActivePage()">Active (3)</h3>
        </div>
    
        {isLoading ?  (<i className="fa fa-spinner fa-spin" style={{fontSize:"50px",margin:"20% 30% 20% 45%", color:"var(--primary-color)"}}></i>) : 
        (<div className="chatroom-page-body scrollbar" id="chatrooms-page">
          {console.log(chatroomsList)}
          {chatroomsList.map (chatroomsListItem => 
            <ChatroomItem
              key = {chatroomsListItem.ID}
              chatroomsListItem = {chatroomsListItem}
            />

          )}

        </div>)}
    
        <div id="active-page">
          

        </div>
      </React.Fragment>

    )
  }
    
}