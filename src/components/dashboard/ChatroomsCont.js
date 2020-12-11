import React, { Component } from 'react'
import Headers from './dashboardComponents/headers'

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

          <div className="chatrooms-items">
            <span>
              <i className="fas fa-hashtag"></i>
            </span>
            <div>
              <h3 onClick="enterChatroom(this)" id="trending" data-chatroom-id="PovJhPdtftwtpa0O1AZH" data-chatroom-name="Trending">Trending</h3>
              <p>Discussions about the latest, new and trending topics e.g #EndSars</p>
            </div>
          </div>

          <div className="chatrooms-items">
            <span>
              <i className="fas fa-praying-hands"></i>
            </span>
            <div>
              <h3 onClick="enterChatroom(this)" id="faith" data-chatroom-id="yYLkVcIDak4L8XhTFVDK" data-chatroom-name="faith">Faith</h3>
              <p>Discussions on issues about religion e.g christianity, islam, etc.</p>
            </div>
          </div>

          <div className="chatrooms-items">
            <span>
              <i className="fas fa-futbol"></i>
            </span>
            <div>
              <h3 onClick="enterChatroom(this)" id="sport" data-chatroom-id="yFDHFqsqwIziCFRezUeo" data-chatroom-name="sport">Sports</h3>
              <p>Discussions on sports issues e.g football, basketball, olympics etc.</p>
            </div>
          </div>

          <div className="chatrooms-items">
            <span>
              <i className="fas fa-icons"></i>
            </span>
            <div>
              <h3 onClick="enterChatroom(this)" id="entertainment" data-chatroom-id="SpJ6Atq5QfCt3mWE5Hl9" data-chatroom-name="entertainment">Entertainment</h3>
              <p>Discussions on entertainment issues e.g movies, music etc.</p>
            </div>
          </div>

          <div className="chatrooms-items">
            <span>
              <i className="fas fa-tshirt"></i>
            </span>
            <div>
              <h3 onClick="enterChatroom(this)" id="fashion" data-chatroom-id="jImutgDHM89GSYjARdqL" data-chatroom-name="Fashion">Fashion</h3>
              <p>Discussions on the latest fashion trends e.g alte fashion</p>
            </div>
          </div>

          <div className="chatrooms-items">
            <span>
              <i className="fas fa-user-graduate"></i>
            </span>
            <div>
              <h3 onClick="enterChatroom(this)" id="education" data-chatroom-id="qkuFsoxD9dj3SkT80NdA" data-chatroom-name="Education">Education</h3>
              <p>Discussions on the latest school gist and scholarship opportunities</p>
            </div>
          </div>

          <div className="chatrooms-items">
            <span>
              <i className="fas fa-laptop-code"></i>
            </span>
            <div>
              <h3 onClick="enterChatroom(this)" id="technology" data-chatroom-id="mpc6smvQDLRpFkA2PSoH" data-chatroom-name="Technology">Technology</h3>
              <p>Discussions on the latest technologies</p>
            </div>
          </div>
          
          <div className="chatrooms-items">
            <span>
              <i className="fas fa-hand-holding-heart"></i>
            </span>
            <div>
              <h3 onClick="enterChatroom(this)" id="advice" data-chatroom-id="UxtMVlgP6nqJMVXXNXlC" data-chatroom-name="Advice">Advice</h3>
              <p>Discussions on matters of the heart and heart-to-heart conversations</p>
            </div>
          </div>

        </div>
    
        <div id="active-page">

          <div className="chatrooms-items">
            <span>
              <i className="fas fa-hashtag"></i>
            </span>
            <div>
              <h3 onClick="enterChatroom(this)" id="trending" data-chatroom-id="PovJhPdtftwtpa0O1AZH" data-chatroom-name="Trending">Trending</h3>
              <p>Discussions about the latest, new and trending topics e.g #EndSars</p>
            </div>
          </div>

          <div className="chatrooms-items">
            <span>
              <i className="fas fa-tshirt"></i>
            </span>
            <div>
              <h3 onClick="enterChatroom(this)" id="fashion" data-chatroom-id="jImutgDHM89GSYjARdqL" data-chatroom-name="Fashion">Fashion</h3>
              <p>Discussions on the latest fashion trends e.g alte fashion</p>
            </div>
          </div>

          <div className="chatrooms-items">
            <span>
              <i className="fas fa-hand-holding-heart"></i>
            </span>
            <div>
              <h3 onClick="enterChatroom(this)" id="advice" data-chatroom-id="UxtMVlgP6nqJMVXXNXlC" data-chatroom-name="Advice">Advice</h3>
              <p>Discussions on matters of the heart and heart-to-heart conversations</p>
            </div>
          </div>
            
        </div>
    
      </div>
    )
  }
}

export default ChatroomsCont;