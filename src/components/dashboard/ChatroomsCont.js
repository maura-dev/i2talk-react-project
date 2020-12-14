import React, { Component } from 'react'
import Headers from './dashboardComponents/headers'
import ChatroomItem from './dashboardComponents/ChatroomItem'

class ChatroomsCont extends Component {
  render() {
    return (
      <div className ="dashboard-feature-container">
        <Headers text="Chatrooms" />
    
        <div className="chatrooms-heading">
          <h3 id="chatrooms-btn" onClick="showChatroomsPage()">Chat Rooms</h3>
          <h3 id="active-btn" onClick="showActivePage()">Active (3)</h3>
        </div>
    
        <div className="chatroom-page-body scrollbar" id="chatrooms-page">

          <ChatroomItem
            name="fas fa-hashtag"
            chatname="Trending"
            text="Discussions about the latest, new and trending topics e.g #EndSars" 
          />

          <ChatroomItem
            name="fas fa-praying-hands"
            chatname="Faith"
            text="Discussions on issues about religion e.g christianity, islam, etc." 
          />
          
          <ChatroomItem
            name="fas fa-futbol"
            chatname="Sports"
            text="Discussions on sports issues e.g football, basketball, olympics etc." 
          />  

          <ChatroomItem
            name="fas fa-icons"
            chatname="Entertainment"
            text="Discussions on entertainment issues e.g movies, music etc." 
          />  

          <ChatroomItem
            name="fas fa-tshirt"
            chatname="Fashion"
            text="Discussions on the latest fashion trends e.g alte fashion" 
          />  

          <ChatroomItem
            name="fas fa-user-graduate"
            chatname="Education"
            text="Discussions on the latest school gist and scholarship opportunities" 
          />  

          <ChatroomItem
            name="fas fa-laptop-code"
            chatname="Technology"
            text="Discussions on the latest technologies" 
          />  

          <ChatroomItem
            name="fas fa-hand-holding-heart"
            chatname="Advice"
            text="Discussions on matters of the heart and heart-to-heart conversations" 
          />  

        </div>
    
        <div id="active-page">
          <ChatroomItem
            name="fas fa-hashtag"
            chatname="Trending"
            text="Discussions about the latest, new and trending topics e.g #EndSars" 
          />

          <ChatroomItem
            name="fas fa-tshirt"
            chatname="Fashion"
            text="Discussions on the latest fashion trends e.g alte fashion" 
          />

          <ChatroomItem
            name="fas fa-hand-holding-heart"
            chatname="Advice"
            text="Discussions on matters of the heart and heart-to-heart conversations" 
          />    

        </div>
    
      </div>
    )
  }
}

export default ChatroomsCont;