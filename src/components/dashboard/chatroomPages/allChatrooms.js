import React, {Component } from 'react';
import ChatroomItem from '../dashboardComponents/ChatroomItem';
import Headers from '../dashboardComponents/headers';
import axios from 'axios';
// import ReactDOM from "react-dom";

export default class AllChatrooms extends Component {
  
  // state= {
  //   chatroomsList: []
  // }

  // componentDidMount(){
  //   // const userDetails = JSON.parse(localStorage.getItem("userDetails"));

  //   // const accessToken = userDetails.data.accessToken;
  //   // console.log(accessToken);

  //   var config = {
  //     method: 'get',
  //     url: 'https://i2talk.live/api/chatrooms',
  //     // headers: {
  //     //   'Authorization': `Bearer ${accessToken}`
  //     // }
  //   };
  //   axios(config)
  //   .then((response) =>{
  //     this.setState({chatroomsList: response.data.data})
  //   })

  //   .catch((error) => {
  //     console.log(error);
  //   });

  // }

  render(){
    const { chatroomsList } = this.props;
    // console.log(chatroomsList);
    // chatroomsList.map (chatroomsListItem =>
    //   localStorage.setItem("chatroomDetails", JSON.stringify(chatroomsListItem))
    // )

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
    
        <div className="chatroom-page-body scrollbar" id="chatrooms-page">
          
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