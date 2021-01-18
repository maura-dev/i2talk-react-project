import React, { Component } from 'react';
import ChatMenu from '../ChatMenu';
import Headers from '../dashboardComponents/headers';
import EditForm from './EditForm';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import IreminderForm from './IreminderForm';
import IreminderBody from './IreminderBody';


class Ireminder extends Component {
 
  render() {

    return (
      <Router>
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

                <Switch>
                  <Route exact path="/dashboard/ireminder/" render = {() => (
                    <IreminderForm/>
                  )} />
                  <Route exact path="/dashboard/ireminder/editForm/:ID" render = {() => (
                    <EditForm/>
                  )} />
                </Switch>

                <IreminderBody />
              </div>
            </div>
          </div>
        </React.Fragment>
      </Router>
    )
  }
}

export default Ireminder;