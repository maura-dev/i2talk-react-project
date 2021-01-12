import React, { Component } from 'react';
import ChatMenu from '../ChatMenu';
import Headers from '../dashboardComponents/headers';
import EditForm from './EditForm'
import IreminderForm from './IreminderForm';
import IreminderBody from './IreminderBody';


class Ireminder extends Component {
  state={
		editForm : false
	}

	showEdit=()=>{
		this.setState({editForm: !this.state.editForm})
	}

  render() {
    
		//const { editForm } = this.state;
    return (
      <div className="chat-container">
        <ChatMenu />

        <div className="chat-message-container" id="user-msg-container">
          <div className="dashboard-feature-container">
            
            <Headers 
              text="iReminder"
              img = {null}
              display = "show"
              leave = {null} 
              view = {null}
              mute = {null} 
              search = "Search reminders"
              report = {null} 
            />

           {/* {
              editForm ? <EditForm /> : <IreminderForm />
            }*/}

            <IreminderForm />

            <IreminderBody showEdit = {this.showEdit} />
          </div>
        </div>
      </div>
    )
  }
}

export default Ireminder;