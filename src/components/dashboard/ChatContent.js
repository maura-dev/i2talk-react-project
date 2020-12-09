import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import page components
import DirectMsg from '../dashboard/DirectMsg';
import ChatroomsCont from '../dashboard/ChatroomsCont';
import Idiary from '../dashboard/Idiary';
import Ischedule from '../dashboard/Ischedule';
import Isearch from '../dashboard/Isearch';
import Profile from '../dashboard/Profile';
import Settings from '../dashboard/Settings';

class ChatContent extends Component {
  render() {
    return (
        <Switch>
          <Route exact path="/dashboard/" component={DirectMsg} />
          <Route exact path="/chatroomscont" component={ChatroomsCont} />
          <Route exact path="/idiary" component={Idiary} />
          <Route exact path="/ischedule" component={Ischedule} />
          <Route exact path="/isearch" component={Isearch} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/settings" component={Settings} />
        </Switch>
    )
  }
}


export default ChatContent;