import React, { Component } from 'react'

class Settings extends Component {
  render() {
    return (
      <div className="settings-container" id="style-2">

        <nav className="settings-title-bar">
          <a className="message-back-arrow" onclick="backToMenu('user-chat-menu', 'user-msg-container')"><i className="fas fa-long-arrow-alt-left"></i></a>
          <h2 id="settingsTitle">Settings</h2>
          
          <span>
            <i className="fas fa-ellipsis-v"></i>
            <i className="fas fa-cog"></i>
          </span>
        </nav>
  
  
        <div className="settings-main-container scrollbar" id="settings-main">
          <div className="profile-block">
            <div id="settings-profile-box"></div>
            <button className="button" onclick="showProfilePage()"><i className="far fa-edit">&nbsp;</i>&nbsp;Edit Profile</button>
          </div>
  
          <h2>Account</h2>
  
          <div className="settings-item">
            <h3>Bio</h3>
            <p id="profile-bio-details"></p>
            
          </div>
  
          <div className="settings-item">
            <h3>Phone Number</h3>
            <p id="profile-phone-number"></p>
          </div>
  
          <div className="settings-item">
            <h3>Location</h3>
            <p id="profile-location"></p>
          </div>
  
          <h2>Settings</h2>
  
          <div className="settings-item">
            <h3><i className="fas fa-user-shield"></i> &nbsp; Privacy and Security</h3>
          </div>
  
          <div className="settings-item">  
            <h3> <i className="fas fa-bell"></i> &nbsp; Notifications and Sound</h3>
          </div>
  
          <div className="settings-item">  
            <h3><i className="fas fa-user-cog"></i> &nbsp; Chat Settings</h3>
          </div>
  
          <div className="settings-item">  
            <h3><i className="fas fa-server"></i> &nbsp; Data and Storage</h3>
          </div>
  
          <div className="settings-item">
            <h3><i className="fas fa-question-circle"></i> &nbsp; Help</h3>
          </div>
  
        </div>
  
      </div>
    )
  }
}


export default Settings;