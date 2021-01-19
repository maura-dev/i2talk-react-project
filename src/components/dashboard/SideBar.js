import React, { Component } from 'react';
//import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Logout from './Logout';

class SideBar extends Component{
  

  render(){

    return (
      <div className="chat-container-sidebar">
        <div id="side-bar-icons">
          <ul className="sidebar-icons-list">
            <li><Link to="/dashboard/chatroomscont" className="tooltip"><i className="fas fa-comments fa-1x"></i> <span className="tooltiptext">Chat Rooms</span></Link></li>
            <li><Link to="/dashboard/idiary" className="tooltip"><i className="fas fa-book fa-1x"></i> <span className="tooltiptext">iDiary</span></Link></li>
            <li><Link to="/dashboard/ireminder" className="tooltip"><i className="fas fa-alarm-clock fa-1x"></i> <span className="tooltiptext">iReminder</span></Link></li>
            <li><Link to="/dashboard/isearch" className="tooltip"><i className="fas fa-search fa-1x"></i> <span className="tooltiptext">iSearch</span></Link></li>
           {/* <li><Link to="/dashboard/admin" className="tooltip"><i className="fas fa-user-cog fa-1x"></i> <span className="tooltiptext">Admin Panel</span></Link></li>*/}
            <li><Link to="/dashboard/settings" className="tooltip"><i className="fas fa-cog fa-1x"></i> <span className="tooltiptext">Settings</span></Link></li>
            {/* <Logout/> */}
            <li><Link to="/logout" className="tooltip"><i className="fas fa-reply-all fa-1x"></i> <span className="tooltiptext">Log Out</span></Link></li>
            {/* <li id="admin-panel-container"></li> */}
          </ul>
        </div>
      </div>
    )
  }
}


export default SideBar;