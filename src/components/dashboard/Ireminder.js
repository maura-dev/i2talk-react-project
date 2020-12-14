import React, { Component } from 'react'
import Headers from './dashboardComponents/headers'
import Button1 from './dashboardComponents/button1'
class Ireminder extends Component {
  render() {
    return (

      <div className="dashboard-feature-container">
        
          <Headers text="iReminder" />
          
          <div className="ireminder-formarea" id="ireminderForm">
            <textarea className="messageInput" id="ireminderDesc" placeholder="Reminder Details"></textarea>
            
            <form id="ireminder-date">
              <label htmlFor="birthday">Reminder:</label>
              <input type="date" id="ireminder" name="birthday" />
              <Button1 text="Set a New Reminder"/>
            </form>

            <div className="ireminder-result" id="ireminder-textspace"></div>
          </div>

      </div>
    )
  }
}

export default Ireminder;