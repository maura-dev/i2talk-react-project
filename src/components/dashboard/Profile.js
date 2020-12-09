import React, { Component } from 'react'

class Profile extends Component {
  render() {
    return (
      <div class= "profile-page">
        <nav class="profile-title-bar">
          <a class="message-back-arrow" onclick="backToMenu('user-chat-menu', 'user-msg-container')"><i class="fas fa-long-arrow-alt-left"></i></a>
          <h2 id="profileTitle">My Profile</h2>
          
          <span>
            <i class="fas fa-ellipsis-v"></i>
            <i class="fas fa-cog"></i>
          </span>
        </nav>

        <div id="profile-image-boxer"></div>
        
        <div class="user-profile-details scrollbar" id="style-2">
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
    )
  }
}

export default Profile;