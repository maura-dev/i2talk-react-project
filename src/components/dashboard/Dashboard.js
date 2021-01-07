import React, { Component } from 'react';

// import react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import page components
import SideBar from './SideBar';
// import ChatMenu from './ChatMenu';
import DirectMsg from '../dashboard/DirectMsg';
import ChatroomsCont from '../dashboard/ChatroomsCont';
import Idiary from '../dashboard/Idiary';
import Ischedule from '../dashboard/Ischedule';
import Ireminder from '../dashboard/IreminderPages/Ireminder';
import Isearch from '../dashboard/Isearch';
import Profile from '../dashboard/Profile';
import Settings from '../dashboard/Settings';
import AdminPanel from '../dashboard/adminPages/AdminPanel';

import RecipeSearch from '../dashboard/recipeSearch';

// import page styling
import '../../styles/dashboard.css'

import axios from'axios'
class Dashboard extends Component {


  render() {
    return (
      
      <Router>
        <div className="chat-container-main">
          <SideBar />
          <Switch>
            <Route exact path="/dashboard/" component={DirectMsg} />
            <Route path="/dashboard/chatroomscont" component={ChatroomsCont} />
            <Route path="/dashboard/idiary" component={Idiary} />
            <Route exact path="/dashboard/ischedule" component={Ischedule} />
            <Route exact path="/dashboard/ireminder" component={Ireminder} />
            <Route exact path="/dashboard/isearch" component={Isearch} />
            <Route exact path="/dashboard/profile" component={Profile} />
            <Route exact path="/dashboard/settings" component={Settings} />
            <Route exact path="/dashboard/admin" component={AdminPanel} />
            <Route exact path="/dashboard/recipe-search" component={RecipeSearch} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default Dashboard;
