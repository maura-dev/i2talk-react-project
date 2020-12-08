import React, { Component } from 'react';
// import page components
import SideBar from './SideBar';
import ChatMenu from './ChatMenu';
// import ChatContent from './ChatContent';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import page components
import DirectMsg from '../dashboard/DirectMsg';
import ChatroomsCont from '../dashboard/ChatroomsCont';
import Idiary from '../dashboard/Idiary';
import Ischedule from '../dashboard/Ischedule';
import Isearch from '../dashboard/Isearch';
import Profile from '../dashboard/Profile';
import Settings from '../dashboard/Settings';

// import page styling
import '../../styles/dashboard.css'

class Dashboard extends Component {
  render() {
    return (
      
      <Router>
        <div className="chat-container-main">

          <SideBar />

          <div className="chat-container">

            <ChatMenu />

            <div className="chat-message-container" id="user-msg-container">
              <Switch>
                <Route exact path="/dashboard/" component={DirectMsg} />
                <Route exact path="/dashboard/chatroomscont" component={ChatroomsCont} />
                <Route exact path="/dashboard/idiary" component={Idiary} />
                <Route exact path="/dashboard/ischedule" component={Ischedule} />
                <Route exact path="/dashboard/isearch" component={Isearch} />
                <Route exact path="/dashboard/profile" component={Profile} />
                <Route exact path="/dashboard/settings" component={Settings} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default Dashboard;
