import React, { Component } from 'react';
import ChatMenu from '../ChatMenu';
import Headers from '../dashboardComponents/headers';
import Button1 from '../dashboardComponents/button1';
import IreminderForm from './IreminderForm';
import IreminderBody from './IreminderBody';


class Ireminder extends Component {
  render() {
    return (
      <div className="chat-container">
        <ChatMenu />

        <div className="chat-message-container" id="user-msg-container">
          <div className="dashboard-feature-container">
            
            <Headers text="iReminder" />

            <IreminderForm />

            <IreminderBody />
          </div>
        </div>
      </div>
    )
  }
}

export default Ireminder;