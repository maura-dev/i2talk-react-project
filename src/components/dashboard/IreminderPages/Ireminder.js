import React, { Component } from 'react';
import ChatMenu from '../ChatMenu';
import Headers from '../dashboardComponents/headers';
import EditForm from './EditForm';
import { connect } from 'react-redux';
import { ToggleEdit } from '../../../actions/ireminderActions'
import IreminderForm from './IreminderForm';
import IreminderBody from './IreminderBody';


class Ireminder extends Component {
 
  
  render() {
    const { editForm } = this.props;
    console.log(this.props)

    return (
      <React.Fragment>
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

              {editForm ? <EditForm /> : <IreminderForm />}

              <IreminderBody />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
	editForm: state.editForm.editForm
})

export default connect(mapStateToProps, {ToggleEdit})( Ireminder );