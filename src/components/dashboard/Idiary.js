import React, { Component } from 'react'

class Idiary extends Component {
  render() {
    return (
      <div className="iDiary-container">

					<nav className="title-bar">
						<a className="message-back-arrow" onclick="backToMenu('user-chat-menu', 'user-msg-container')"><i className="fas fa-long-arrow-alt-left"></i></a>
						<h2 id="featureTitle">iDiary</h2>
						
						<span>
							<i className="fas fa-ellipsis-v"></i>
							<i className="fas fa-cog"></i>
						</span>
					
					</nav>
	
					<div id="overlay"></div>
					
          <div id="top">
						<input type="text" id="searchInput" placeholder="Search saved notes" />
						<button onclick="displayLoader()" id="search-btn"><img src="../assets/img/ajax-loader.gif" width="15px" id="idiary-loader" />Search</button>
						<button id="addNew-btn" onclick="addNewMessage()"><i className="fas fa-plus-circle"></i> Add New Note</button>
					</div>
				
				  <h3 id="records"></h3>
				
				  <button id="back-btn" onclick="displayBackLoader()"><img src="../assets/img/ajax-loader.gif" width="15px" id="idiary-back-loader" />Back to notes</button>
				
					<div id="addNew">
						<textarea type="text" placeholder="Enter your message" name="message" id="messageInput"></textarea>
						<div>
							<button id="submitNewMessage-btn" onclick="displayAddedMessage()">Add</button>
							<button id="cancel" onclick="back()">Cancel</button>
						</div>
					</div>
				  
          <div id="editNew">
						<input type="hidden" id="messageId" />
						<textarea type="text" placeholder="" name="message" id="editMessageInput"></textarea>
						<div>
							<button id="editedMessage-btn" onclick="displayEditedMessage()">Add Changes</button>
							<button id="cancel" onclick="back()">Cancel</button>
						</div>
					</div>
				
					<h3 id="top-heading">Saved Notes</h3>
				
				  <div id="messages"></div>
				</div>
    )
  }
}


export default Idiary;