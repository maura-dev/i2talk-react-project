import React, { Component } from 'react';
import ChatMenu from './ChatMenu';
import Headers from './dashboardComponents/headers';
//import Button1 from './dashboardComponents/button1'
import Button2 from './dashboardComponents/button2';
class Isearch extends Component {
  render() {
    return (
      <div className="chat-container">
        <ChatMenu />

        <div className="chat-message-container" id="user-msg-container">
          <div className="dashboard-feature-container" id="user-iSearch-page">
            <Headers text="iSearch" />
            
            <p id="iSearch-header">Search for Users by Location or Username</p>

            <input className="searchInput isearch-input" type="text" placeholder="Type location here e.g Lagos" required />
            
            <div className="isearch-btns">
              <Button2 text="Search By Location" />
              <Button2 text="Search By Username" /> 
              <Button2 text="Search Nearby Users" />
            </div>

            <div className="scrollbar" id="iSearch-result"></div>
          </div>
        </div>
      </div>
    )
  }
}


export default Isearch;