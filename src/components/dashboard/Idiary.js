import React, { Component } from 'react'
import Headers from './dashboardComponents/headers'

class Idiary extends Component {
  render() {
    return (
      <div className="dashboard-feature-container">

					<Headers text="iDiary" />
	
					<div id="overlay"></div>
					
          <div id="top">
						<input type="text" id="searchInput" placeholder="Search saved notes" />
						<button onClick="displayLoader()" id="search-btn"><img src="../assets/img/ajax-loader.gif" width="15px" id="idiary-loader" />Search</button>
						<button id="addNew-btn" onClick="addNewMessage()"><i className="fas fa-plus-circle"></i> Add New Note</button>
					</div>
				
				  <h3 id="records"></h3>
				
				  <button id="back-btn" onClick="displayBackLoader()"><img src="../assets/img/ajax-loader.gif" width="15px" id="idiary-back-loader" />Back to notes</button>
				
					<div id="addNew">
						<textarea type="text" placeholder="Enter your message" name="message" id="messageInput"></textarea>
						<div>
							<button id="submitNewMessage-btn" onClick="displayAddedMessage()">Add</button>
							<button id="cancel" onClick="back()">Cancel</button>
						</div>
					</div>
				  
          <div id="editNew">
						<input type="hidden" id="messageId" />
						<textarea type="text" placeholder="" name="message" id="editMessageInput"></textarea>
						<div>
							<button id="editedMessage-btn" onClick="displayEditedMessage()">Add Changes</button>
							<button id="cancel" onClick="back()">Cancel</button>
						</div>
					</div>
				
					<h3 id="top-heading">Saved Notes</h3>
				
				  <div id="messages"></div>
				</div>
    )
  }
}


export default Idiary;