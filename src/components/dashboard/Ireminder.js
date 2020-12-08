import React, { Component } from 'react'

class Ireminder extends Component {
  render() {
    return (

      <div className="ireminder-container">
        
        <div className="ireminder-header">
          <a className="message-back-arrow" onclick="backToMenu('user-chat-menu', 'user-msg-container')"><i className="fas fa-long-arrow-alt-left"></i></a>
          <h2>iReminder</h2>
          <div className="ireminder-dropdown">
            <span>
              <i className="fas fa-ellipsis-v"></i>
              <i className="fas fa-cog"></i>
            </span>
          </div>
        </div>

        <div className="ireminder-formarea" id="ireminderForm">
          <textarea className="ireminder-textarea" id="ireminderDesc" placeholder="Reminder Details"></textarea>
          
          <form id="ireminder-date">
            <label htmlFor="birthday">Reminder:</label>
            <input type="date" id="ireminder" name="birthday" />
            <button className="ireminder-button" id="reminderDesc"><i className="fas fa-plus-circle"></i>Set a New Reminder</button>
          </form>

          <div className="ireminder-result" id="ireminder-textspace"></div>
        </div>

      </div>
    )
  }
}

export default Ireminder;