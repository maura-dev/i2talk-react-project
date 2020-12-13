import React, { Component } from 'react'
import Headers from './dashboardComponents/headers'

class Ireminder extends Component {
  render() {
    return (

      <div className="dashboard-feature-container">
        
          <Headers text="iReminder" />
          
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