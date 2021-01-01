import React, { Component } from 'react';
import ChatMenu from './ChatMenu';
import Headers from './dashboardComponents/headers';

class Profile extends Component {
  render() {
    return (
      <div className="chat-container">
        <ChatMenu />

        <div className="chat-message-container" id="user-msg-container">
        
          <div className= "dashboard-feature-container">
            <Headers text="My Profile" />

            <div id="profile-image-boxer"></div>
            
            <div className="user-profile-details scrollbar" id="style-2">
              <p>Username</p>
              <input type="text" id="profile-username-input" disabled="disabled" />
              <br />
              <hr />
              <p>Bio</p>
              <input type="text" id="profile-bio-input" disabled="disabled" />
              <br />
              <hr />
              <p>Phone number</p>
              <input type="text" id="profile-number-input" disabled="disabled" />
              <br />
              <hr />
              <p>Sex</p>
              <input type="text" id="profile-sex-input" disabled="disabled" />	
              <br />
              <hr />
              <p>Location</p>
              <input type="text" id="profile-location-input" disabled="disabled" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;