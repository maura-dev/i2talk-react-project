import React, { Component } from 'react';
import ChatMenu from './ChatMenu';
import Headers from './dashboardComponents/headers';// import component images
import DummyDp from '../../img/users/male.png';

class Settings extends Component {
  render() {
    const loggedUserDetails= JSON.parse(localStorage.getItem("loggedUserDetails"));

    if (loggedUserDetails.bio === "") {
      loggedUserDetails.bio = "Hi, I'm new to the i2talk chatting platform"
    }

    return (
      <div className="chat-container">
        <ChatMenu />

        <div className="chat-message-container" id="user-msg-container">
        
          <div className="dashboard-feature-container" id="style-2">
            <Headers 
              text="Settings"
              img = {null}
              display = "hide"
              leave = {null} 
              view = {null}
              mute = {null} 
              search = {null}
              report = {null} 
            />
      
            <div className="settings-main-container scrollbar" id="settings-main">
              <div className="profile-block">
                <div id="settings-profile-box">
                  <img src={DummyDp} alt="Profile"/>
                </div>
                <button className="button" onClick="showProfilePage()"><i className="far fa-edit">&nbsp;</i>&nbsp;Edit Profile</button>
              </div>
      
              <h2>Account</h2>
      
              <div className="settings-item">
                <h3>Bio</h3>
                <p id="profile-bio-details">{loggedUserDetails.bio}</p>
                
              </div>
      
              <div className="settings-item">
                <h3>Phone Number</h3>
                <p id="profile-phone-number">{loggedUserDetails.phone}</p>
              </div>
      
              <div className="settings-item">
                <h3>Location</h3>
                <p id="profile-location">{loggedUserDetails.state}, Nigeria</p>
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
        </div>
      </div>
    )
  }
}


export default Settings;